DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS companyRole;
DROP TABLE IF EXISTS department;

CREATE TABLE department ( 
    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE companyRole (
    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER UNSIGNED,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) 
    REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED,
    manager_id INTEGER UNSIGNED DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES companyRole(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id) 
);
 