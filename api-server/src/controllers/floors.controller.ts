import { Request, Response } from "express";
import db from "../configs/db";
import { AppError, ERROR_CODES } from "../utils/errors";
import { getErrorMessage } from "../utils/helper";

// Create a new floor
export const createFloor = async (req: Request, res: Response) => {
	const { name } = req.body;
	const floor = await db.floor.create({
		data: {
			Name: name,
		},
	});
	res.status(201).json({
		success: true,
		floor,
	});
};

// Read all floors
export const getFloors = async (req: Request, res: Response) => {
	const floors = await db.floor.findMany();
	res.status(200).json({
		success: true,
		floors,
	});
};

// Read a single floor by ID
export const getFloor = async (req: Request, res: Response) => {
	const { id } = req.params;
	const floor = await db.floor.findUnique({
		where: { Id: id },
	});
	if (!floor) {
		const errCode = ERROR_CODES.ITEM_NOT_FOUND;
		throw new AppError(errCode, getErrorMessage(errCode), 404);
	}
	res.status(200).json({
		success: true,
		floor,
	});
};

// Update a floor by ID
export const updateFloor = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { name } = req.body;
	const floor = await db.floor.update({
		where: { Id: id },
		data: { Name: name },
	});
	res.status(200).json(floor);
};

// Delete a floor by ID
export const deleteFloor = async (req: Request, res: Response) => {
	const { id } = req.params;
	await db.floor.delete({
		where: { Id: id },
	});
	res.status(204).send();
};
