<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySQL LIMIT Clause</title>
</head>
<body>
    <h1>MySQL LIMIT Clause</h1>
    <p>The <code>LIMIT</code> clause in MySQL is used to specify the number of records to return from a query. It's especially useful for large datasets to fetch only the required data.</p>
    <h2>Syntax</h2>
    <pre><code>SELECT column1, column2, ...
FROM table_name
LIMIT [offset,] row_count;</code></pre>
    <p><strong>Parameters:</strong></p>
    <ul>
        <li><strong>row_count</strong>: The number of records to fetch.</li>
        <li><strong>offset</strong>: The number of records to skip before starting to fetch records (optional).</li>
    </ul>
    <h2>Examples</h2>
    <div class="code-block">
        <h3>Example 1: Fetching the First 3 Records</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees LIMIT 3;</code></pre>
        <p><strong>Explanation:</strong> This query retrieves the first 3 rows from the <code>employees</code> table.</p>
        <p><strong>Result:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>John</td><td>john@example.com</td></tr>
                <tr><td>2</td><td>Jane</td><td>jane@example.com</td></tr>
                <tr><td>3</td><td>Mark</td><td>mark@example.com</td></tr>
            </tbody>
        </table>
    </div>
    <div class="code-block">
        <h3>Example 2: Fetching 2 Records After Skipping the First 2</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees LIMIT 2, 2;</code></pre>
        <p><strong>Explanation:</strong> This query skips the first 2 rows and fetches the next 2 rows from the <code>employees</code> table.</p>
        <p><strong>Result:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>3</td><td>Mark</td><td>mark@example.com</td></tr>
                <tr><td>4</td><td>Emily</td><td>emily@example.com</td></tr>
            </tbody>
        </table>
    </div>
    <div class="code-block">
        <h3>Example 3: Fetching All Records After a Certain Point</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees LIMIT 4, 100;</code></pre>
        <p><strong>Explanation:</strong> This query skips the first 4 rows and fetches up to 100 rows afterward.</p>
    </div>
    <h2>Key Points</h2>
    <ul>
        <li>Use <code>LIMIT</code> to restrict the number of rows in the result set.</li>
        <li>Combine <code>LIMIT</code> with <code>ORDER BY</code> to fetch specific rows in a sorted order.</li>
        <li>When only one argument is used (e.g., <code>LIMIT 5</code>), it fetches the first 5 rows.</li>
    </ul>
    <h2>Practical Use Cases</h2>
    <ul>
        <li>Paginating results in a web application.</li>
        <li>Fetching the top N records based on a certain condition.</li>
        <li>Limiting the number of results in performance-sensitive queries.</li>
    </ul>

</body>
</html>
