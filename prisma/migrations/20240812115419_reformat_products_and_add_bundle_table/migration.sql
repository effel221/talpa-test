/*
  Warnings:

  - You are about to drop the column `company_name` on the `car_rentals` table. All the data in the column will be lost.
  - Added the required column `description` to the `car_rentals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `car_rentals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `car_rentals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `flights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `flights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `flights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `hotels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car_rentals" DROP COLUMN "company_name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "flights" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "hotels" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "bundle" (
    "id" SERIAL NOT NULL,
    "flightsId" INTEGER NOT NULL,
    "hotelsId" INTEGER NOT NULL,
    "carRentalsId" INTEGER NOT NULL,

    CONSTRAINT "bundle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bundle" ADD CONSTRAINT "bundle_flightsId_fkey" FOREIGN KEY ("flightsId") REFERENCES "flights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bundle" ADD CONSTRAINT "bundle_hotelsId_fkey" FOREIGN KEY ("hotelsId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bundle" ADD CONSTRAINT "bundle_carRentalsId_fkey" FOREIGN KEY ("carRentalsId") REFERENCES "car_rentals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
