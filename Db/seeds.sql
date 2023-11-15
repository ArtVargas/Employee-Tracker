INSERT INTO departments (department_name)
VALUES
('Executive Board'),
('Marketing'),
('Human Resources'),
('Finance'),
('Engineering'),
('Science'),
('Technology'),
('Customer Relations'),
('Research of Development'),
('Maintenance');

INSERT INTO roles (title, department_id)
VALUES
('Chief Executive Officer', 1),
('Marketing Manager', 2),
('HR Director', 3),
('Finance Lead', 4),
('Senior Engineer', 5),
('IT Manager', 6),
('Customer Relations Lead Manager', 7),
('Research Development Manager', 8),
('Maintenance Manager' 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Peter', 'Parker', 1, 1),
('Miles', 'Morales', 2, 2),
('Ben', 'Reily', 3, 3),
('Eddie', 'Brock', 4, 4),
('Mary-Jane', 'Watson', 5, 5),
('Walter', 'White', 6, 6),
('Jesse', 'Pinkman', 7, 7),
('Gustavo', 'Fring', 8, 8),
('Mike', 'Ermantraut', 9, 9);
