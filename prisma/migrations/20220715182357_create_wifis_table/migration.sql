-- CreateTable
CREATE TABLE "wifis" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "label" VARCHAR(50) NOT NULL,
    "ssid" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wifis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wifis_user_id_label_key" ON "wifis"("user_id", "label");

-- AddForeignKey
ALTER TABLE "wifis" ADD CONSTRAINT "wifis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
