<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>
    <h1>MySQL LIKE Operator</h1>
    <p>The <code>LIKE</code> operator is used to filter records based on patterns in a text column. It is commonly used with wildcards like <code>%</code> and <code>_</code>.</p>
    <h2>Syntax</h2>
    <pre><code>SELECT column1, column2, ...
FROM table_name
WHERE column_name LIKE pattern;</code></pre>
    <h2>Examples</h2>
    <section>
        <h3>Example 1: Match Names Starting with "J"</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees WHERE name LIKE 'J%';</code></pre>
        <p><strong>Result:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>John</td></tr>
                <tr><td>2</td><td>Jane</td></tr>
            </tbody>
        </table>
    </section>
    <section>
        <h3>Example 2: Match Names Containing "ar"</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees WHERE name LIKE '%ar%';</code></pre>
        <p><strong>Result:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>3</td><td>Karen</td></tr>
                <tr><td>4</td><td>Mark</td></tr>
            </tbody>
        </table>
    </section>
    <section>
        <h3>Example 3: Names of Specific Length</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees WHERE name LIKE 'J___';</code></pre>
        <p><strong>Result:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>5</td><td>Jack</td></tr>
            </tbody>
        </table>
    </section>
    <h2>Key Points</h2>
    <ul>
        <li><code>%</code> matches zero, one, or multiple characters.</li>
        <li><code>_</code> matches exactly one character.</li>
        <li>Use <code>NOT LIKE</code> to exclude patterns.</li>
    </ul>
</body>
</html>
