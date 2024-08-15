/*
  Warnings:

  - You are about to drop the column `product_bundleId` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `card` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "card" DROP CONSTRAINT "card_product_bundleId_fkey";

-- DropForeignKey
ALTER TABLE "card" DROP CONSTRAINT "card_productsId_fkey";

-- AlterTable
ALTER TABLE "card" DROP COLUMN "product_bundleId",
DROP COLUMN "productsId";
