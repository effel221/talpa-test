/*
  Warnings:

  - You are about to drop the `bundle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `car_rentals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `flights` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hotels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bundle" DROP CONSTRAINT "bundle_carRentalsId_fkey";

-- DropForeignKey
ALTER TABLE "bundle" DROP CONSTRAINT "bundle_flightsId_fkey";

-- DropForeignKey
ALTER TABLE "bundle" DROP CONSTRAINT "bundle_hotelsId_fkey";

-- DropTable
DROP TABLE "bundle";

-- DropTable
DROP TABLE "car_rentals";

-- DropTable
DROP TABLE "flights";

-- DropTable
DROP TABLE "hotels";

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
