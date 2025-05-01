import { Request, Response } from "express";
import db from "../configs/db";
import { AppError, ERROR_CODES } from "../utils/errors";
import { getErrorMessage } from "../utils/helper";

// Create a new department
export const createDepartment = async (req: Request, res: Response) => {
	const { Name } = req.body;
	const department = await db.department.create({
		data: {
			Name,
		},
	});
	res.status(201).json({
		success: true,
		department,
	});
};

// Read all departments
export const getDepartments = async (req: Request, res: Response) => {
	const departments = await db.department.findMany();
	res.status(200).json({
		success: true,
		departments,
	});
};

// Read a single department by ID
export const getDepartment = async (req: Request, res: Response) => {
	const { id } = req.params;
	const department = await db.department.findUnique({
		where: { Id: id },
	});
	if (!department) {
		const errCode = ERROR_CODES.ITEM_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode), 404);
	}
	res.status(200).json({
		success: true,
		department,
	});
};

// Update a department by ID
export const updateDepartment = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { Name } = req.body;
	const department = await db.department.update({
		where: { Id: id },
		data: { Name },
	});
	res.status(200).json(department);
};

// Delete a department by ID
export const deleteDepartment = async (req: Request, res: Response) => {
	const { id } = req.params;
	await db.department.delete({
		where: { Id: id },
	});
	res.status(204).send();
};
