<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
    <h1>MySQL <code>ORDER BY</code> Keyword</h1>
    <p>The <code>ORDER BY</code> keyword in MySQL is used to sort the result set of a query in either ascending (<code>ASC</code>) or descending (<code>DESC</code>) order. It is applied to one or more columns in a query.</p>
    <h2>Why Use <code>ORDER BY</code>?</h2>
    <ul>
        <li>To organize data in a meaningful way for better analysis and readability.</li>
        <li>To sort records based on numeric, string, or date columns.</li>
        <li>To facilitate reports and summaries by displaying sorted data.</li>
    </ul>
    <h2>Syntax</h2>
    <pre><code>SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];</code></pre>
    <h2>Examples</h2>
    <section>
        <h3>Example 1: Sort by a Single Column (Ascending)</h3>
        <p><strong>Table:</strong> employees</p>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>John</td><td>50000</td></tr>
                <tr><td>2</td><td>Jane</td><td>70000</td></tr>
                <tr><td>3</td><td>Alice</td><td>45000</td></tr>
                <tr><td>4</td><td>Bob</td><td>60000</td></tr>
            </tbody>
        </table>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees ORDER BY salary ASC;</code></pre>
        <p><strong>Output:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>3</td><td>Alice</td><td>45000</td></tr>
                <tr><td>1</td><td>John</td><td>50000</td></tr>
                <tr><td>4</td><td>Bob</td><td>60000</td></tr>
                <tr><td>2</td><td>Jane</td><td>70000</td></tr>
            </tbody>
        </table>
    </section>
    <section>
        <h3>Example 2: Sort by a Single Column (Descending)</h3>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees ORDER BY salary DESC;</code></pre>
        <p><strong>Output:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>2</td><td>Jane</td><td>70000</td></tr>
                <tr><td>4</td><td>Bob</td><td>60000</td></tr>
                <tr><td>1</td><td>John</td><td>50000</td></tr>
                <tr><td>3</td><td>Alice</td><td>45000</td></tr>
            </tbody>
        </table>
    </section>
    <section>
        <h3>Example 3: Sort by Multiple Columns</h3>
        <p>Sort by <code>salary</code> in ascending order, and if salaries are the same, sort by <code>name</code> in descending order.</p>
        <p><strong>Query:</strong></p>
        <pre><code>SELECT * FROM employees ORDER BY salary ASC, name DESC;</code></pre>
        <p><strong>Output:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>3</td><td>Alice</td><td>45000</td></tr>
                <tr><td>1</td><td>John</td><td>50000</td></tr>
                <tr><td>4</td><td>Bob</td><td>60000</td></tr>
                <tr><td>2</td><td>Jane</td><td>70000</td></tr>
            </tbody>
        </table>
    </section>
    <h2>Key Points</h2>
    <ul>
        <li>The default sort order is <strong>ascending</strong> (<code>ASC</code>).</li>
        <li>Use <code>DESC</code> to sort in descending order.</li>
        <li>You can sort by multiple columns by separating them with commas.</li>
        <li>Works with numeric, text, and date columns.</li>
    </ul>
</body>
</html>
