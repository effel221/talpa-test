/*
  Warnings:

  - You are about to drop the column `bundleProductIds` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `productIds` on the `card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "card" DROP COLUMN "bundleProductIds",
DROP COLUMN "productIds",
ADD COLUMN     "product_bundleId" INTEGER,
ADD COLUMN     "productsId" INTEGER;

-- CreateTable
CREATE TABLE "card_products" (
    "cardId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "productBundleId" INTEGER NOT NULL,

    CONSTRAINT "card_products_pkey" PRIMARY KEY ("cardId","productId")
);

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_product_bundleId_fkey" FOREIGN KEY ("product_bundleId") REFERENCES "product_bundle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_products" ADD CONSTRAINT "card_products_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_products" ADD CONSTRAINT "card_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_products" ADD CONSTRAINT "card_products_productBundleId_fkey" FOREIGN KEY ("productBundleId") REFERENCES "product_bundle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
