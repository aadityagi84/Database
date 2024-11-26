<h2>How to set a NOT NULL value in database</h2>
 <pre><code> CREATE TABLE(id INT NOT NULL, name VARCHAR(100) NOT NULL);</Code></pre>
 <pre><code>SELECT * FROM table_name WHERE condition1 AND condition2;</code></pre>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySQL Default Values Explanation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        code {
            background: #f4f4f4;
            padding: 10px;
            display: block;
            margin-bottom: 10px;
            border-left: 4px solid #0077cc;
        }
        .example {
            margin-bottom: 20px;
        }
        h3 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>MySQL Default Values</h1>
    <p>Below are detailed examples of MySQL default values and their use cases:</p>
    <div class="example">
        <h3>Default Numeric Value</h3>
        <code>
            CREATE TABLE employees ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; name VARCHAR(50), <br>
            &nbsp;&nbsp;&nbsp; salary DECIMAL(10, 2) DEFAULT 50000.00 <br>
            );
        </code>
        <p><strong>Explanation:</strong> If no salary is provided, it will default to 50000.00.</p>
    </div>
    <div class="example">
        <h3>Default String Value</h3>
        <code>
            CREATE TABLE products ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; name VARCHAR(100) NOT NULL, <br>
            &nbsp;&nbsp;&nbsp; status VARCHAR(20) DEFAULT 'available' <br>
            );
        </code>
        <p><strong>Explanation:</strong> If no status is provided, it defaults to 'available'.</p>
    </div>
    <div class="example">
        <h3>Default Date/Time Value</h3>
        <code>
            CREATE TABLE orders ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP <br>
            );
        </code>
        <p><strong>Explanation:</strong> Order date defaults to the current timestamp.</p>
    </div>
    <div class="example">
        <h3>Default Boolean Value</h3>
        <code>
            CREATE TABLE users ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; username VARCHAR(50) NOT NULL, <br>
            &nbsp;&nbsp;&nbsp; is_active TINYINT(1) DEFAULT 1 <br>
            );
        </code>
        <p><strong>Explanation:</strong> `is_active` defaults to 1 (active).</p>
    </div>
    <div class="example">
        <h3>Default Computed/Expression Value</h3>
        <code>
            CREATE TABLE inventory ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; product_name VARCHAR(50), <br>
            &nbsp;&nbsp;&nbsp; stock INT DEFAULT 100, <br>
            &nbsp;&nbsp;&nbsp; restock_needed BOOLEAN AS (stock < 20) STORED <br>
            );
        </code>
        <p><strong>Explanation:</strong> The `restock_needed` is automatically computed based on the `stock` column.</p>
    </div>
    <div class="example">
        <h3>Default Enum Value</h3>
        <code>
            CREATE TABLE memberships ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; type ENUM('bronze', 'silver', 'gold') DEFAULT 'bronze' <br>
            );
        </code>
        <p><strong>Explanation:</strong> If no membership type is provided, it defaults to 'bronze'.</p>
    </div>
    <div class="example">
        <h3>Default NULL Value</h3>
        <code>
            CREATE TABLE customers ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; name VARCHAR(50), <br>
            &nbsp;&nbsp;&nbsp; age INT DEFAULT NULL <br>
            );
        </code>
        <p><strong>Explanation:</strong> If no age is provided, the column value defaults to `NULL`.</p>
    </div>
    <div class="example">
        <h3>Default Auto-Increment Value</h3>
        <code>
            CREATE TABLE orders ( <br>
            &nbsp;&nbsp;&nbsp; id INT AUTO_INCREMENT PRIMARY KEY, <br>
            &nbsp;&nbsp;&nbsp; product_name VARCHAR(50) NOT NULL <br>
            );
        </code>
        <p><strong>Explanation:</strong> The `id` column automatically increments with each new row, starting from 1.</p>
    </div>
</body>
</html>
