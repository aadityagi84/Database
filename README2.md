<h2>How to insert a data in table</h2>
<h4>CODE : </h4>
 INSERT INTO users (id, name) VALUES (1, "RAHUL");
 <h4>Insert multiple  Data</h4>
 <p>
  INSERT INTO table_name (column1, column2, ...) <br>
VALUES <br>
    (value1_1, value1_2, ...),<br>
    (value2_1, value2_2, ...),<br>
    (value3_1, value3_2, ...);<br>

 </p><br><br>
<p style="font-size:14px:">
INSERT INTO users (name) <br>
VALUES <br>
    ("RAHUL"),<br>
    ("AMAN"),<br>
    ("PRIYA"),<br>
    ("KAVYA"),<br>
    ("VIJAY");<br>

</p>
<br><br>
<h2> READING DATA FROM  TABLE </h2>
<p>
 SELECT * FROM table_name
</p>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Query Reference</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        h1 {
            border-bottom: 2px solid #555;
            padding-bottom: 10px;
        }
        h2 {
            margin-top: 20px;
            color: #007BFF;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            color: #d6336c;
            font-family: Consolas, "Courier New", Courier, monospace;
        }
        .description {
            margin-bottom: 10px;
            color: #555;
        }
    </style>
</head>
<body>
    <h1>SQL Query Reference</h1>
    <h2>1. Select All Columns</h2>
    <div class="description">
        Retrieve all columns from the table.
    </div>
    <pre><code>SELECT * FROM table_name;</code></pre>
    <h2>2. Select Specific Columns</h2>
    <div class="description">
        Retrieve specific columns.
    </div>
    <pre><code>SELECT column1, column2 FROM table_name;</code></pre>
    <pre><code>SELECT id, name FROM table_name;</code></pre>
    <h2>3. Filter Data Using <code>WHERE</code> Clause</h2>
    <div class="description">
        Retrieve rows that match specific conditions.
    </div>
    <pre><code>SELECT * FROM table_name WHERE condition;</code></pre>
    <pre><code>SELECT * FROM users WHERE name = "RAHUL";</code></pre>
    <h2>4. Using <code>ORDER BY</code> for Sorting</h2>
    <div class="description">
        Sort the data in ascending (default) or descending order.
    </div>
    <pre><code>SELECT * FROM table_name ORDER BY column_name [ASC|DESC];</code></pre>
    <pre><code>SELECT * FROM users ORDER BY name ASC;</code></pre>
    <h2>5. Limit the Number of Rows</h2>
    <div class="description">
        Retrieve a fixed number of rows.
    </div>
    <pre><code>SELECT * FROM table_name LIMIT number_of_rows;</code></pre>
    <pre><code>SELECT * FROM users LIMIT 3;</code></pre>
    <h2>6. Paginate Results Using <code>LIMIT</code> and <code>OFFSET</code></h2>
    <div class="description">
        Retrieve a specific range of rows (useful for pagination).
    </div>
    <pre><code>SELECT * FROM table_name LIMIT number_of_rows OFFSET start_position;</code></pre>
    <pre><code>SELECT * FROM users LIMIT 3 OFFSET 2;</code></pre>
    <h2>7. Search Using Wildcards with <code>LIKE</code></h2>
    <div class="description">
        Search for rows that match a pattern.
    </div>
    <pre><code>SELECT * FROM table_name WHERE column_name LIKE pattern;</code></pre>
    <pre><code>SELECT * FROM users WHERE name LIKE "RA%";</code></pre>
    <h2>8. Aggregate Functions</h2>
    <div class="description">
        Perform calculations on column values.
    </div>
    <pre><code>SELECT COUNT(*) FROM users;</code></pre>
    <pre><code>SELECT MAX(id) FROM users;</code></pre>
    <h2>9. Group Data Using <code>GROUP BY</code></h2>
    <div class="description">
        Group rows based on column values.
    </div>
    <pre><code>SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;</code></pre>
    <pre><code>SELECT name, COUNT(*) FROM users GROUP BY name;</code></pre>
    <h2>10. Filter Groups Using <code>HAVING</code></h2>
    <div class="description">
        Filter grouped data.
    </div>
    <pre><code>SELECT column_name, COUNT(*) FROM table_name 
GROUP BY column_name 
HAVING COUNT(*) > 1;</code></pre>
    <h2>11. Combine Multiple Conditions with <code>AND</code>/<code>OR</code></h2>
    <div class="description">
        Retrieve rows based on multiple conditions.
    </div>
    <pre><code>SELECT * FROM table_name WHERE condition1 AND condition2;</code></pre>
    <pre><code>SELECT * FROM users WHERE id > 2 AND name = "RAHUL";</code></pre>
    <h2>12. Distinct Values</h2>
    <div class="description">
        Retrieve unique values in a column.
    </div>
    <pre><code>SELECT DISTINCT column_name FROM table_name;</code></pre>
    <pre><code>SELECT DISTINCT name FROM users;</code></pre>
    <h2>13. Joins (If Multiple Tables Are Used)</h2>
    <div class="description">
        Combine rows from two or more tables.
    </div>
    <pre><code>SELECT * FROM table1 
