-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema safezone
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema safezone
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `safezone` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `safezone` ;

-- -----------------------------------------------------
-- Table `safezone`.`lugar`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `safezone`.`lugar` ;

CREATE TABLE IF NOT EXISTS `safezone`.`lugar` (
  `ID_lugar` INT NOT NULL AUTO_INCREMENT,
  `Nombre` TEXT NOT NULL,
  `Tipo_de_lugar` TEXT NOT NULL,
  `Calificación` DOUBLE NOT NULL,
  `Reporte` TEXT NOT NULL,
  `Descripción` TEXT NOT NULL,
  `Recomendados_ID_lugar` INT NOT NULL,
  PRIMARY KEY (`ID_lugar`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `safezone`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `safezone`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `safezone`.`usuarios` (
  `ID_usuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` TEXT NOT NULL,
  `Apellido` TEXT NOT NULL,
  `Email` VARCHAR(50) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ID_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `safezone`.`calificaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `safezone`.`calificaciones` ;

CREATE TABLE IF NOT EXISTS `safezone`.`calificaciones` (
  `ID_calificación` INT NOT NULL AUTO_INCREMENT,
  `ID_lugar` INT NOT NULL,
  `Encuesta` INT NOT NULL,
  `Puntuación` DOUBLE NOT NULL,
  `Comentario` VARCHAR(255) NOT NULL,
  `Usuarios_ID_usuario` INT NOT NULL,
  PRIMARY KEY (`ID_calificación`, `Usuarios_ID_usuario`),
  INDEX `ID_lugar` (`ID_lugar` ASC) VISIBLE,
  INDEX `fk_Calificaciones_Usuarios1_idx` (`Usuarios_ID_usuario` ASC) VISIBLE,
  CONSTRAINT `Calificaciones_ibfk_1`
    FOREIGN KEY (`ID_lugar`)
    REFERENCES `safezone`.`lugar` (`ID_lugar`),
  CONSTRAINT `fk_Calificaciones_Usuarios1`
    FOREIGN KEY (`Usuarios_ID_usuario`)
    REFERENCES `safezone`.`usuarios` (`ID_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `safezone`.`reportes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `safezone`.`reportes` ;

CREATE TABLE IF NOT EXISTS `safezone`.`reportes` (
  `ID_reporte` INT NOT NULL AUTO_INCREMENT,
  `ID_lugar` INT NOT NULL,
  `Nombre_lugar` TEXT NOT NULL,
  `Tipo_de_delito` TEXT NOT NULL,
  `Descripción` VARCHAR(255) NOT NULL,
  `Usuarios_ID_usuario` INT NOT NULL,
  PRIMARY KEY (`ID_reporte`, `Usuarios_ID_usuario`),
  INDEX `ID_lugar` (`ID_lugar` ASC) VISIBLE,
  INDEX `fk_Reportes_Usuarios1_idx` (`Usuarios_ID_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Reportes_Usuarios1`
    FOREIGN KEY (`Usuarios_ID_usuario`)
    REFERENCES `safezone`.`usuarios` (`ID_usuario`),
  CONSTRAINT `Reportes_ibfk_1`
    FOREIGN KEY (`ID_lugar`)
    REFERENCES `safezone`.`lugar` (`ID_lugar`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `safezone`.`mapa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `safezone`.`mapa` ;

CREATE TABLE IF NOT EXISTS `safezone`.`mapa` (
  `ID_indicador` INT NOT NULL AUTO_INCREMENT,
  `Tipo_de_delito` TEXT NOT NULL,
  `Reportes_ID_reporte` INT NOT NULL,
  `Reportes_Usuarios_ID_usuario` INT NOT NULL,
  PRIMARY KEY (`ID_indicador`),
  INDEX `fk_Indicadores_Reportes1_idx` (`Reportes_ID_reporte` ASC, `Reportes_Usuarios_ID_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Indicadores_Reportes1`
    FOREIGN KEY (`Reportes_ID_reporte` , `Reportes_Usuarios_ID_usuario`)
    REFERENCES `safezone`.`reportes` (`ID_reporte` , `Usuarios_ID_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
