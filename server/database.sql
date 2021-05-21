CREATE DATABASE test;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    username VARCHAR(25),
    password VARCHAR(25),
    type INTEGER   (0 is Employer, 1 is Employee)
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(100)
);