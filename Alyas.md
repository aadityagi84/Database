<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySQL Aliases</title>
   
</head>
<body>
    <h1>MySQL Aliases</h1>
    <p>An alias in MySQL is a temporary name for a table or column, making queries easier to read and manage.</p>
    <h2>Key Points</h2>
    <ul>
        <li>Aliases are temporary and exist only during query execution.</li>
        <li>The <code>AS</code> keyword is optional but improves clarity.</li>
        <li>Aliases help rename columns and simplify table names.</li>
    </ul>
    <h2>Examples</h2>
    <h3>1. Column Alias</h3>
    <pre><code>SELECT first_name AS Name, salary AS "Monthly Salary"
FROM employees;</code></pre>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Monthly Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>5000</td>
            </tr>
            <tr>
                <td>Alice</td>
                <td>7000</td>
            </tr>
        </tbody>
    </table>
    <h3>2. Table Alias</h3>
    <pre><code>SELECT e.first_name, d.department_name
FROM employees AS e
JOIN departments AS d ON e.department_id = d.department_id;</code></pre>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Department Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>HR</td>
            </tr>
            <tr>
                <td>Alice</td>
                <td>IT</td>
            </tr>
        </tbody>
    </table>
    <h3>3. Calculated Columns with Aliases</h3>
    <pre><code>SELECT salary, salary * 12 AS "Annual Salary"
FROM employees;</code></pre>
    <table>
        <thead>
            <tr>
                <th>Salary</th>
                <th>Annual Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>5000</td>
                <td>60000</td>
            </tr>
            <tr>
                <td>7000</td>
                <td>84000</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
