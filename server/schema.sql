#Uncomment the line below to delete database
#DROP DATABASE friends

CREATE DATABASE friends;
USE friends;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL /*UNIQUE*/,
  password VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50),
  phone VARCHAR(15),
  email VARCHAR(50),
  diet TEXT
);

CREATE TABLE groups (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  groupname VARCHAR(50) NOT NULL /*UNIQUE*/
);

CREATE TABLE usergroup (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  menu TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  uid INT,
  gid INT,
  FOREIGN KEY (uid) REFERENCES users(id),
  FOREIGN KEY (gid) REFERENCES groups(id) 
);

/*npm run init*/

