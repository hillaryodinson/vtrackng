-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Staff');

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Role" "Role" NOT NULL DEFAULT 'Staff',
    "Password" TEXT NOT NULL,
    "StaffID" TEXT,
    "DepartmentId" TEXT NOT NULL,
    "FloorId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Visitor" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Email" TEXT,
    "Address" TEXT,
    "Photo" TEXT NOT NULL,
    "CompanyId" TEXT,

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Company" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Address" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "VisitorLog" (
    "Id" TEXT NOT NULL,
    "VisitorId" TEXT NOT NULL,
    "StaffId" TEXT NOT NULL,
    "PurposeOfVisit" TEXT NOT NULL,
    "TagNo" TEXT NOT NULL,
    "NoOfVistiors" INTEGER NOT NULL,
    "CheckInTime" TEXT NOT NULL,
    "CheckOutTime" TEXT,
    "CreatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitorLog_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Floor" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Floor_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Department" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "Id" TEXT NOT NULL,
    "StaffId" TEXT NOT NULL,
    "VisitorId" TEXT NOT NULL,
    "Purpose" TEXT NOT NULL,
    "Message" TEXT NOT NULL,
    "NoVisitors" INTEGER NOT NULL,
    "InvitationCode" TEXT NOT NULL,
    "Status" TEXT NOT NULL DEFAULT 'created',
    "CreatedAt" TIMESTAMP(3) NOT NULL,
    "AppointmentDate" TIMESTAMP(3) NOT NULL,
    "RescheduleDate" TIMESTAMP(3),
    "CancellationReason" TEXT,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "SMSNotification" (
    "Id" TEXT NOT NULL,
    "RecipientPhone" TEXT NOT NULL,
    "RecipientName" TEXT NOT NULL,
    "Message" TEXT NOT NULL,
    "RetryCount" INTEGER NOT NULL DEFAULT 0,
    "Status" INTEGER NOT NULL,
    "LastRetryDate" TIMESTAMP(3) NOT NULL,
    "ErrorMessage" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SMSNotification_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "EmailNotification" (
    "Id" TEXT NOT NULL,
    "RecipientEmail" TEXT NOT NULL,
    "RecipientName" TEXT NOT NULL,
    "Subject" TEXT NOT NULL,
    "Message" TEXT NOT NULL,
    "RetryCount" INTEGER NOT NULL DEFAULT 0,
    "Status" INTEGER NOT NULL,
    "LastRetryDate" TIMESTAMP(3) NOT NULL,
    "ErrorMessage" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailNotification_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ArchiveNotification" (
    "Id" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Recipient" TEXT NOT NULL,
    "Subject" TEXT,
    "Message" TEXT NOT NULL,
    "DeliveryDate" TIMESTAMP(3) NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArchiveNotification_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES "Department"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_FloorId_fkey" FOREIGN KEY ("FloorId") REFERENCES "Floor"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visitor" ADD CONSTRAINT "Visitor_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "Company"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitorLog" ADD CONSTRAINT "VisitorLog_VisitorId_fkey" FOREIGN KEY ("VisitorId") REFERENCES "Visitor"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitorLog" ADD CONSTRAINT "VisitorLog_StaffId_fkey" FOREIGN KEY ("StaffId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_StaffId_fkey" FOREIGN KEY ("StaffId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_VisitorId_fkey" FOREIGN KEY ("VisitorId") REFERENCES "Visitor"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
