/*
  Warnings:

  - You are about to drop the column `productBundleId` on the `card_products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "card_products" DROP CONSTRAINT "card_products_productBundleId_fkey";

-- AlterTable
ALTER TABLE "card_products" DROP COLUMN "productBundleId";
