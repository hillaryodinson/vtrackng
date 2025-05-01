import { Request, Response } from "express";
import db from "../configs/db";
import { AppError, ERROR_CODES } from "../utils/errors";
import { TypedRequest } from "../configs/requests";
import { getErrorMessage } from "../utils/helper";

// Create a new visitor
export const createVisitor = async (req: Request, res: Response) => {
	const visitor = await db.visitor.create({
		data: req.body,
	});
	res.status(201).json({
		success: true,
		visitor,
	});
};

// Read all visitors
export const getVisitors = async (_req: Request, res: Response) => {
	const visitors = await db.visitor.findMany();
	res.status(200).json({
		success: true,
		visitors,
	});
};

// Read a single visitor by ID
export const getVisitorById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const visitor = await db.visitor.findFirst({
		where: { Id: id },
	});
	if (!visitor) {
		const errCode = ERROR_CODES.USER_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode), 404);
	}
	res.status(200).json({
		success: true,
		visitor,
	});
};

// Update a visitor by ID
export const updateVisitor = async (req: Request, res: Response) => {
	const { id } = req.params;
	const visitor = await db.visitor.update({
		where: { Id: id },
		data: req.body,
	});
	res.status(200).json({
		success: true,
		visitor,
	});
};

// Delete a visitor by ID
export const deleteVisitor = async (req: Request, res: Response) => {
	const request = req as TypedRequest<{ id: string }>;
	const admin = request.user;
	const { id } = req.params;

	if (!admin || admin.role.toLowerCase() !== "admin") {
		const errCode = ERROR_CODES.USER_NOT_AUTHORIZED;
		throw new AppError(errCode, getErrorMessage(errCode), 404);
	}
	await db.visitor.delete({
		where: { Id: id },
	});
	res.status(204).send();
};
