const mysql = require("mysql2");
require("dotenv").config();

// Create a connection pool for better scalability
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to initialize the database and tables
const dbconnection = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      return;
    }
    console.log("Database connection established.");

    // Create the database if it doesn't exist
    connection.query("CREATE DATABASE IF NOT EXISTS demo01", (err) => {
      if (err) {
        console.error("Error creating the database:", err.message);
        connection.release();
        return;
      }
      console.log("Database 'demo01' is ready.");

      // Use the created database
      connection.changeUser({ database: "demo01" }, (err) => {
        if (err) {
          console.error("Error switching to the database:", err.message);
          connection.release();
          return;
        }
        console.log("Switched to database 'demo01'.");

        // Create the 'users' table
        const createUserTable = `CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          email VARCHAR(50) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          token VARCHAR(255) DEFAULT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`;

        connection.query(createUserTable, (err) => {
          if (err) {
            console.error("Error creating the 'users' table:", err.message);
          } else {
            console.log("'users' table is ready.");
          }
         connection.release(); // Always release the connection
        });
      });
    });
  });
};

module.exports = {
  pool,
  dbconnection,
};

// The connection.release() method is used to return a database connection back to the connection pool after it has been used. This is critical for efficiently managing database connections in a pooled environment.

// Let me explain it with another simple example:

// Think of it as a Library Book System:
// Pool of Connections = Limited Number of Books

// The connection pool is like a library with a limited number of books available for borrowing.
// For example, if the library has 10 books (connections), only 10 people (requests) can borrow them at a time.
// Borrowing a Book = Using a Connection

// When a user needs to perform a database query, they "borrow" a connection from the pool.
// After they’re done reading (executing their query), they should return the book so that someone else can use it.
// Returning the Book = connection.release()

// If the user doesn’t return the book (i.e., doesn’t call connection.release()), the library will eventually run out of books.
// Similarly, if you don’t release the connection back to the pool, the pool will run out of available connections, and new requests will be blocked or fail.
// Why Is connection.release() Important?
// Prevents Resource Exhaustion:

// If you don’t release a connection, it remains occupied. Over time, your pool will run out of connections, and other requests will fail.
// Example: If your pool size is 10 and you don’t release connections, after 10 queries, no new queries can be processed.
// Improves Performance:

// Returning connections allows the pool to reuse existing connections rather than creating new ones for every request, which is slower and consumes more resources.
// Best Practice:

// Properly releasing connections is essential for long-running applications. Without it, your application might run into issues like connection timeouts, server crashes, or memory leaks.
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error getting connection from the pool:', err);
//     return;
//   }

//   try {
//     connection.query('SELECT * FROM users', (err, results) => {
//       if (err) {
//         throw err;
//       }
//       console.log('Query results:', results);
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     connection.release(); // Always release the connection
//   }
// // });



// Summary:
// The connection.release() is like returning a borrowed book to the library:

// It ensures the resource (connection) is available for others.
// It prevents running out of resources (connections).
// It ensures smooth and efficient functioning of your application.
