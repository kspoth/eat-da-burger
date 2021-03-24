CREATE DATABASE IF NOT EXISTS`burgers_db`;
USE `burgers_db`;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
SELECT * FROM burgers;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Martha#1sys_config';