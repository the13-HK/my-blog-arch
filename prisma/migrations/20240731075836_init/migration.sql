/*
  Warnings:

  - You are about to drop the column `name` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Post_name_idx";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "name",
ADD COLUMN     "descriptiion" TEXT,
ADD COLUMN     "title" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE INDEX "Post_title_idx" ON "Post"("title");
