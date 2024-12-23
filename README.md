### welcome DBS(Database MAnagement Sysytem)  MYSQL




<br>

```
  ALTER TABLE employees MODIFY id INT AUTO_INCREMENT PRIMARY KEY;
```
- To add an AUTO_INCREMENT property to the id column in your existing table in MySQL, you can use the ALTER TABLE command. However, please note that the AUTO_INCREMENT property can only be applied to a column that is an INTEGER type and is indexed, usually as the primary key.
- Steps to Add AUTO_INCREMENT
- If the id column is already the primary key: You can directly modify the column to add the AUTO_INCREMENT property.
**DAY:01**
- MySQL
- its is a database   management system
-  **Databse** : a database is a collection   of data  stored  in a format  that can easly  be accessed
-  a data which will be save in tabular form is known as **Collection of data**
-  **In overAll World there will be Multiple types of software in world and few will be:**
-  Oracle
-  MySql
-  Ms Sql Server
-  Postgre SQL
-  MongoDB
  ## Types of databses ##
- Relational
- NoSql
  ### Relational
- In relational databse their will be all of the data will be stored or save in table form , in this relational databse system their will be may of tables will be created for many and according to data purpose and these tables will be **Linked with each other** is known as Relational Databse Management System (RDMS)
- or haa ye jo humara databse base hote h ye ik language use krte h databse se connect hone ke liye jese **SQL** **(Structure Query Language)*
- - and in entire world their will be many types of MYSQL databse
-  Oracle
-  MySql
-  Ms Sql Server
-  Postgre SQL
  ### NOSQL ###
- in NOSQL databse databse their will be all of the data be stored in the formm of **collection/document*
- and in entire world their will be many types of NOSQL databse
- MONGODB
- REDIS
- CASSANDRA etc...

### Advantages OF MYSQL ###
- Cross Platform : we can use this in Any OS
- used with  multiple languages (PHP,NODEJS,PYTHON, C#,DOTNET,JAVA etc..)
- MYSQL is Open Source
- MYSQL is RDBMS(relational databse management system) mtlb jitna bhi data or table h vo sb ik dusre se link hote h mtlb ki jitna bhi aap ik hi command se run kr skte h
- The MSQL databse Server is **Fast, reliable, scalable* and easy to use.
- MySql Server  works in client/server  or embedded systems
- **Popular website who will use mysql**
- facebook
- twitter
- Google
- Wikipedia
- Youtube
- Flickr
- Pinterest
###DAY:02###
- **MYSQL** : is a collection of DBMS and database
- Difference between sql and my sql
- Sql is a (Structured Query Language) which is used to talk our databse
- MYSQL is a DBMS which is uses SQL  to talk databse
- ***There will be first query**
  ```
      SHOW DATABASES;
  ```
- this command is used to check how many databses would be held there
- to create a database using schema
```
CREATE SCHEMA DATABASE_NAME
&&
CREATE DATABASE database-name;
```
- 1. CREATE DATABASE HELLODB;
- Purpose: Creates a new database.
- Scope: Operates at the top level of a DBMS. A database is a container for schemas, tables, views, stored procedures, etc.
- Use Case: Used when you want to define a completely new and independent database within the DBMS.
```
CREATE DATABASE HELLODB;
USE HELLODB;
CREATE TABLE users (id INT, name VARCHAR(100));
```


- 2. CREATE SCHEMA HELLODB;
- Purpose: Creates a new schema within an existing database.
- Scope: Operates at the namespace level inside a database. A schema organizes database objects (tables, views, etc.) and provides a way to manage them logically.
- Use Case: Used to organize database objects within an existing database, often for security or logical grouping purposes.
- Behavior: Some DBMSs (like MySQL) treat CREATE SCHEMA as an alias for CREATE DATABASE. However, in systems like PostgreSQL or SQL Server, schemas exist within databases.
  ```
  CREATE SCHEMA HELLODB;
  CREATE TABLE HELLODB.users (id INT, name VARCHAR(100));
  ```
  <!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>
  <table>
    <caption>Key Differences: CREATE DATABASE vs CREATE SCHEMA</caption>
    <thead>
      <tr>
        <th>Aspect</th>
        <th>CREATE DATABASE</th>
        <th>CREATE SCHEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hierarchy</td>
        <td>Creates a top-level container.</td>
        <td>Creates a namespace within a database.</td>
      </tr>
      <tr>
        <td>Scope</td>
        <td>Operates globally in the DBMS.</td>
        <td>Operates locally in a specific database.</td>
      </tr>
      <tr>
        <td>Usage Context</td>
        <td>Creates a new independent database.</td>
        <td>Organizes objects in an existing database.</td>
      </tr>
      <tr>
        <td>DBMS Dependency</td>
        <td>Universal in most DBMSs.</td>
        <td>Behavior varies (alias in MySQL, distinct in PostgreSQL/SQL Server).</td>
      </tr>
    </tbody>
  </table>
</body>
</html>

### To use Database ###
- use command query
  ```
  USE database_name
  ```
***To check in which database use will loacted***
```
SELECT database();
```
***To delete a databse or (DROP DATABASE)***
```
DROP DATABASE databsename
```
### Now we will discuss about tables in MYSQL###
- a table is collection of related data held in a table format  within a databse
  ***How to Create a Table In MYSQL***
  ```
  CREATE TABLE table_name(
  id INT,
  name VARCHAR(100)
  )
  ```
  - and other one
    ```
    CREATE TABLE table_name(name VARCHAR(100),age INT);
    ```
  ### to check table will be genrate ##
  ```
  DESC TABLE
  ```
  ```
  DESC table_name;
  ```
**OR**
```
DESCRIBE table_name;


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
  <!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>
  <table>
    <caption>Table Structure</caption>
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Null</th>
        <th>Key</th>
        <th>Default</th>
        <th>Extra</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>id</td>
        <td>INT</td>
        <td>NO</td>
        <td>PRI</td>
        <td>NULL</td>
        <td>AUTO_INCREMENT</td>
      </tr>
      <tr>
        <td>name</td>
        <td>VARCHAR(100)</td>
        <td>NO</td>
        <td></td>
        <td>NULL</td>
        <td></td>
      </tr>
      <tr>
        <td>email</td>
        <td>VARCHAR(150)</td>
        <td>YES</td>
        <td>UNI</td>
        <td>NULL</td>
        <td></td>
      </tr>
      <tr>
        <td>created_at</td>
        <td>TIMESTAMP</td>
        <td>YES</td>
        <td></td>
        <td>CURRENT_TIMESTAMP</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</body>
</html>
- 






  












