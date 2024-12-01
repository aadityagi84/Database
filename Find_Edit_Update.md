<h1>
  To find some condtion data
</h1>
<code>SELECT * FROM `employees` WHERE  dept='loan'; </code>
<h2> To selected theier specic clumns and expected data </h2>
<code>SELECT empid,name from employess  Where empid="101";</code>
<h1>
  Upadte table
</h1>
<code>
  UPDATE employees
SET desig = "manager", dept = "HR"
WHERE epmid = 1;
</code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySQL DELETE Query</title>
   
</head>
<body>
    <h1>MySQL DELETE Query</h1>
    <p>The <strong>DELETE</strong> statement in MySQL is used to remove records from a table. Below are details, examples, and best practices.</p>
    <div class="section">
        <h2>Syntax</h2>
        <pre><code>DELETE FROM table_name
WHERE condition;</code></pre>
        <ul>
            <li><strong>table_name</strong>: The name of the table from which you want to delete records.</li>
            <li><strong>WHERE</strong>: Specifies which rows should be deleted. If omitted, all rows in the table will be deleted.</li>
        </ul>
    </div>
    <div class="section">
        <h2>Examples</h2>
        <h3>1. Deleting a Single Row</h3>
        <p>To delete an employee with <code>epmid = 1</code>:</p>
        <pre><code>DELETE FROM employees
WHERE epmid = 1;</code></pre>
        <h3>2. Deleting Multiple Rows</h3>
        <p>To delete all employees in the <code>Finance</code> department:</p>
        <pre><code>DELETE FROM employees
WHERE dept = "Finance";</code></pre>
        <h3>3. Deleting All Rows</h3>
        <p>To delete all rows in the table without dropping its structure:</p>
        <pre><code>DELETE FROM employees;</code></pre>
        <h3>4. Delete with Limit</h3>
        <p>To delete only one row (e.g., the first match in the condition):</p>
        <pre><code>DELETE FROM employees
WHERE desig = "teacher"
LIMIT 1;</code></pre>
    </div>
    <div class="section">
        <h2>Best Practices</h2>
        <ul>
            <li><strong>Always Use WHERE Clause:</strong> Target specific rows unless you want to delete all rows.</li>
            <li><strong>Test with SELECT First:</strong> Run a <code>SELECT</code> query with the same <code>WHERE</code> condition to confirm which rows will be deleted.</li>
            <li><strong>Backup Data:</strong> If the data is critical, take a backup before running <code>DELETE</code> queries.</li>
            <li><strong>Be Cautious with LIMIT:</strong> Ensure it matches your intention as it may delete rows arbitrarily depending on the table's current state.</li>
        </ul>
    </div>
    <div class="section">
        <h2>Example Queries Recap</h2>
        <pre><code>-- Delete a single row
DELETE FROM employees WHERE epmid = 2;

-- Delete multiple rows
DELETE FROM employees WHERE dept = "HR";

-- Delete all rows
DELETE FROM employees;

-- Delete with a limit
DELETE FROM employees WHERE desig = "teacher" LIMIT 1;</code></pre>
    </div>
</body>
</html>
