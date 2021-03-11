DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS companyRole;
DROP TABLE IF EXISTS employee;

CREATE TABLE department ( 
    id INTEGER UNSIGNED PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE companyRole (
    id INTEGER UNSIGNED PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) 
    REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER UNSIGNED PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER DEFAULT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id)
    REFERENCES companyRole(id) ON DELETE SET NULL,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id)
    REFERENCES employee(id) 
);
 