/*
  Warnings:

  - You are about to drop the column `productIds` on the `product_bundle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_bundle" DROP COLUMN "productIds",
ADD COLUMN     "productids" INTEGER[];
