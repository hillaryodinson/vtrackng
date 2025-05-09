import type { Express } from "express-serve-static-core";
import { Request, Response, Router } from "express";
import { tryCatch } from "../middlewares/middleware";
import UserRoutes from "./user.route";
import DeptRoutes from "./dept.route";
import FloorRoutes from "./floor.route";
import VisitorRoutes from "./visitor.route";
import VisitorsLogRoute from "./log.route";

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
	app.use(`${baseRoute}/departments`, DeptRoutes);
	app.use(`${baseRoute}/floor`, FloorRoutes);
	app.use(`${baseRoute}/visitors`, VisitorRoutes);
	app.use(`${baseRoute}/logs`, VisitorsLogRoute);
};

export default initRoutes;
