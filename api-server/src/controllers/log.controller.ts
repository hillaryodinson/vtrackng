import db from "../configs/db";
import { Request, Response } from "express";
import { getCurrentTime, getErrorMessage } from "../utils/helper";
import { AppError, ERROR_CODES } from "../utils/errors";

// Create a new VisitorLog
export const checkin = async (req: Request, res: Response) => {
	const { VisitorId, StaffId, PurposeOfVisit, TagNo, NoOfVistiors } =
		req.body;

	const CheckInTime = getCurrentTime();

	const visitorLog = await db.visitorLog.create({
		data: {
			VisitorId,
			StaffId,
			PurposeOfVisit,
			TagNo,
			NoOfVistiors,
			CheckInTime,
			CheckOutTime: null, // Assuming CheckOutTime is null at check-in
		},
	});

	res.status(201).json({
		success: true,
		visitorLog,
	});
};

// Checks a visitor In with invite code
export const checkInWithInvitationCode = async (
	req: Request,
	res: Response
) => {
	const { inviteCode, tagNo } = req.body;
	if (!inviteCode) {
		const errCode = ERROR_CODES.VALIDATION_MISSING_FIELD;
		throw new AppError(errCode, getErrorMessage(errCode));
	}
	const appointment = await db.appointment.findFirst({
		where: {
			InvitationCode: inviteCode,
			AppointmentDate: new Date(new Date().toDateString()),
		},
	});

	if (!appointment) {
		const errCode = ERROR_CODES.ITEM_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode));
	}

	const CheckInTime = getCurrentTime();

	//log appointment to log book and
	await db.visitorLog.create({
		data: {
			VisitorId: appointment.VisitorId,
			StaffId: appointment.StaffId,
			PurposeOfVisit: appointment.Purpose,
			TagNo: tagNo,
			NoOfVistiors: appointment.NoVisitors,
			CheckInTime,
		},
	});

	await db.appointment.update({
		data: { Status: "visitor_around" },
		where: { Id: appointment.Id },
	});

	res.status(201).json({
		success: true,
		message: "Appointment booked successfully",
	});
};

// Checks out a visitor by tag Id
export const checkout = async (req: Request, res: Response) => {
	const { tagno } = req.params;

	const startOfDay = new Date();
	startOfDay.setHours(0, 0, 0, 0);

	const endOfDay = new Date();
	endOfDay.setHours(23, 59, 59, 999);

	const visitorLog = await db.visitorLog.findFirst({
		where: {
			TagNo: tagno,
			CreatedAt: {
				gte: startOfDay,
				lte: endOfDay,
			},
			CheckOutTime: null,
		},
	});

	const CheckOutTime = getCurrentTime();

	if (!visitorLog) {
		const errCode = ERROR_CODES.ITEM_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode), 400);
	}

	await db.visitorLog.update({
		where: { Id: visitorLog.Id },
		data: { CheckOutTime },
	});

	res.status(200).json({
		success: true,
		visitorLog,
	});
};

// // Update a VisitorLog
// export const updateVisitorLog = async (req: Request, res: Response) => {
// 	const { id } = req.params;
// 	const data = req.body;

// 	const updatedVisitorLog = await db.visitorLog.update({
// 		where: { Id: id },
// 		data,
// 	});

// 	res.status(200).json({
// 		success: true,
// 		message: "Log updated",
// 		updatedVisitorLog,
// 	});
// };

// // Delete a VisitorLog
// export const deleteVisitorLog = async (req: Request, res: Response) => {
// 	const { id } = req.params;

// 	await db.visitorLog.delete({
// 		where: { Id: id },
// 	});

// 	res.status(204).send();
// };

// List VisitorLogs with filtering
export const listVisitorLogs = async (req: Request, res: Response) => {
	const { name, companyName, date } = req.query;

	const visitorLogs = await db.visitorLog.findMany({
		where: {
			Visitor: {
				Name: name
					? { contains: name as string, mode: "insensitive" }
					: undefined,
				Company: companyName
					? {
							Name: {
								contains: companyName as string,
								mode: "insensitive",
							},
					  }
					: undefined,
			},
			CreatedAt: date ? { gte: new Date(date as string) } : undefined,
		},
		include: {
			Visitor: true,
			Staff: true,
		},
	});

	res.status(200).json({
		success: true,
		visitorLogs,
	});
};
