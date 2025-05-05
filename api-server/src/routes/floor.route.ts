import { Router } from "express";
import { tryCatch } from "../middlewares/middleware";
import {
	createFloor,
	deleteFloor,
	getFloor,
	getFloors,
	updateFloor,
} from "../controllers/floors.controller";
const FloorRoutes = Router();

/**
 * @swagger
 * /floors:
 *   get:
 *     summary: List Floors
 *     description: Retrieves a list of all floors
 *     tags: [Floor]
 *     responses:
 *       200:
 *          $ref: '#/components/responses/FloorList'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */
FloorRoutes.get("/", tryCatch(getFloors));

/**
 * @swagger
 * /floors/{id}:
 *   get:
 *     summary: Get a single floor
 *     description: Retrieves details of a specific floor by ID
 *     tags: [Floor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The floor's ID
 *     responses:
 *       200:
 *         $ref: "#/components/responses/FloorSingle"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 */
FloorRoutes.get("/:id", tryCatch(getFloor));

/**
 * @swagger
 * /floors/{id}:
 *   delete:
 *     summary: Delete a floor
 *     description: Deletes a floor by ID
 *     tags: [Floor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The floor's ID
 *     responses:
 *       204:
 *         $ref: "#/components/responses/NoResponse"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/UnAuthenticated"
 *       403:
 *         $ref: "#/components/responses/UnAuthorized"
 */
FloorRoutes.delete("/:id", tryCatch(deleteFloor));

/**
 * @swagger
 * /floors/{id}:
 *   put:
 *     summary: Update a floor
 *     description: Updates an existing floor's details
 *     tags: [Floor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The floor's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/FloorInput"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/FloorSingle"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/UnAuthenticated"
 *       403:
 *         $ref: "#/components/responses/UnAuthorized"
 */
FloorRoutes.put("/:id", tryCatch(updateFloor));

/**
 * @swagger
 * /floors:
 *   post:
 *     summary: Create a floor
 *     description: Creates a new floor
 *     tags: [Floor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/FloorInput"
 *     responses:
 *       201:
 *          $ref: '#/components/responses/FloorSingle'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */
FloorRoutes.post("/", tryCatch(createFloor));

export default FloorRoutes;
