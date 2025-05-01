import type { Express } from "express-serve-static-core";
import { Request, Response, Router } from "express";
import { tryCatch } from "../middlewares/middleware";
import UserRoutes from "./user.route";

const DefaultRoute = Router();

DefaultRoute.get(
	"/health",
	tryCatch((req: Request, res: Response) => {
		res.json({ success: true, message: "Server healthy" });
	})
);

const initRoutes = (baseRoute: string, app: Express) => {
	app.use(`${baseRoute}`, DefaultRoute);
	app.use(`${baseRoute}/user`, UserRoutes);
};

export default initRoutes;
