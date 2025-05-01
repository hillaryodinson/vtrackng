import { Request, Response } from "express";
import { z } from "zod";
import * as argon from "argon2";
import { AppError, ERROR_CODES } from "../utils/errors";
import {
	CustomResponse,
	TypedRequestBody,
	TypedRequestQuery,
	TypedResponse,
} from "../configs/requests";
import db from "../configs/db";
import { UserSchema } from "../configs/zod";
import { UserType } from "../configs/types";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
	const request = req as TypedRequestBody<UserType>;
	const body = request.body;

	const zodResponse = await UserSchema.safeParse(body);
	if (zodResponse.error) throw zodResponse;

	const existingUser = await db.user.findUnique({
		where: {
			Email: zodResponse.data.Email,
		},
	});
	if (existingUser) {
		throw new AppError(
			ERROR_CODES.USER_NOT_FOUND,
			"A user with this email already exists",
			404
		);
	}

	//TODO: Add email Notification for New User Creation

	const hashedPassword = await argon.hash(body.Password); // Ensure bcrypt is imported
	const user = await db.user.create({
		data: {
			...body,
			Password: hashedPassword,
		},
	});

	res.status(201).json({
		success: true,
		message: "User was created",
		data: user,
	});
};

// Read a user by ID
export const getUser = async (
	req: Request,
	res: TypedResponse<CustomResponse>
) => {
	const user = await db.user.findFirst({
		where: {
			Id: req.params.id,
		},
		include: {
			VisitorLogs: true,
			Appointments: true,
			Department: true,
			Floor: true,
		},
	});
	if (!user) {
		throw new AppError(ERROR_CODES.USER_NOT_FOUND, "User not found", 404);
	}
	res.status(200).json({ success: true, data: user });
};

// Update a user by ID
export const updateUser = async (req: Request, res: Response) => {
	const request = req as TypedRequestQuery<{ id: string }>;
	const owner = request.user;

	if (
		!owner ||
		(owner.id !== request.query.id && owner.role.toLowerCase() != "admin")
	) {
		throw new AppError(
			ERROR_CODES.USER_NOT_AUTHORIZED,
			"Only administrator or owner of account can update profile",
			401
		);
	}

	const user = await db.user.update({
		data: {
			...req.body,
		},
		where: {
			Id: req.params.id,
		},
	});
	if (!user) {
		throw new AppError(ERROR_CODES.USER_NOT_FOUND, "User not found", 404);
	}
	res.status(200).json(user);
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
	const request = req as TypedRequestQuery<{ id: string }>;
	const admin = request.user;

	if (!admin || admin.role.toLowerCase() != "admin") {
		throw new AppError(
			ERROR_CODES.USER_NOT_AUTHORIZED,
			"Only administrator can delete users",
			401
		);
	}
	const user = await db.user.delete({
		where: {
			Id: req.params.id,
		},
	});
	if (!user) {
		throw new AppError(ERROR_CODES.USER_NOT_FOUND, "User not found", 404);
	}
	res.status(200).json({
		success: true,
		message: "User deleted successfully",
	});
};

// List all users
export const listUsers = async (_req: Request, res: Response) => {
	const users = await db.user.findMany();
	res.status(200).json({
		success: true,
		data: users,
	});
};
