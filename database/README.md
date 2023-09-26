## MySQL

1. Create Database :
```sql
CREATE DATABASE inurture ;
```


2. use Database :
```sql
USE inurture ;
```


3. Create ``` users ``` Table in inurture Database :
```sql 
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```


