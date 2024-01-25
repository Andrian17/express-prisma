/*
  Warnings:

  - You are about to alter the column `created_at` on the `comments` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `samples` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `comments` MODIFY `created_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `samples` MODIFY `created_at` DATETIME NULL;
