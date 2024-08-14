/*
  Warnings:

  - You are about to drop the `productBundle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "productBundle";

-- CreateTable
CREATE TABLE "product_bundle" (
    "id" SERIAL NOT NULL,
    "productIds" INTEGER[],

    CONSTRAINT "product_bundle_pkey" PRIMARY KEY ("id")
);
