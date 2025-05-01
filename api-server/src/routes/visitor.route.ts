import { Router } from "express";
import { authorize, tryCatch } from "../middlewares/middleware";
import {
	createVisitor,
	deleteVisitor,
	getVisitorById,
	getVisitors,
	updateVisitor,
} from "../controllers/visitor.controller";
const VisitorRoutes = Router();

/**
 * @swagger
 * /visitors:
 *   post:
 *     summary: Create a new visitor
 *     tags: [Visitors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Visitor'
 *     responses:
 *       201:
 *         description: Visitor created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 message:
 *                   type: string
 *                   description: A success message
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 message:
 *                   type: string
 *                   description: an error message
 */
VisitorRoutes.post("/", tryCatch(createVisitor));

/**
 * @swagger
 * /visitors:
 *   get:
 *     summary: Retrieve a list of visitors
 *     tags: [Visitors]
 *     responses:
 *       200:
 *         description: A list of visitors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The visitor's ID
 *                       name:
 *                         type: string
 *                         description: The visitor's name
 *                       email:
 *                         type: string
 *                         description: The visitor's email
 *                       phone:
 *                         type: string
 *                         description: The visitor's phone number
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 message:
 *                   type: string
 *                   description: an error message
 */
VisitorRoutes.get("/", tryCatch(getVisitors));

/**
 * @swagger
 * /visitors/{id}:
 *   get:
 *     summary: Retrieve a visitor by ID
 *     tags: [Visitors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The visitor ID
 *     responses:
 *       200:
 *          $ref: '#/components/responses/VisitorSuccess'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */
VisitorRoutes.get("/:id", tryCatch(getVisitorById));

/**
 * @swagger
 * /visitors/{id}:
 *   put:
 *     summary: Update a visitor by ID
 *     tags: [Visitors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The visitor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Visitor'
 *     responses:
 *       200:
 *          $ref: '#/components/responses/VisitorSuccess'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */

VisitorRoutes.put("/:id", tryCatch(updateVisitor));

/**
 * @swagger
 * /visitors/{id}:
 *   delete:
 *     summary: Delete a visitor by ID
 *     tags: [Visitors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The visitor ID
 *     responses:
 *       200:
 *         description: Visitor deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 message:
 *                   type: string
 *                   description: A success message
 *       404:
 *         description: Visitor not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 message:
 *                   type: string
 *                   description: an error message
 */
VisitorRoutes.delete("/:id", authorize, tryCatch(deleteVisitor));

export default VisitorRoutes;
