-- creates database
CREATE DATABASE burgers_db;

-- specifies to use database that was just created
USE burgers_db;

-- creates table within burgers db
CREATE TABLE burgers (
    id int not null auto_increment;
    burger_name varchar(150) not null;
    devoured boolean default false;
    primary key (id)
);

-- selects table burgers and displays it in sql workbench
SELECT * FROM burgers;



-- jaws db

CREATE DATABASE pevk6t0v3790u08q;

-- specifies to use database that was just created
USE pevk6t0v3790u08q;

-- creates table within burgers db
CREATE TABLE burgers (
    id int not null auto_increment;
    burger_name varchar(150) not null;
    devoured boolean default false;
    primary key (id)
);

-- selects table burgers and displays it in sql workbench
SELECT * FROM burgers;
