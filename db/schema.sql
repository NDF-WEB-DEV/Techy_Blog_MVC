DROP DATABASE IF EXISTS techwreck_db;
CREATE DATABASE techwreck_db;
USE techwreck_db;

-- CREATE TABLE user (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     userName VARCHAR(30) NOT NULL,
--     password VARCHAR(30) NOT NULL,
--     isEmail VARCHAR(100) 
-- );

-- CREATE TABLE post (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     username VARCHAR(30) NOT NULL,
--     postdate DATE NOT NULL,
--     title VARCHAR(100) NOT NULL,
--     content TEXT(235) NOT NULL,
--     -- isUrl VARCHAR(100),
--     user_id INT, 
--     FOREIGN KEY (user_id)
--     REFERENCES user(id)
--     ON DELETE SET NULL
-- );

-- CREATE TABLE video (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     post_id INT,
--     FOREIGN KEY (post_id)
--     REFERENCES post(id)
--     ON DELETE SET NULL
--     -- post_isUrl VARCHAR,
--     -- FOREIGN KEY (post_isUrl),
--     -- REFERENCES post(isUrl),
--     -- ON DELETE SET NULL
-- );