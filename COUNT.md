<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
    <h1>MySQL <code>COUNT</code> Function</h1>
    <p>The <code>COUNT</code> function in MySQL is used to return the number of rows in a table or the number of non-NULL values in a specific column. It is commonly used with the <code>SELECT</code> statement to count rows that match specific conditions.</p>
    <h2>Syntax</h2>
    <pre>
SELECT COUNT(column_name) FROM table_name WHERE condition;
    </pre>
    <p><b>Key Details:</b></p>
    <ul>
        <li><code>column_name</code>: The column to count non-NULL values.</li>
        <li><code>*</code>: Counts all rows, including those with NULL values.</li>
        <li><code>WHERE condition</code>: Optional; filters the rows to count only those that meet the condition.</li>
    </ul>
    <h2>Examples</h2>
    <h3>1. Count All Rows in a Table</h3>
    <pre>
SELECT COUNT(*) AS total_employees FROM employees;
    </pre>
    <p><b>Description:</b> Counts all rows in the <code>employees</code> table, including those with NULL values.</p>
    <table>
        <tr>
            <th>total_employees</th>
        </tr>
        <tr>
            <td>10</td>
        </tr>
    </table>
    <h3>2. Count Non-NULL Values in a Column</h3>
    <pre>
SELECT COUNT(email) AS total_emails FROM employees;
    </pre>
    <p><b>Description:</b> Counts only rows where the <code>email</code> column is not NULL.</p>
    <table>
        <tr>
            <th>total_emails</th>
        </tr>
        <tr>
            <td>9</td>
        </tr>
    </table>
    <h3>3. Count Rows Matching a Condition</h3>
    <pre>
SELECT COUNT(*) AS high_salary_employees FROM employees WHERE salary > 30000;
    </pre>
    <p><b>Description:</b> Counts rows where the <code>salary</code> column has values greater than 30,000.</p>
    <table>
        <tr>
            <th>high_salary_employees</th>
        </tr>
        <tr>
            <td>5</td>
        </tr>
    </table>
    <h3>4. Count Distinct Values</h3>
    <pre>
SELECT COUNT(DISTINCT salary) AS unique_salaries FROM employees;
    </pre>
    <p><b>Description:</b> Counts distinct (unique) values in the <code>salary</code> column.</p>
    <table>
        <tr>
            <th>unique_salaries</th>
        </tr>
        <tr>
            <td>3</td>
        </tr>
    </table>
    <h2>Use Case Scenarios</h2>
    <ul>
        <li>Counting total records in a table.</li>
        <li>Counting specific data (e.g., employees earning above a certain amount).</li>
        <li>Identifying unique or distinct values in a column.</li>
    </ul>
</body>
</html>
