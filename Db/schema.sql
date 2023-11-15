DROP DATABASE IF EXISTS 
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR () NOT NULL

);


Create Table roles (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (255)
department_id INT,
FOREIGN KEY (department_id)
REFRENCES departments(id)
on DELETE SET NULL 
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
manager_id INT NOT NULL
);
