-- AlterTable
ALTER TABLE "documents" ALTER COLUMN "number" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "issuer" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "wifis" ALTER COLUMN "label" SET DATA TYPE TEXT,
ALTER COLUMN "ssid" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT;
