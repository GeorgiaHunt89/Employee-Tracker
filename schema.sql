DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(20, 2),
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id) 
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);


INSERT INTO department (id, department_name)
VALUES (1, "Marketing");

INSERT INTO department (id, department_name)
VALUES (2, "Finance");

INSERT INTO department (id, department_name)
VALUES (3, "Human Resouces");

INSERT INTO department (id, department_name)
VALUES (4, "IT");

INSERT INTO department (id, department_name)
VALUES (5, "Associates");





INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Marketing Manager", 90000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Finance Manager", 120000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "HR Manager", 90000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Brand Manager", 65000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Finance Manager PA", 70000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Director", 120000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "System Adminstrator", 80000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "IT Coordinator", 52000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "IT Manager", 105000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "CEO", 150000, 5);




INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Georgia", "Hunt", 10, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Meghan", "Kim", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Ashley", "Brooke", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Charlotte", "Taylor", 7, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Melissa", "Smith", 4, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Graham", "Bennit", 2, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Emma", "Jones", 3, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Lilly", "Soon", 5, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Zach", "Howes", 8, 9);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Martin", "Thomas", 9, null);

