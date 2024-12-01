<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>MySQL String Functions and Operators</h1>
    <section>
        <h2>1. String Functions</h2>
        <div class="example">
            <h3>CONCAT()</h3>
            <p>Concatenates two or more strings together.</p>
            <pre><code>SELECT CONCAT('Hello', ' ', 'World');</code></pre>
            <p>Output: <strong>'Hello World'</strong></p>
        </div>
        <div class="example">
            <h3>LENGTH()</h3>
            <p>Returns the length of a string in bytes.</p>
            <pre><code>SELECT LENGTH('Hello');</code></pre>
            <p>Output: <strong>5</strong></p>
        </div>
        <div class="example">
            <h3>CHAR_LENGTH()</h3>
            <p>Returns the number of characters in a string (useful for multi-byte characters).</p>
            <pre><code>SELECT CHAR_LENGTH('Hello');</code></pre>
            <p>Output: <strong>5</strong></p>
        </div>
        <div class="example">
            <h3>SUBSTRING()</h3>
            <p>Extracts a substring from a string starting from a given position.</p>
            <pre><code>SELECT SUBSTRING('Hello World', 1, 5);</code></pre>
            <p>Output: <strong>'Hello'</strong></p>
        </div>
        <div class="example">
            <h3>UPPER()</h3>
            <p>Converts a string to uppercase.</p>
            <pre><code>SELECT UPPER('hello');</code></pre>
            <p>Output: <strong>'HELLO'</strong></p>
        </div>
        <div class="example">
            <h3>LOWER()</h3>
            <p>Converts a string to lowercase.</p>
            <pre><code>SELECT LOWER('HELLO');</code></pre>
            <p>Output: <strong>'hello'</strong></p>
        </div>
        <div class="example">
            <h3>TRIM()</h3>
            <p>Removes leading and trailing spaces from a string.</p>
            <pre><code>SELECT TRIM('   Hello World   ');</code></pre>
            <p>Output: <strong>'Hello World'</strong></p>
        </div>
        <div class="example">
            <h3>REPLACE()</h3>
            <p>Replaces occurrences of a substring within a string.</p>
            <pre><code>SELECT REPLACE('Hello World', 'World', 'MySQL');</code></pre>
            <p>Output: <strong>'Hello MySQL'</strong></p>
        </div>
        <div class="example">
            <h3>INSTR()</h3>
            <p>Returns the position of the first occurrence of a substring within a string (1-based index).</p>
            <pre><code>SELECT INSTR('Hello World', 'World');</code></pre>
            <p>Output: <strong>7</strong></p>
        </div>
        <div class="example">
            <h3>LEFT()</h3>
            <p>Extracts the leftmost n characters from a string.</p>
            <pre><code>SELECT LEFT('Hello World', 5);</code></pre>
            <p>Output: <strong>'Hello'</strong></p>
        </div>
        <div class="example">
            <h3>RIGHT()</h3>
            <p>Extracts the rightmost n characters from a string.</p>
            <pre><code>SELECT RIGHT('Hello World', 5);</code></pre>
            <p>Output: <strong>'World'</strong></p>
        </div>
        <div class="example">
            <h3>CONCAT_WS()</h3>
            <p>Concatenates strings with a separator between them.</p>
            <pre><code>SELECT CONCAT_WS('-', '2024', '12', '01');</code></pre>
            <p>Output: <strong>'2024-12-01'</strong></p>
        </div>
        <div class="example">
            <h3>REVERSE()</h3>
            <p>Reverses the characters in a string.</p>
            <pre><code>SELECT REVERSE('Hello');</code></pre>
            <p>Output: <strong>'olleH'</strong></p>
        </div>
        <div class="example">
            <h3>FORMAT()</h3>
            <p>Formats a string as per the specified format.</p>
            <pre><code>SELECT FORMAT(1234567.89, 2);</code></pre>
            <p>Output: <strong>'1,234,567.89'</strong></p>
        </div>
        <div class="example">
            <h3>FIND_IN_SET()</h3>
            <p>Returns the index of the first argument within a comma-separated list (useful with enumerations).</p>
            <pre><code>SELECT FIND_IN_SET('apple', 'banana,apple,orange');</code></pre>
            <p>Output: <strong>2</strong></p>
        </div>
    </section>
    <section>
        <h2>2. String Operators</h2>
        <div class="example">
            <h3>= (Equality)</h3>
            <p>Used to compare if two strings are equal.</p>
            <pre><code>SELECT 'Hello' = 'hello';</code></pre>
            <p>Output: <strong>0</strong> (false)</p>
        </div>

        <div class="example">
            <h3>LIKE</h3>
            <p>Used for pattern matching in strings (supports `%` for any number of characters, `_` for a single character).</p>
            <pre><code>SELECT 'Hello World' LIKE 'Hello%';</code></pre>
            <p>Output: <strong>1</strong> (true)</p>
        </div>
        <div class="example">
            <h3>NOT LIKE</h3>
            <p>Used to exclude a pattern from matching.</p>
            <pre><code>SELECT 'Hello World' NOT LIKE 'Hi%';</code></pre>
            <p>Output: <strong>1</strong> (true)</p>
        </div>
        <div class="example">
            <h3>REGEXP</h3>
            <p>Matches a string against a regular expression.</p>
            <pre><code>SELECT 'Hello123' REGEXP '^[A-Za-z]+$';</code></pre>
            <p>Output: <strong>0</strong> (false, because it contains digits)</p>
        </div>
        <div class="example">
            <h3>NOT REGEXP</h3>
            <p>Used to exclude strings that match a regular expression.</p>
            <pre><code>SELECT 'Hello123' NOT REGEXP '^[A-Za-z]+$';</code></pre>
            <p>Output: <strong>1</strong> (true, because it contains digits)</p>
        </div>
        <div class="example">
            <h3>&lt;, &gt;, &lt;=, &gt;= (Comparison operators)</h3>
            <p>Compares strings lexicographically.</p>
            <pre><code>SELECT 'apple' < 'banana';</code></pre>
            <p>Output: <strong>1</strong> (true)</p>
        </div>
        <div class="example">
            <h3>CONCAT() operator</h3>
            <p>For concatenation of two or more strings.</p>
            <pre><code>SELECT CONCAT('Hello', ' ', 'World');</code></pre>
            <p>Output: <strong>'Hello World'</strong></p>
        </div>
    </section>
</body>
</html>
