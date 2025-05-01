import { Router } from "express";
import { tryCatch } from "../middlewares/middleware";
import {
	createUser,
	deleteUser,
	getUser,
	listUsers,
	updateUser,
} from "../controllers/user.controller";

const UserRoutes = Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: List users
 *     description: Retrieves a list of all users
 *     tags: [User]
 *     responses:
 *       200:
 *          $ref: '#/components/responses/UserList'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */
UserRoutes.get("/", tryCatch(listUsers));

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a user
 *     description: Creates a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UserInput"
 *     responses:
 *       200:
 *          $ref: '#/components/responses/UserList'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */
UserRoutes.post("/", tryCatch(createUser));

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user
 *     description: Updates an existing user's details
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UserInput"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/UserSingle"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/UnAuthenticated"
 *       403:
 *         $ref: "#/components/responses/UnAuthorized"
 */
UserRoutes.put("/:id", tryCatch(updateUser));

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a single user
 *     description: Retrieves details of a specific user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *     responses:
 *       200:
 *         $ref: "#/components/responses/UserSingle"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 */
UserRoutes.get("/:id", tryCatch(getUser));

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Deletes a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *     responses:
 *       200:
 *         description: Successful deletion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/UnAuthenticated"
 *       403:
 *         $ref: "#/components/responses/UnAuthorized"
 */
UserRoutes.delete("/:id", tryCatch(deleteUser));

export default UserRoutes;
