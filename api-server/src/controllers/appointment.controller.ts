import { z } from "zod";
import db from "../configs/db";
import { Request, Response } from "express";
import {
	generateRandomString,
	generateUniqueRandomStrings,
	getCurrentTime,
	getErrorMessage,
} from "../utils/helper";
import { AppError, ERROR_CODES } from "../utils/errors";
import { NodemailerDB } from "../services/nodemailer-db";
import { sendSMS } from "../services/otp";
import { TypedRequest, TypedRequestBody } from "../configs/requests";
import { AppointmentType } from "../configs/types";

export const AppointmentSchema = z.object({
	VisitorId: z.string(),
	Purpose: z.string(),
	Message: z.string().optional(),
	NoVisitors: z.number(),
	AppointmentDate: z.date(),
});

export const sendInvite = async (req: Request, res: Response) => {
	const request = req as TypedRequestBody<AppointmentType>;
	const staff = request.user;

	if (!staff) {
		const errCode = ERROR_CODES.VALIDATION_UNAUTHENTICATED;
		throw new AppError(errCode, getErrorMessage(errCode));
	}

	const zodResponse = await AppointmentSchema.safeParse(req.body);
	if (zodResponse.error) throw zodResponse;

	const invitationCode = generateRandomString(6);
	const notificationMessage =
		(zodResponse.data.Message ||
			`You have been invited for an appointment.`) +
		` Your invitation code is: ${invitationCode}`;

	const invite = await db.appointment.create({
		data: {
			...zodResponse.data,
			StaffId: staff.id,
			Message: notificationMessage,
			InvitationCode: invitationCode,
		},
	});

	// Send invite to the recipient via email or phone number

	const recipient = await db.visitor.findUnique({
		where: { Id: zodResponse.data.VisitorId },
	});

	if (!recipient) {
		const errCode = ERROR_CODES.USER_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode));
	}

	// Assuming you have a utility function to send emails or SMS

	if (recipient.Email) {
		const mailer = new NodemailerDB(db);
		const FROM = process.env.NO_REPLY || "noreply@system.com";
		const subject = `Invitation to ${
			process.env.ORGANISTION || "Organisation Name"
		}`;
		await mailer.sendMail({
			to: recipient.Email,
			from: FROM,
			subject: subject,
			template: "invitation_email",
			context: {
				message: notificationMessage,
			},
		});
	} else if (recipient.Phone) {
		await sendSMS(recipient.Phone, notificationMessage);
	} else {
		throw new AppError(
			ERROR_CODES.USER_INVALID_CREDENTIALS,
			"Recipient contact information is missing"
		);
	}

	res.status(201).json({
		success: true,
		invite,
	});
};

export const cancelInvite = async (req: Request, res: Response) => {
	const { inviteId } = req.params;

	const appointment = await db.appointment.findFirst({
		where: { Id: inviteId },
	});

	if (!appointment) {
		const errCode = ERROR_CODES.ITEM_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode));
	}
	const invite = await db.appointment.update({
		where: { Id: appointment.Id },
		data: {
			Status: "cancelled",
		},
	});

	res.status(200).json(invite);
};

export const rescheduleAppointment = async (req: Request, res: Response) => {
	const { appointmentId, newDate } = req.body;
	const appointment = await db.appointment.findFirst({
		where: { Id: appointmentId },
	});

	if (!appointment) {
		const errCode = ERROR_CODES.ITEM_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode));
	}
	await db.appointment.update({
		where: { Id: appointmentId },
		data: { RescheduleDate: new Date(newDate) },
	});

	res.status(200).json({
		success: true,
		appointment,
	});
};

export const viewAppointments = async (req: Request, res: Response) => {
	const request = req as TypedRequest;
	const user = request.user;

	if (!user) {
		const errCode = ERROR_CODES.VALIDATION_UNAUTHENTICATED;
		throw new AppError(errCode, getErrorMessage(errCode));
	}

	const appointments = await db.appointment.findMany({
		where: { StaffId: user.id },
	});

	res.status(200).json({
		success: true,
		appointments,
	});
};
