import { Router } from "express";
import { tryCatch } from "../middlewares/middleware";
import {
	checkin,
	checkout,
	listVisitorLogs,
} from "../controllers/log.controller";

const VisitorsLogRoute = Router();
/**
 * @swagger
 * /logs/checkin:
 *   post:
 *     summary: Create a new VisitorLog
 *     description: Records a visitor's check-in details including visitor ID, staff ID, purpose of visit, tag number, and number of visitors.
 *     tags:
 *       - VisitorsLog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VisitorLogInput'
 *     responses:
 *       201:
 *          $ref: '#/components/responses/VisitorLogSingle'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
VisitorsLogRoute.post("/checkin", tryCatch(checkin));
/**
 * @swagger
 * /logs/checkout:
 *   post:
 *     summary: Checks out a visitor
 *     description: Records when a visitor's check-out using visitors tag number.
 *     tags:
 *       - VisitorsLog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TagNo:
 *                 type: string
 *                 description: The tag number assigned to the visitor.
 *     responses:
 *       201:
 *         description: Visitor log created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 visitorLog:
 *                   type: object
 *                   description: Visitor log out successfully.
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
VisitorsLogRoute.get("/checkout", tryCatch(checkout));

/**
 * @swagger
 * /logs:
 *   get:
 *     summary: List all visitor logs
 *     description: Retrieves a list of all visitor logs, including details such as visitor ID, staff ID, purpose of visit, tag number, and number of visitors.
 *     tags:
 *       - VisitorsLog
 *     responses:
 *       200:
 *         description: A list of visitor logs retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref:'#/components/responses/VisitorLogList'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
VisitorsLogRoute.get("/", tryCatch(listVisitorLogs));

export default VisitorsLogRoute;
