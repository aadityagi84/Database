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




