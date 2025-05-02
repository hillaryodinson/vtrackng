import swaggerJsDoc from "swagger-jsdoc";
import { getErrorMessage } from "./utils/helper";
import { ERROR_CODES } from "./utils/errors";

/**
 * Configuration options for Swagger API documentation.
 *
 * This object defines the OpenAPI specification for the VTrack API, including
 * metadata, server information, tags, security schemes, schemas, and responses.
 *
 * @property definition - The OpenAPI specification details.
 * @property definition.openapi - The OpenAPI version used (e.g., "3.0.0").
 * @property definition.info - Metadata about the API.
 * @property definition.info.title - The title of the API (e.g., "VTrackNG").
 * @property definition.info.version - The version of the API (e.g., "1.0.0").
 * @property definition.info.description - A brief description of the API.
 * @property definition.servers - An array of server objects defining the API's environments.
 * @property definition.servers[].url - The base URL of the server (e.g., "http://localhost:3000/api").
 * @property definition.servers[].description - A description of the server (e.g., "Development server").
 * @property definition.tags - An array of tags categorizing API endpoints.
 * @property definition.tags[].name - The name of the tag (e.g., "Authentication").
 * @property definition.tags[].description - A description of the tag's purpose.
 * @property definition.components - Components used in the API, such as schemas and security schemes.
 * @property definition.components.securitySchemes - Security schemes for the API.
 * @property definition.components.securitySchemes.bearerAuth - A bearer authentication scheme using JWT.
 * @property definition.components.schemas - Data models used in the API.
 * @property definition.components.responses - Predefined responses for API endpoints.
 * @property apis - An array of file paths to API route definitions (e.g., "./src/routes/*.ts").
 */
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "VTrackNG",
			version: "1.0.0",
			description: "VTrack API documentation",
		},
		servers: [
			{
				url: "http://localhost:3000/api",
				description: "Development server",
			},
		],
		tags: [
			{
				name: "Authentication",
				description: "Authentication related endpoints",
			},
			{
				name: "User",
				description: "User related endpoints",
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
			schemas: {
				UserInput: {
					type: "object",
					properties: {
						FirstName: {
							type: "string",
							example: "Jane",
							description: "First name of the user",
						},
						LastName: {
							type: "string",
							example: "Smith",
							description: "Last name of the user",
						},
						Email: {
							type: "string",
							example: "jane.smith@gmail.com",
							description: "The email address of the user",
						},
						Role: {
							type: "string",
							enum: ["Staff", "Admin"],
							example: "Staff",
							description: "The role of the user",
						},
						Password: {
							type: "string",
							example: "securepassword123",
							description: "The password of the user",
						},
						StaffID: {
							type: "string",
							nullable: true,
							example: "STF12345",
							description: "Staff ID of the user, if applicable",
						},
						DepartmentId: {
							type: "string",
							example: "dept123",
							description:
								"The ID of the department the user belongs to",
						},
						FloorId: {
							type: "string",
							example: "floor456",
							description:
								"The ID of the floor the user belongs to",
						},
					},
					required: [
						"FirstName",
						"LastName",
						"Email",
						"Role",
						"Password",
						"DepartmentId",
						"FloorId",
					],
				},
				UserOutput: {
					type: "object",
					properties: {
						Id: {
							type: "string",
							example: "ckv1abcd1234567890",
							description: "Unique identifier for the user",
						},
						FirstName: {
							type: "string",
							example: "Jane",
							description: "First name of the user",
						},
						LastName: {
							type: "string",
							example: "Smith",
							description: "Last name of the user",
						},
						Email: {
							type: "string",
							example: "jane.smith@gmail.com",
							description: "The email address of the user",
						},
						Role: {
							type: "string",
							enum: ["Staff", "Admin"],
							example: "Staff",
							description: "The role of the user",
						},
						Password: {
							type: "string",
							example: "securepassword123",
							description: "The password of the user",
						},
						StaffID: {
							type: "string",
							nullable: true,
							example: "STF12345",
							description: "Staff ID of the user, if applicable",
						},
						Department: {
							$ref: "#/components/schemas/DepartmentOutput",
						},
						FloorId: {
							$ref: "#/components/schemas/FloorOutput",
						},
					},
				},
				VisitorInput: {
					type: "object",
					properties: {
						Name: { type: "string", example: "John Doe" },
						Phone: { type: "string", example: "+1234567890" },
						Email: {
							type: "string",
							nullable: true,
							example: "john.doe@example.com",
						},
						Address: {
							type: "string",
							nullable: true,
							example: "123 Main St",
						},
						Photo: { type: "string", example: "photo_url" },
						CompanyId: {
							type: "string",
							nullable: true,
							example: "cmp123",
						},
						CompanyName: {
							type: "string",
							nullable: true,
							example: "Acme Inc",
						},
					},
					required: ["Name", "Phone", "Photo"],
				},
				VisitorOutput: {
					type: "object",
					properties: {
						Id: { type: "string", example: "ckv1abcd1234567890" },
						Name: { type: "string", example: "John Doe" },
						Phone: { type: "string", example: "+1234567890" },
						Email: {
							type: "string",
							nullable: true,
							example: "john.doe@example.com",
						},
						Address: {
							type: "string",
							nullable: true,
							example: "123 Main St",
						},
						Photo: { type: "string", example: "photo_url" },
						Company: {
							$ref: "#/components/schemas/CompanyOutput",
						},
					},
				},
				CompanyInput: {
					type: "object",
					properties: {
						Name: { type: "string", example: "TechCorp" },
						Address: {
							type: "string",
							nullable: true,
							example: "456 Business Rd",
						},
					},
					required: ["Name", "Address"],
				},
				CompanyOutput: {
					type: "object",
					properties: {
						Id: { type: "string", example: "cmp123" },
						Name: { type: "string", example: "TechCorp" },
						Address: {
							type: "string",
							nullable: true,
							example: "456 Business Rd",
						},
					},
				},
				VisitorLogInput: {
					type: "object",
					properties: {
						VisitorId: {
							type: "string",
							example: "ckv1abcd1234567890",
						},
						StaffId: { type: "string", example: "stf123" },
						PurposeOfVisit: {
							type: "string",
							example: "Business Meeting",
						},
						TagNo: { type: "string", example: "TAG001" },
						NoOfVistiors: { type: "integer", example: 2 },
					},
					required: [
						"Id",
						"VisitorId",
						"StaffId",
						"PurposeOfVisit",
						"TagNo",
						"NoOfVistiors",
						"CheckInTime",
						"CreatedAt",
					],
				},
				VisitorLogOutput: {
					type: "object",
					properties: {
						Id: { type: "string", example: "log123" },
						VisitorId: {
							type: "string",
							example: "ckv1abcd1234567890",
						},
						StaffId: { type: "string", example: "stf123" },
						PurposeOfVisit: {
							type: "string",
							example: "Business Meeting",
						},
						TagNo: { type: "string", example: "TAG001" },
						NoOfVistiors: { type: "integer", example: 2 },
						CheckInTime: {
							type: "string",
							example: "2023-01-01T10:00:00Z",
						},
						CheckOutTime: {
							type: "string",
							nullable: true,
							example: "2023-01-01T12:00:00Z",
						},
						CreatedAt: {
							type: "string",
							example: "2023-01-01T09:00:00Z",
						},
					},
				},
				FloorInput: {
					type: "object",
					properties: {
						Name: { type: "string", example: "First Floor" },
					},
					required: ["Name"],
				},
				FloorOutput: {
					type: "object",
					properties: {
						Id: { type: "string", example: "flr123" },
						Name: { type: "string", example: "First Floor" },
					},
				},
				DepartmentInput: {
					type: "object",
					properties: {
						Name: { type: "string", example: "Engineering" },
					},
					required: ["Name"],
				},
				DepartmentOutput: {
					type: "object",
					properties: {
						Id: { type: "string", example: "dept123" },
						Name: { type: "string", example: "Engineering" },
					},
				},
				AppointmentOutput: {
					type: "object",
					properties: {
						Id: { type: "string", example: "apt123" },
						StaffId: { type: "string", example: "stf123" },
						VisitorId: {
							type: "string",
							example: "ckv1abcd1234567890",
						},
						Purpose: {
							type: "string",
							example: "Project Discussion",
						},
						Message: {
							type: "string",
							example: "Please bring all necessary documents.",
						},
						NoVisitors: { type: "integer", example: 1 },
						InvitationCode: { type: "string", example: "INV12345" },
						Status: { type: "string", example: "created" },
						CreatedAt: {
							type: "string",
							example: "2023-01-01T09:00:00Z",
						},
						AppointmentDate: {
							type: "string",
							example: "2023-01-02T10:00:00Z",
						},
						RescheduleDate: {
							type: "string",
							nullable: true,
							example: "2023-01-03T11:00:00Z",
						},
						CancellationReason: {
							type: "string",
							nullable: true,
							example: "Scheduling conflict",
						},
					},
				},
				SMSNotification: {
					type: "object",
					properties: {
						Id: { type: "string", example: "sms123" },
						RecipientPhone: {
							type: "string",
							example: "+1234567890",
						},
						RecipientName: { type: "string", example: "John Doe" },
						Message: {
							type: "string",
							example: "Your appointment is confirmed.",
						},
						RetryCount: { type: "integer", example: 0 },
						Status: { type: "integer", example: 2 },
						LastRetryDate: {
							type: "string",
							example: "2023-01-01T09:00:00Z",
						},
						ErrorMessage: {
							type: "string",
							example: "Delivery failed",
						},
						CreatedAt: {
							type: "string",
							example: "2023-01-01T08:00:00Z",
						},
					},
					required: [
						"Id",
						"RecipientPhone",
						"RecipientName",
						"Message",
						"RetryCount",
						"Status",
						"LastRetryDate",
						"CreatedAt",
					],
				},
				EmailNotification: {
					type: "object",
					properties: {
						Id: { type: "string", example: "email123" },
						RecipientEmail: {
							type: "string",
							example: "john.doe@example.com",
						},
						RecipientName: { type: "string", example: "John Doe" },
						Subject: {
							type: "string",
							example: "Appointment Confirmation",
						},
						Message: {
							type: "string",
							example: "Your appointment is confirmed.",
						},
						RetryCount: { type: "integer", example: 0 },
						Status: { type: "integer", example: 2 },
						LastRetryDate: {
							type: "string",
							example: "2023-01-01T09:00:00Z",
						},
						ErrorMessage: {
							type: "string",
							example: "Delivery failed",
						},
						CreatedAt: {
							type: "string",
							example: "2023-01-01T08:00:00Z",
						},
					},
					required: [
						"Id",
						"RecipientEmail",
						"RecipientName",
						"Subject",
						"Message",
						"RetryCount",
						"Status",
						"LastRetryDate",
						"CreatedAt",
					],
				},
				ArchiveNotification: {
					type: "object",
					properties: {
						Id: { type: "string", example: "arch123" },
						Type: { type: "string", example: "email" },
						Recipient: {
							type: "string",
							example: "john.doe@example.com",
						},
						Subject: {
							type: "string",
							nullable: true,
							example: "Appointment Confirmation",
						},
						Message: {
							type: "string",
							example: "Your appointment is confirmed.",
						},
						DeliveryDate: {
							type: "string",
							example: "2023-01-01T09:00:00Z",
						},
						CreatedAt: {
							type: "string",
							example: "2023-01-01T08:00:00Z",
						},
					},
					required: [
						"Id",
						"Type",
						"Recipient",
						"Message",
						"DeliveryDate",
						"CreatedAt",
					],
				},
			},
			responses: {
				NoResponse: {
					description:
						"No content – operation successful with no response body",
				},
				BadRequest: {
					description: "Bad request",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "false",
									},
									message: {
										type: "string",
										example: getErrorMessage(
											ERROR_CODES.VALIDATION_FAILED
										),
									},
									errors: {
										type: "object",
									},
								},
							},
						},
					},
				},
				NotFound: {
					description: "Entity was not found",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "false",
									},
									message: {
										type: "string",
										example: getErrorMessage(
											ERROR_CODES.ITEM_NOT_FOUND
										),
									},
									errors: {
										type: "object",
									},
								},
							},
						},
					},
				},
				UnAuthorized: {
					description: "Unauthorized",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "false",
									},
									message: {
										type: "string",
										example: getErrorMessage(
											ERROR_CODES.USER_NOT_AUTHORIZED
										),
									},
									errors: {
										type: "object",
									},
								},
							},
						},
					},
				},
				UnAuthenticated: {
					description: "UnAuthenticated",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "false",
									},
									message: {
										type: "string",
										example: getErrorMessage(
											ERROR_CODES.VALIDATION_UNAUTHENTICATED
										),
									},
									errors: {
										type: "object",
									},
								},
							},
						},
					},
				},
				ServerError: {
					description: "Server Error",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "false",
									},
									message: {
										type: "string",
										example: getErrorMessage(
											ERROR_CODES.SERVICE_UNAVAILABLE
										),
									},
									errorCode: {
										type: "string",
										example: "1100",
									},
									errors: {
										type: "object",
									},
								},
							},
						},
					},
				},
				VisitorSingle: {
					description: "Successful visitor fetch",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									visitor: {
										$ref: "#/components/schemas/Visitor",
									},
								},
							},
						},
					},
				},
				VisitorList: {
					description: "Successful visitor fetch",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									visitors: {
										type: "array",
										items: {
											$ref: "#/components/schemas/VisitorOutput",
										},
									},
								},
							},
						},
					},
				},
				UserSingle: {
					description: "List of users/staffs",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									visitors: {
										$ref: "#/components/schemas/UserOutput",
									},
								},
							},
						},
					},
				},
				UserList: {
					description: "List of users/staffs",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									visitors: {
										type: "array",
										items: {
											$ref: "#/components/schemas/UserOutput",
										},
									},
								},
							},
						},
					},
				},
				DepartmentSingle: {
					description: "List of departments",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									department: {
										$ref: "#/components/schemas/DepartmentOutput",
									},
								},
							},
						},
					},
				},
				DepartmentList: {
					description: "List of departments",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									departments: {
										type: "array",
										items: {
											$ref: "#/components/schemas/DepartmentOutput",
										},
									},
								},
							},
						},
					},
				},
				FloorSingle: {
					description: "List of departments",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									department: {
										$ref: "#/components/schemas/FloorOutput",
									},
								},
							},
						},
					},
				},
				FloorList: {
					description: "List of departments",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									departments: {
										type: "array",
										items: {
											$ref: "#/components/schemas/FloorOutput",
										},
									},
								},
							},
						},
					},
				},
				VisitorLogSingle: {
					description: "Vistors Log",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									department: {
										$ref: "#/components/schemas/VisitorLogOutput",
									},
								},
							},
						},
					},
				},
				VisitorLogList: {
					description: "List of Visitor Logs",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									success: {
										type: "boolean",
										example: "true",
									},
									departments: {
										type: "array",
										items: {
											$ref: "#/components/schemas/VisitorLogOutput",
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
	apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJsDoc(options);
