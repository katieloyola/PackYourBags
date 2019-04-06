DROP DATABASE IF EXISTS backpack_db;

CREATE DATABASE backpack_db;
USE backpack_db;

CREATE TABLE backpacks (
    id int NOT NULL AUTO_INCREMENT,
    backpack_item VARCHAR(120) NOT NULL,
    packed BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO backpacks (backpack_item, packed) VALUES ('Tent', FALSE);
INSERT INTO backpacks (backpack_item, packed) VALUES ('Sleeping Bag', FALSE);
INSERT INTO backpacks (backpack_item, packed) VALUES ('Headlamp', FALSE);
INSERT INTO backpacks (backpack_item, packed) VALUES ('Water Bottle', FALSE);
INSERT INTO backpacks (backpack_item, packed) VALUES ('Camera', FALSE);