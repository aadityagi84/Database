<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  
</head>
<body>
    <div class="container">
        <h1>Primary Key in MySQL</h1>
        <p>A <strong>Primary Key</strong> in MySQL is a unique identifier for each record in a table. It ensures that no two rows can have the same value for this key and that the key is not NULL. This enforces data integrity and helps in efficient retrieval of data.</p>
        <h2>Why Use a Primary Key?</h2>
        <ul>
            <li><strong>Uniqueness:</strong> Ensures that no duplicate values exist for the key column(s).</li>
            <li><strong>Indexing:</strong> MySQL automatically creates a unique index on the primary key, making data retrieval faster.</li>
            <li><strong>Data Integrity:</strong> Prevents NULL or duplicate values in the key column(s).</li>
        </ul>
        <h2>Types of Primary Keys</h2>
        <h3>Single-Column Primary Key</h3>
        <p>A single column is used as the primary key.</p>
        <code>
CREATE TABLE users (
    user_id INT AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);
        </code>
        
        <h3>Composite Primary Key</h3>
        <p>Combines two or more columns to uniquely identify a record.</p>
        <code>
CREATE TABLE order_details (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (order_id, product_id)
);
        </code>
        <h2>Using Primary Keys</h2>
        <h3>Insert Data:</h3>
        <code>
INSERT INTO users (username, email) VALUES ('JohnDoe', 'john@example.com');
        </code>
        <h3>Retrieve Data:</h3>
        <code>
SELECT * FROM users WHERE user_id = 1;
        </code>
        <h3>Update Data:</h3>
        <code>
UPDATE users SET email = 'newemail@example.com' WHERE user_id = 1;
        </code>
        <h3>Delete Data:</h3>
        <code>
DELETE FROM users WHERE user_id = 1;
        </code>
    </div>
</body>
</html>
