DROP DATABASE IF EXISTS beerdish;

CREATE DATABASE beerdish;

USE beerdish;

-- CREATE TABLE items (
--   id int NOT NULL AUTO_INCREMENT,
--   quantity integer NOT NULL,
--   description varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
-- );


DROP TABLE IF EXISTS `beer`;

CREATE TABLE `beer`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `image` VARCHAR(255) NULL ,
  `course_1` VARCHAR(255) NOT NULL,
  `course_2` VARCHAR(255) NOT NULL,
  `course_3` VARCHAR(255) NOT NULL,
  `hits` INTEGER NULL,
  PRIMARY KEY(`id`)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
