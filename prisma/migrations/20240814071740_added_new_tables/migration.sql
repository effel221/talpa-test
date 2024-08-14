-- CreateTable
CREATE TABLE "productBundle" (
    "id" SERIAL NOT NULL,
    "productIds" INTEGER[],

    CONSTRAINT "productBundle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "orderId" SERIAL NOT NULL,
    "productIds" INTEGER[],
    "bundleProductIds" INTEGER[],

    CONSTRAINT "card_pkey" PRIMARY KEY ("orderId")
);
