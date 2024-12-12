-- CreateTable
CREATE TABLE "Phonebook" (
    "id" SERIAL NOT NULL,
    "contactName" TEXT NOT NULL,
    "areaCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Phonebook_pkey" PRIMARY KEY ("id")
);
