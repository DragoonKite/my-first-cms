INSERT INTO department (name)
Values ('IT'), ('HR'), ('LEGAL');

INSERT INTO companyRole (title, salary, department_id)
VALUES ('Head of IT', 175000.00, 1)
       ('Head of HR', 150000.00, 2),
       ('Lawyer', 250000.00, 3),
       ('Clerk', 50000.00, 3),
       ('Software Dev', 100000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Ronald', 'Firbank', 1, NULL),
        ('Virginia', 'Woolf', 2, NULL),
        ('Piers', 'Gaveston', 3, NULL),
        ('Charles', 'LeRoi', 4, 3),
        ('Katherine', 'Mansfield', 4, 3),
        ('Dora', 'Carrington', 5, 2),
        ('Edward', 'Bellamy', 5, 2),
        ('Montague', 'Summers', 5, 1),
        ('Octavia', 'Butler', 5, 1),
        ('Unica', 'Zurn', 5, 3);