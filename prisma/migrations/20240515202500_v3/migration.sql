/*
  Warnings:

  - Added the required column `employee_designation` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employees` ADD COLUMN `employee_designation` VARCHAR(191) NOT NULL;
