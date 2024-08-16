/*
  Warnings:

  - You are about to drop the `card_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "card_products" DROP CONSTRAINT "card_products_cardId_fkey";

-- DropForeignKey
ALTER TABLE "card_products" DROP CONSTRAINT "card_products_productId_fkey";

-- DropTable
DROP TABLE "card_products";
