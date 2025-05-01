export class AppError extends Error {
	errorCode: number;
	statusCode: number;
	constructor(errorCode: number, message: string, statusCode?: number) {
		super(message);
		this.name = "AppError";
		this.errorCode = errorCode;
		this.statusCode = statusCode ?? 400;
	}
}

export const HTTP_STATUS_CODES = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	SERVER_ERROR: 500,
};

export const ERROR_CODES = {
	// Application-Level Errors
	APP_GENERIC_ERROR: 1000,
	APP_INITIALIZATION_FAILURE: 1001,
	APP_MISSING_CONFIG: 1002,

	// Validation Errors
	VALIDATION_MISSING_FIELD: 1100,
	VALIDATION_INVALID_TYPE: 1101,
	VALIDATION_OUT_OF_RANGE: 1102,
	VALIDATION_UNSUPPORTED_VALUE: 1103,
	VALIDATION_INVALID_TOKEN: 1104,
	VALIDATION_UNAUTHORIZED: 1105,
	VALIDATION_UNAUTHENTICATED: 1106,
	VALIDATION_FAILED: 1107,

	// Database Errors
	DB_CONNECTION_FAILED: 2100,
	DB_QUERY_FAILED: 2101,
	DB_RECORD_NOT_FOUND: 2102,
	DB_DUPLICATE_RECORD: 2103,
	DB_TIMEOUT: 2104,

	// File Errors
	FILE_NOT_FOUND: 3100,
	FILE_UPLOAD_FAILED: 3101,
	FILE_READ_ERROR: 3102,
	FILE_WRITE_ERROR: 3103,
	FILE_FORMAT_UNSUPPORTED: 3104,
	FILE_TOO_LARGE: 3105,

	// Payment Errors
	PAYMENT_PROCESSING_FAILED: 4100,
	PAYMENT_INSUFFICIENT_FUNDS: 4101,
	PAYMENT_INVALID_METHOD: 4102,
	PAYMENT_TIMEOUT: 4103,
	PAYMENT_DUPLICATE_TRANSACTION: 4104,

	// User Errors
	USER_NOT_AUTHORIZED: 5100,
	USER_NOT_FOUND: 5101,
	USER_SESSION_EXPIRED: 5102,
	USER_PASSWORD_INCORRECT: 5103,
	USER_INVALID_CREDENTIALS: 5104,
	USER_ACCOUNT_NOT_ACTIVE: 5105,

	// Property Errors
	ITEM_NOT_FOUND: 5200,

	// Service Errors
	SERVICE_UNAVAILABLE: 6100,
	SERVICE_TIMEOUT: 6101,
	SERVICE_DEPENDENCY_FAILED: 6102,
	SERVICE_CONFIGURATION_ERROR: 6103,
};

export const ERROR_MESSAGES = {
	// Application-Level Errors
	[ERROR_CODES.APP_GENERIC_ERROR]: "An unexpected error occurred.",
	[ERROR_CODES.APP_INITIALIZATION_FAILURE]:
		"Application failed to initialize.",
	[ERROR_CODES.APP_MISSING_CONFIG]:
		"Missing or invalid application configuration.",

	// Validation Errors
	[ERROR_CODES.VALIDATION_MISSING_FIELD]: "A required field is missing.",
	[ERROR_CODES.VALIDATION_INVALID_TYPE]: "Invalid data type provided.",
	[ERROR_CODES.VALIDATION_OUT_OF_RANGE]:
		"Input value is out of allowed range.",
	[ERROR_CODES.VALIDATION_UNSUPPORTED_VALUE]: "Value is not supported.",
	[ERROR_CODES.VALIDATION_INVALID_TOKEN]: "Invalid or expired token.",
	[ERROR_CODES.VALIDATION_UNAUTHORIZED]:
		"You do not have permission to perform this action.",
	[ERROR_CODES.VALIDATION_UNAUTHENTICATED]: "Authentication is required.",
	[ERROR_CODES.VALIDATION_FAILED]:
		"Validation failed. Please check your input.",

	// Database Errors
	[ERROR_CODES.DB_CONNECTION_FAILED]: "Failed to connect to the database.",
	[ERROR_CODES.DB_QUERY_FAILED]: "Database query failed.",
	[ERROR_CODES.DB_RECORD_NOT_FOUND]: "Requested record was not found.",
	[ERROR_CODES.DB_DUPLICATE_RECORD]: "Duplicate record exists.",
	[ERROR_CODES.DB_TIMEOUT]: "Database operation timed out.",

	// File Errors
	[ERROR_CODES.FILE_NOT_FOUND]: "Requested file could not be found.",
	[ERROR_CODES.FILE_UPLOAD_FAILED]: "File upload failed.",
	[ERROR_CODES.FILE_READ_ERROR]: "An error occurred while reading the file.",
	[ERROR_CODES.FILE_WRITE_ERROR]: "An error occurred while writing the file.",
	[ERROR_CODES.FILE_FORMAT_UNSUPPORTED]: "Unsupported file format.",
	[ERROR_CODES.FILE_TOO_LARGE]: "File size exceeds the allowed limit.",

	// Payment Errors
	[ERROR_CODES.PAYMENT_PROCESSING_FAILED]: "Payment processing failed.",
	[ERROR_CODES.PAYMENT_INSUFFICIENT_FUNDS]:
		"Insufficient funds for transaction.",
	[ERROR_CODES.PAYMENT_INVALID_METHOD]: "Invalid payment method.",
	[ERROR_CODES.PAYMENT_TIMEOUT]: "Payment request timed out.",
	[ERROR_CODES.PAYMENT_DUPLICATE_TRANSACTION]:
		"Duplicate transaction detected.",

	// User Errors
	[ERROR_CODES.USER_NOT_AUTHORIZED]:
		"You are not authorized to perform this action.",
	[ERROR_CODES.USER_NOT_FOUND]: "User not found.",
	[ERROR_CODES.USER_SESSION_EXPIRED]: "User session has expired.",
	[ERROR_CODES.USER_PASSWORD_INCORRECT]: "Incorrect password.",
	[ERROR_CODES.USER_INVALID_CREDENTIALS]: "Invalid login credentials.",
	[ERROR_CODES.USER_ACCOUNT_NOT_ACTIVE]: "User account is not active.",

	// Property Errors
	[ERROR_CODES.ITEM_NOT_FOUND]: "Requested item does not exist.",

	// Service Errors
	[ERROR_CODES.SERVICE_UNAVAILABLE]: "Service is temporarily unavailable.",
	[ERROR_CODES.SERVICE_TIMEOUT]: "Service request timed out.",
	[ERROR_CODES.SERVICE_DEPENDENCY_FAILED]: "A dependent service failed.",
	[ERROR_CODES.SERVICE_CONFIGURATION_ERROR]:
		"Service configuration error occurred.",
};