INNER JOIN table2 
ON table1.common_column = table2.common_column;</code></pre>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modify and Update Data in MySQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        h1 {
            border-bottom: 2px solid #555;
            padding-bottom: 10px;
        }
        h2 {
            margin-top: 20px;
            color: #007BFF;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            color: #d6336c;
            font-family: Consolas, "Courier New", Courier, monospace;
        }
        .description {
            margin-bottom: 10px;
            color: #555;
        }
    </style>
</head>
<body>
    <h1>Modify and Update Data in MySQL</h1>
    <!-- 1. Update Data -->
    <h2>1. Update Data in a Table</h2>
    <div class="description">
        Use the <code>UPDATE</code> statement to modify existing data in a table.
    </div>
    <pre><code>UPDATE table_name 
SET column1 = 'value1', column2 = 'value2' 
WHERE condition;</code></pre>
    <pre><code>UPDATE users 
SET name = 'RAHUL', email = 'rahul@example.com' 
WHERE id = 1;</code></pre>
    <!-- 2. Update Multiple Rows -->
    <h2>2. Update Multiple Rows</h2>
    <div class="description">
        Update multiple rows by specifying a condition that matches multiple records.
    </div>
    <pre><code>UPDATE users 
SET email = 'updated_email@example.com' 
WHERE id IN (1, 2, 3);</code></pre>
    <!-- 3. Update with Calculations -->
    <h2>3. Update with Calculations</h2>
    <div class="description">
        Use calculations or expressions while updating data.
    </div>
    <pre><code>UPDATE products 
SET price = price * 1.10 
WHERE category = 'electronics';</code></pre>
    <!-- 4. Modify a Column's Data Type -->
    <h2>4. Modify a Column's Data Type</h2>
    <div class="description">
        Change the data type of an existing column in a table.
    </div>
    <pre><code>ALTER TABLE table_name 
MODIFY COLUMN column_name new_data_type;</code></pre>
    <pre><code>ALTER TABLE users 
MODIFY COLUMN email VARCHAR(255);</code></pre>
    <!-- 5. Rename a Column -->
    <h2>5. Rename a Column</h2>
    <div class="description">
        Use <code>ALTER TABLE</code> to rename a column.
    </div>
    <pre><code>ALTER TABLE table_name 
CHANGE old_column_name new_column_name data_type;</code></pre>
    <pre><code>ALTER TABLE users 
CHANGE email user_email VARCHAR(255);</code></pre>
    <!-- 6. Add a New Column -->
    <h2>6. Add a New Column</h2>
    <div class="description">
        Add a new column to an existing table.
    </div>
    <pre><code>ALTER TABLE table_name 
ADD new_column_name data_type;</code></pre>
    <pre><code>ALTER TABLE users 
ADD age INT;</code></pre>
    <!-- 7. Drop a Column -->
    <h2>7. Drop a Column</h2>
    <div class="description">
        Remove a column from a table.
    </div>
    <pre><code>ALTER TABLE table_name 
DROP COLUMN column_name;</code></pre>
    <pre><code>ALTER TABLE users 
DROP COLUMN age;</code></pre>

    <!-- 8. Rename a Table -->
    <h2>8. Rename a Table</h2>
    <div class="description">
        Use the <code>RENAME</code> statement to rename a table.
    </div>
    <pre><code>RENAME TABLE old_table_name 
TO new_table_name;</code></pre>
    <pre><code>RENAME TABLE users 
TO customers;</code></pre>
    <!-- 9. Update with Subquery -->
    <h2>9. Update Using a Subquery</h2>
    <div class="description">
        Use a subquery to update data based on another table.
    </div>
    <pre><code>UPDATE table_name 
SET column_name = (SELECT value FROM another_table WHERE condition)
WHERE condition;</code></pre>
    <pre><code>UPDATE products 
SET price = (SELECT AVG(price) FROM products WHERE category = 'electronics')
WHERE category = 'home_appliances';</code></pre>
    <!-- 10. Update with Joins -->
    <h2>10. Update with Joins</h2>
    <div class="description">
        Update data in one table based on a related table.
    </div>
    <pre><code>UPDATE table1 
INNER JOIN table2 
ON table1.common_column = table2.common_column 
SET table1.column_name = table2.value
WHERE condition;</code></pre>
    <pre><code>UPDATE orders 
