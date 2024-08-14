/*
  Warnings:

  - You are about to drop the column `product_ids` on the `card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "card" DROP COLUMN "product_ids",
ADD COLUMN     "productIds" INTEGER[];
