-- CreateTable
CREATE TABLE `RoleUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `RoleUser_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
