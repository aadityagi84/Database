<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>MySQL ALTER Table Statement</h1>
    <p>The <strong>ALTER TABLE</strong> statement in MySQL is used to make changes to an existing table structure. This includes adding or removing columns, changing data types, renaming columns, and more.</p>
    <h2>Syntax</h2>
    <pre><code>
-- Adding a new column
ALTER TABLE table_name ADD column_name column_definition;

-- Dropping an existing column
ALTER TABLE table_name DROP COLUMN column_name;

-- Modifying a column
ALTER TABLE table_name MODIFY column_name new_definition;

-- Renaming a table
ALTER TABLE old_table_name RENAME TO new_table_name;
</code></pre>
    <h2>Examples</h2>
    <h3>Example 1: Add a New Column</h3>
    <p><strong>Query:</strong></p>
    <pre><code>ALTER TABLE employees ADD age INT;</code></pre>
    <p><strong>Explanation:</strong> This query adds a new column <code>age</code> of type <code>INT</code> to the <code>employees</code> table.</p>
    <h3>Example 2: Drop a Column</h3>
    <p><strong>Query:</strong></p>
    <pre><code>ALTER TABLE employees DROP COLUMN age;</code></pre>
    <p><strong>Explanation:</strong> This query removes the column <code>age</code> from the <code>employees</code> table.</p>
    <h3>Example 3: Modify a Column</h3>
    <p><strong>Query:</strong></p>
    <pre><code>ALTER TABLE employees MODIFY email VARCHAR(150);</code></pre>
    <p><strong>Explanation:</strong> This query changes the data type of the <code>email</code> column to <code>VARCHAR(150)</code>.</p>
    <h3>Example 4: Rename a Table</h3>
    <p><strong>Query:</strong></p>
    <pre><code>ALTER TABLE employees RENAME TO staff;</code></pre>
    <p><strong>Explanation:</strong> This query renames the table <code>employees</code> to <code>staff</code>.</p>
    <h2>Key Points</h2>
    <ul>
        <li>Use <strong>ADD</strong> to include a new column in the table.</li>
        <li>Use <strong>DROP</strong> to remove an unwanted column.</li>
        <li>Use <strong>MODIFY</strong> or <strong>CHANGE</strong> to update the data type or definition of a column.</li>
        <li>Use <strong>RENAME</strong> to change the table name.</li>
    </ul>
    <h2>Table Before and After ALTER</h2>
    <h3>Before:</h3>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane</td>
                <td>jane@example.com</td>
            </tr>
        </tbody>
    </table>
    <h3>After Adding Age Column:</h3>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John</td>
                <td>john@example.com</td>
                <td>30</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane</td>
                <td>jane@example.com</td>
                <td>28</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
