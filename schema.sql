CREATE database groceryList;

USE groceryList;

CREATE table items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  itemName VARCHAR(20),
  quantity INT
);



/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
