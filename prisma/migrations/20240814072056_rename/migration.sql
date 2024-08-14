/*
  Warnings:

  - The primary key for the `card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderId` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `productIds` on the `card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "card" DROP CONSTRAINT "card_pkey",
DROP COLUMN "orderId",
DROP COLUMN "productIds",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "product_ids" INTEGER[],
ADD CONSTRAINT "card_pkey" PRIMARY KEY ("id");
