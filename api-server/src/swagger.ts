import swaggerJsDoc from "swagger-jsdoc";

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
				User: {
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
						"Id",
						"FirstName",
						"LastName",
						"Email",
						"Role",
						"Password",
						"DepartmentId",
						"FloorId",
					],
				},
				Visitor: {
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
						CompanyId: {
							type: "string",
							nullable: true,
							example: "cmp123",
						},
					},
					required: ["Id", "Name", "Phone", "Photo"],
				},
				Company: {
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
					required: ["Id", "Name"],
				},
				VisitorLog: {
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
				Floor: {
					type: "object",
					properties: {
						Id: { type: "string", example: "flr123" },
						Name: { type: "string", example: "First Floor" },
					},
					required: ["Id", "Name"],
				},
				Department: {
					type: "object",
					properties: {
						Id: { type: "string", example: "dept123" },
						Name: { type: "string", example: "Engineering" },
					},
					required: ["Id", "Name"],
				},
				Appointment: {
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
					required: [
						"Id",
						"StaffId",
						"VisitorId",
						"Purpose",
						"Message",
						"NoVisitors",
						"InvitationCode",
						"Status",
						"CreatedAt",
						"AppointmentDate",
					],
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
		},
	},
	apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJsDoc(options);
