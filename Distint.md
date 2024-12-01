<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>MySQL <code>DISTINCT</code> Keyword</h1>
    <p>The <code>DISTINCT</code> keyword in MySQL is used to remove duplicate records from the result set of a query. It ensures that the retrieved data contains only unique values for the specified column(s).</p>
    <h2>Syntax</h2>
    <pre><code>SELECT DISTINCT column1, column2, ...
FROM table_name;</code></pre>
    <section>
        <h2>Key Points</h2>
        <ul>
            <li><strong>Applies to Columns:</strong> The <code>DISTINCT</code> keyword works on the combination of all specified columns.</li>
            <li><strong>Can Be Used with Aggregates:</strong> It is often used with aggregate functions to perform operations on unique values.</li>
            <li><strong>Affects the Entire Row:</strong> If no specific column is mentioned, it removes duplicate rows across all selected columns.</li>
        </ul>
    </section>
    <section>
        <h2>Examples</h2>
        <h3>Example 1: Single Column</h3>
        <p><strong>Table:</strong> employees</p>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>department</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>John</td><td>IT</td></tr>
                <tr><td>2</td><td>Jane</td><td>HR</td></tr>
                <tr><td>3</td><td>Alice</td><td>IT</td></tr>
                <tr><td>4</td><td>Bob</td><td>Finance</td></tr>
                <tr><td>5</td><td>John</td><td>IT</td></tr>
            </tbody>
        </table>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT DISTINCT name FROM employees;</code></pre>
        <p><strong>Output:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>John</td></tr>
                <tr><td>Jane</td></tr>
                <tr><td>Alice</td></tr>
                <tr><td>Bob</td></tr>
            </tbody>
        </table>
        <h3>Example 2: Multiple Columns</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT DISTINCT name, department FROM employees;</code></pre>
        <p><strong>Output:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>department</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>John</td><td>IT</td></tr>
                <tr><td>Jane</td><td>HR</td></tr>
                <tr><td>Alice</td><td>IT</td></tr>
                <tr><td>Bob</td><td>Finance</td></tr>
            </tbody>
        </table>
        <h3>Example 3: With Aggregate Function</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT COUNT(DISTINCT department) AS unique_departments FROM employees;</code></pre>
        <p><strong>Output:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>unique_departments</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>3</td></tr>
            </tbody>
        </table>
        <h3>Example 4: Using <code>DISTINCT</code> on All Columns</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT DISTINCT * FROM employees;</code></pre>
        <p><strong>Output:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>department</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>John</td><td>IT</td></tr>
                <tr><td>2</td><td>Jane</td><td>HR</td></tr>
                <tr><td>3</td><td>Alice</td><td>IT</td></tr>
                <tr><td>4</td><td>Bob</td><td>Finance</td></tr>
            </tbody>
        </table>
    </section>
    <section>
        <h2>Benefits of <code>DISTINCT</code></h2>
        <ul>
            <li>Removes duplicate data, making result sets cleaner and more meaningful.</li>
            <li>Useful for summarizing data or finding unique entries in large datasets.</li>
        </ul>
    </section>
</body>
</html>
