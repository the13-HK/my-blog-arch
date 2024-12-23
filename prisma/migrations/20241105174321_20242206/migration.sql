/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Uopeople" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "descriptiion" TEXT,
    "linkUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Uopeople_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gadgets" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "descriptiion" TEXT,
    "linkUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gadgets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Uopeople_title_idx" ON "Uopeople"("title");

-- CreateIndex
CREATE INDEX "Gadgets_title_idx" ON "Gadgets"("title");
