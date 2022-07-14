/*
  Warnings:

  - A unique constraint covering the columns `[user_id,label]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "credentials_user_id_label_key" ON "credentials"("user_id", "label");
