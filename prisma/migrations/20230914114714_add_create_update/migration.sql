/*
  Warnings:

  - Added the required column `create_at` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TEXT;
