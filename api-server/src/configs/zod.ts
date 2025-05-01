import { z } from "zod";
import { RoleEnum } from "./types";

export const UserSchema = z.object({
	Id: z.string().optional(), // usually auto-generated, so often not required on input
	FirstName: z.string().min(1, "First name is required"),
	LastName: z.string().min(1, "Last name is required"),
	Email: z.string().email("Invalid email address"),
	Role: RoleEnum.default("Staff"),
	Password: z.string().min(6, "Password must be at least 6 characters long"),
	StaffID: z.string().optional().nullable(),
	DepartmentId: z.string().min(1, "Department ID is required"),
	FloorId: z.string().min(1, "Floor ID is required"),
});
