import { Router } from "express";
import { tryCatch } from "../middlewares/middleware";
import {
	createUser,
	deleteUser,
	getUser,
	listUsers,
	updateUser,
} from "../controllers/usercontroller";

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
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                     type: string
 *                     description: The user's id
 *                   FirstName:
 *                     type: string
 *                     description: The user's first name
 *                   LastName:
 *                     type: string
 *                     description: The user's last name
 *                   Email:
 *                     type: string
 *                     description: The user's email
 *                   Role:
 *                     type: string
 *                     description: The user's role
 *                     enum: [Admin, Staff]
 *                   Password:
 *                     type: string
 *                     description: The user's password
 *                   DepartmentId:
 *                     type: string
 *                     description: The user's department ID
 *                   FloorId:
 *                     type: string
 *                     description: The user's floor ID
 *                   StaffID:
 *                     type: string
 *                     nullable: true
 *                     description: The user's staff ID
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
 *                 errors:
 *                   type: string
 *                   description: list of errors
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
 *             type: object
 *             properties:
 *               FirstName:
 *                 type: string
 *                 description: The user's first name
 *               LastName:
 *                 type: string
 *                 description: The user's last name
 *               Email:
 *                 type: string
 *                 description: The user's email
 *               Role:
 *                 type: string
 *                 description: The user's role
 *                 enum: [Admin, Staff]
 *               Password:
 *                 type: string
 *                 description: The user's password
 *               DepartmentId:
 *                 type: string
 *                 description: The user's department ID
 *               FloorId:
 *                 type: string
 *                 description: The user's floor ID
 *               StaffID:
 *                 type: string
 *                 nullable: true
 *                 description: The user's staff ID
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 data:
 *                   type: object
 *                   description: The created user data
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
 *                 errors:
 *                   type: string
 *                   description: list of errors
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
 *             type: object
 *             properties:
 *               FirstName:
 *                 type: string
 *                 description: The user's first name
 *               LastName:
 *                 type: string
 *                 description: The user's last name
 *               Email:
 *                 type: string
 *                 description: The user's email
 *               Role:
 *                 type: string
 *                 description: The user's role
 *                 enum: [Admin, Staff]
 *               Password:
 *                 type: string
 *                 description: The user's password
 *               DepartmentId:
 *                 type: string
 *                 description: The user's department ID
 *               FloorId:
 *                 type: string
 *                 description: The user's floor ID
 *               StaffID:
 *                 type: string
 *                 nullable: true
 *                 description: The user's staff ID
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 data:
 *                   type: object
 *                   description: The updated user data
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
 *                 errors:
 *                   type: string
 *                   description: list of errors
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
 *         description: User retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: whether the request was successful
 *                 data:
 *                   type: object
 *                   description: The user data
 *       404:
 *         description: User not found
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
 *         description: User deleted successfully
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
 *         description: User not found
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
UserRoutes.delete("/:id", tryCatch(deleteUser));

export default UserRoutes;
