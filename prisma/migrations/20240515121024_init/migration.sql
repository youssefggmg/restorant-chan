-- CreateTable
CREATE TABLE `restaurant` (
    `restaurant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `restaurant_name` VARCHAR(191) NOT NULL,
    `restaurant_address` VARCHAR(191) NOT NULL,
    `restaurant_phone` VARCHAR(191) NOT NULL,
    `restaurant_email` VARCHAR(191) NOT NULL,
    `restaurant_city` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `restaurant_restaurant_name_key`(`restaurant_name`),
    UNIQUE INDEX `restaurant_restaurant_address_key`(`restaurant_address`),
    UNIQUE INDEX `restaurant_restaurant_phone_key`(`restaurant_phone`),
    UNIQUE INDEX `restaurant_restaurant_email_key`(`restaurant_email`),
    PRIMARY KEY (`restaurant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,
    `category_img` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `category_category_name_key`(`category_name`),
    UNIQUE INDEX `category_category_img_key`(`category_img`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `employee_id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_name` VARCHAR(191) NOT NULL,
    `employee_img` VARCHAR(191) NOT NULL,
    `restorntID` INTEGER NOT NULL,

    UNIQUE INDEX `employees_employee_name_key`(`employee_name`),
    PRIMARY KEY (`employee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `newsletter` (
    `newsletter_id` INTEGER NOT NULL AUTO_INCREMENT,
    `newsletter_email` VARCHAR(191) NOT NULL,
    `restaurantID` INTEGER NOT NULL,

    UNIQUE INDEX `newsletter_newsletter_email_key`(`newsletter_email`),
    PRIMARY KEY (`newsletter_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ropa` (
    `meal_id` INTEGER NOT NULL AUTO_INCREMENT,
    `meal_name` VARCHAR(191) NOT NULL,
    `meal_description` VARCHAR(191) NOT NULL,
    `meal_price` DOUBLE NOT NULL,
    `meal_img` VARCHAR(191) NOT NULL,
    `catigoryID` INTEGER NOT NULL,

    UNIQUE INDEX `ropa_meal_name_key`(`meal_name`),
    UNIQUE INDEX `ropa_meal_description_key`(`meal_description`),
    UNIQUE INDEX `ropa_meal_img_key`(`meal_img`),
    PRIMARY KEY (`meal_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_restorntID_fkey` FOREIGN KEY (`restorntID`) REFERENCES `restaurant`(`restaurant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `newsletter` ADD CONSTRAINT `newsletter_restaurantID_fkey` FOREIGN KEY (`restaurantID`) REFERENCES `restaurant`(`restaurant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ropa` ADD CONSTRAINT `ropa_catigoryID_fkey` FOREIGN KEY (`catigoryID`) REFERENCES `category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