INNER JOIN customers 
ON orders.customer_id = customers.id 
SET orders.status = 'completed'
WHERE customers.vip_status = 1;</code></pre>
    <!-- 11. Update Without a WHERE Clause -->
    <h2>11. Update All Rows in a Table</h2>
    <div class="description">
        Update all rows without a <code>WHERE</code> clause (use with caution).
    </div>
    <pre><code>UPDATE table_name 
SET column_name = 'value';</code></pre>
    <pre><code>UPDATE users 
SET status = 'inactive';</code></pre>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Data in MySQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        h1 {
            border-bottom: 2px solid #555;
            padding-bottom: 10px;
        }
        h2 {
            margin-top: 20px;
            color: #d9534f;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            color: #d6336c;
            font-family: Consolas, "Courier New", Courier, monospace;
        }
        .description {
            margin-bottom: 10px;
            color: #555;
        }
    </style>
</head>
<body>
    <h1>Delete Data in MySQL</h1>
    <!-- 1. Delete Specific Rows -->
    <h2>1. Delete Specific Rows</h2>
    <div class="description">
        Use the <code>DELETE</code> statement with a <code>WHERE</code> clause to delete specific rows from a table.
    </div>
    <pre><code>DELETE FROM table_name 
WHERE condition;</code></pre>
    <pre><code>DELETE FROM users 
WHERE id = 1;</code></pre>
    <!-- 2. Delete Multiple Rows -->
    <h2>2. Delete Multiple Rows</h2>
    <div class="description">
        Delete multiple rows by specifying a condition that matches multiple records.
    </div>
    <pre><code>DELETE FROM table_name 
WHERE column_name IN (value1, value2, ...);</code></pre>
    <pre><code>DELETE FROM users 
WHERE id IN (2, 3, 4);</code></pre>
    <!-- 3. Delete All Rows -->
    <h2>3. Delete All Rows</h2>
    <div class="description">
        To delete all rows from a table, omit the <code>WHERE</code> clause. Use this with caution!
    </div>
    <pre><code>DELETE FROM table_name;</code></pre>
    <pre><code>DELETE FROM users;</code></pre>
    <!-- 4. Delete Using a Subquery -->
    <h2>4. Delete Using a Subquery</h2>
    <div class="description">
        Use a subquery to delete rows based on conditions from another table.
    </div>
    <pre><code>DELETE FROM table_name 
WHERE column_name IN 
(SELECT column_name FROM another_table WHERE condition);</code></pre>
    <pre><code>DELETE FROM users 
WHERE id IN 
(SELECT user_id FROM orders WHERE status = 'canceled');</code></pre>
    <!-- 5. Delete with Joins -->
    <h2>5. Delete with Joins</h2>
    <div class="description">
        Delete rows from a table based on related data in another table using a join.
    </div>
    <pre><code>DELETE table1 
FROM table1 
INNER JOIN table2 
ON table1.common_column = table2.common_column 
WHERE condition;</code></pre>
    <pre><code>DELETE users 
FROM users 
INNER JOIN orders 
ON users.id = orders.user_id 
WHERE orders.status = 'inactive';</code></pre>
    <!-- 6. Truncate a Table -->
    <h2>6. Truncate a Table</h2>
    <div class="description">
        Use <code>TRUNCATE</code> to quickly delete all rows in a table. This operation resets the auto-increment counter.
    </div>
    <pre><code>TRUNCATE TABLE table_name;</code></pre>
    <pre><code>TRUNCATE TABLE users;</code></pre>
    <!-- 7. Delete with Limit -->
    <h2>7. Delete with LIMIT</h2>
    <div class="description">
        Use the <code>LIMIT</code> clause to delete a specific number of rows. Be cautious as <code>LIMIT</code> without <code>ORDER BY</code> may produce unpredictable results.
    </div>
    <pre><code>DELETE FROM table_name 
ORDER BY column_name 
LIMIT number;</code></pre>
    <pre><code>DELETE FROM users 
ORDER BY id 
LIMIT 2;</code></pre>
    <!-- 8. Delete with Conditions -->
    <h2>8. Delete Rows Based on Multiple Conditions</h2>
    <div class="description">
        Use logical operators like <code>AND</code> or <code>OR</code> to combine multiple conditions.
    </div>
    <pre><code>DELETE FROM table_name 
WHERE condition1 AND condition2;</code></pre>
    <pre><code>DELETE FROM users 
WHERE age > 30 AND status = 'inactive';</code></pre>
    <!-- 9. Delete Rows with NOT Condition -->
    <h2>9. Delete Rows Excluding a Condition</h2>
    <div class="description">
        Use the <code>NOT</code> operator to exclude rows that match a specific condition.
    </div>
    <pre><code>DELETE FROM table_name 
WHERE NOT condition;</code></pre>
    <pre><code>DELETE FROM users 
WHERE NOT status = 'active';</code></pre>
</body>
</html>

