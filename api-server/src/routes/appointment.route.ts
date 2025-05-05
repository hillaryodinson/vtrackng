import { Router } from "express";
import { authorize, tryCatch } from "../middlewares/middleware";
import { sendInvite } from "../controllers/appointment.controller";

const AppointmentRoute = Router();

AppointmentRoute.post("/", authorize, tryCatch(sendInvite));
export default AppointmentRoute;
