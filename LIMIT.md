<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>MySQL LIKE Operator</h1>
    <p>The <code>LIKE</code> operator in MySQL is used to search for a specified pattern in a column. It works well with text fields and supports two wildcards for pattern matching:</p>
    <ul>
        <li><code>%</code> - Matches zero, one, or multiple characters.</li>
        <li><code>_</code> - Matches exactly one character.</li>
    </ul>
    <h2>Syntax</h2>
    <pre><code>SELECT column1, column2, ...
FROM table_name
WHERE column_name LIKE pattern;</code></pre>
    <h2>Examples</h2>
    <div class="code-block">
        <h3>Example 1: Names Starting with "J"</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees WHERE name LIKE 'J%';</code></pre>
        <p><strong>Explanation:</strong> This query fetches all records where the name starts with "J".</p>
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
            </tbody>
        </table>
    </div>
    <div class="code-block">
        <h3>Example 2: Names Containing "ar"</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees WHERE name LIKE '%ar%';</code></pre>
        <p><strong>Explanation:</strong> This query fetches all records where the name contains "ar".</p>
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
                <tr><td>3</td><td>Karen</td><td>karen@example.com</td></tr>
                <tr><td>4</td><td>Mark</td><td>mark@example.com</td></tr>
            </tbody>
        </table>
    </div>
    <div class="code-block">
        <h3>Example 3: Names Ending with "n"</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees WHERE name LIKE '%n';</code></pre>
        <p><strong>Explanation:</strong> This query fetches all records where the name ends with "n".</p>
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
                <tr><td>3</td><td>Karen</td><td>karen@example.com</td></tr>
            </tbody>
        </table>
    </div>
    <div class="code-block">
        <h3>Example 4: Names of a Specific Length</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees WHERE name LIKE 'J___';</code></pre>
        <p><strong>Explanation:</strong> This query fetches all records where the name is exactly 4 characters long and starts with "J".</p>
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
                <tr><td>5</td><td>Jack</td><td>jack@example.com</td></tr>
            </tbody>
        </table>
    </div>
    <h2>Key Points</h2>
    <ul>
        <li>Use <code>%</code> for flexible pattern matching (zero or more characters).</li>
        <li>Use <code>_</code> to match exactly one character.</li>
        <li>Combine with <code>NOT LIKE</code> to exclude specific patterns.</li>
    </ul>

</body>
</html>
