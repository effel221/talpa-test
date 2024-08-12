/*
  Warnings:

  - You are about to drop the `carRental` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `flight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "carRental";

-- DropTable
DROP TABLE "flight";

-- DropTable
DROP TABLE "hotel";

-- CreateTable
CREATE TABLE "flights" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "flights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotels" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_rentals" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "car_rentals_pkey" PRIMARY KEY ("id")
);
