import { z } from "zod";
import { UserSchema } from "./zod";
import { AppointmentSchema } from "../controllers/appointment.controller";
export type AccessTokenType = {
	id: string;
	name: string;
	email: string;
	role: string;
};

// Enum Role
export const RoleEnum = z.enum(["Admin", "Staff"]); // adjust based on your actual enum values
export type UserType = z.infer<typeof UserSchema>;

export type AppointmentType = z.infer<typeof AppointmentSchema>;
