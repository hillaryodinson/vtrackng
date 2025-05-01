import { Router } from "express";
import { tryCatch } from "../middlewares/middleware";
import {
	createDepartment,
	deleteDepartment,
	getDepartment,
	getDepartments,
	updateDepartment,
} from "../controllers/department.controller";
const DeptRoutes = Router();

/**
 * @swagger
 * /departments:
 *   get:
 *     summary: List Departments
 *     description: Retrieves a list of all departments
 *     tags: [Department]
 *     responses:
 *       200:
 *          $ref: '#/components/responses/DepartmentList'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */
DeptRoutes.get("/", tryCatch(getDepartments));

/**
 * @swagger
 * /departments/{id}:
 *   get:
 *     summary: Get a single department
 *     description: Retrieves details of a specific department by ID
 *     tags: [Department]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The department's ID
 *     responses:
 *       200:
 *         $ref: "#/components/responses/DepartmentSingle"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 */
DeptRoutes.get("/:id", tryCatch(getDepartment));

/**
 * @swagger
 * /departments/{id}:
 *   delete:
 *     summary: Delete a department
 *     description: Deletes a department by ID
 *     tags: [Department]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The department's ID
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
DeptRoutes.delete("/:id", tryCatch(deleteDepartment));

/**
 * @swagger
 * /departments/{id}:
 *   put:
 *     summary: Update a department
 *     description: Updates an existing department's details
 *     tags: [Department]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The department's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/DepartmentInput"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/DepartmentSingle"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/UnAuthenticated"
 *       403:
 *         $ref: "#/components/responses/UnAuthorized"
 */
DeptRoutes.put("/:id", tryCatch(updateDepartment));
/**
 * @swagger
 * /departments:
 *   post:
 *     summary: Create a department
 *     description: Creates a new department
 *     tags: [Department]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/DepartmentInput"
 *     responses:
 *       201:
 *          $ref: '#/components/responses/DepartmentSingle'
 *       401:
 *        $ref: '#/components/responses/UnAuthenticated'
 *       403:
 *        $ref: '#/components/responses/UnAuthorized'
 *       404:
 *        $ref: '#/components/responses/NotFound'
 */
DeptRoutes.post("/", tryCatch(createDepartment));

export default DeptRoutes;
