/*
  Warnings:

  - The `type` column on the `cards` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('RG', 'CHN');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('credit', 'debit', 'both');

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "type",
ADD COLUMN     "type" "CardType" NOT NULL DEFAULT 'credit';

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" "DocumentType" NOT NULL,
    "number" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "issueDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "issuer" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "documents_user_id_type_key" ON "documents"("user_id", "type");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
