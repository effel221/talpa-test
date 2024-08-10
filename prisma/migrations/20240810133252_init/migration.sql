-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarRental" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "CarRental_pkey" PRIMARY KEY ("id")
);
