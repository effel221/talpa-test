-- AlterTable
ALTER TABLE "products" ADD COLUMN     "cardId" INTEGER;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
