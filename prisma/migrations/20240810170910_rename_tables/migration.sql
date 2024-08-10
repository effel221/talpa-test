/*
  Warnings:

  - You are about to drop the `CarRental` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Flight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CarRental";

-- DropTable
DROP TABLE "Flight";

-- DropTable
DROP TABLE "Hotel";

-- CreateTable
CREATE TABLE "flight" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carRental" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "carRental_pkey" PRIMARY KEY ("id")
);
