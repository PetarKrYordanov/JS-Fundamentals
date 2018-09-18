## 1.Lab: Control Flow Logic

Problems for in-class lab for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/288/](https://judge.softuni.bg/Contests/288/).

1. 1.Multiply Numbers

Write a JS function that calculates the product of two numbers.

The **input** comes as two number arguments.

The **output** should be the returned as a result of your function.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| 32 | 6 |   | 23632.36-12.3249 | -291266.473764 |

1. 2.Boxes and Bottles

Write a JS function to calculate how many boxes will be needed to fit **n** bottles if each box fits **k** bottles.

The **input** comes as two number arguments. The first element is the number of bottles and the second is the capacity of a single box.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 205 | 4 |   | 157 | 3 | 510 | 1 |

1. 3.Leap Year

Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.

The **input** comes as a single number argument.

The **output** should be printed to the console. Print **yes** if the year is leap and **no** otherwise.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1999 | no |   | 2000 | yes | 1900 | no |

1. 4.Circle Area

Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.

The **input** comes as a single number argument.

The **output** should be printed to the console on a new line for each result.

### Examples

| **Input** | **Output** |
| --- | --- |
| 5 | 78.5398163397448378.54 |

1. 5.Triangle Area

Write a JS function that calculates a triangle&#39;s area by its 3 sides.

The **input** comes as three number arguments, representing one side of a triangle.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |
| --- | --- |
| 23.54 | 3.4994419198 |

### Hints

Use [Heron&#39;s formula](https://en.wikipedia.org/wiki/Heron%27s_formula) to obtain the result.

1. 6.Cone

Write a JS function to calculate a cone&#39;s volume and surface area by given height and radius at the base.

The **input** comes as two number arguments. The first element is the cone&#39;s **radius** and the second is its **height**.

The **output** should be printed to the console on a new line for every result.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| 35 | volume = 47.1239area = 83.2298 |   | 3.37.8 | volume = 88.9511area = 122.016 |

### Hints

You can use this online tool to check your results: [http://www.calculatorsoup.com/calculators/geometry-solids/cone.php](http://www.calculatorsoup.com/calculators/geometry-solids/cone.php)

1. 7.Odd / Even

Write a JS function to check if a number is **odd** or **even** or **invalid** (fractions are neither odd nor even).

The **input** comes as a single number argument.

The **output** should be printed to the console. Print **odd** for odd numbers, **even** for even number and **invalid** for numbers that contain decimal fractions.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | odd |   | 8 | even | 1.5 | invalid |

1. 8.Fruit or Vegetable

Write a JS function to print &quot; **fruit**&quot;, &quot; **vegetable**&quot; or &quot; **unknown**&quot; depending on the input string.

- Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
- Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
- All others are unknown

The **input** comes as a single string argument, the name of the fruit.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| banana | fruit |   | cucumber | vegetable | pizza | unknown |

1. 9.Colorful Numbers

Write a JS function to print the numbers from 1 to **n**. Return a string holding HTML list with the odd lines in blue and even lines in green. See the example for more information.

The **input** comes as a single number argument **n**.

The **output** should be returned as a result of your function in the form of a string.

### Examples

| **Input** | **Output** |
| --- | --- |
| 10 | \&lt;ul\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:green&#39;\&gt;1\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:blue&#39;\&gt;2\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:green&#39;\&gt;3\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:blue&#39;\&gt;4\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:green&#39;\&gt;5\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:blue&#39;\&gt;6\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:green&#39;\&gt;7\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:blue&#39;\&gt;8\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:green&#39;\&gt;9\&lt;/span\&gt;\&lt;/li\&gt;  \&lt;li\&gt;\&lt;span style=&#39;color:blue&#39;\&gt;10\&lt;/span\&gt;\&lt;/li\&gt;\&lt;/ul\&gt; |

1. 10.Chess Board

Write a JS function to print a chessboard of size **n X n**. See the example for more information.

The **input** comes as a single number argument **n**.

The **output** should be returned as a result of your function in the form of a string.

### Examples

| **Input** | **Output** |
| --- | --- |
| 3 | \&lt;div class=&quot;chessboard&quot;\&gt;  \&lt;div\&gt;    \&lt;span class=&quot;black&quot;\&gt;\&lt;/span\&gt;    \&lt;span class=&quot;white&quot;\&gt;\&lt;/span\&gt;    \&lt;span class=&quot;black&quot;\&gt;\&lt;/span\&gt;  \&lt;/div\&gt;  \&lt;div\&gt;    \&lt;span class=&quot;white&quot;\&gt;\&lt;/span\&gt;    \&lt;span class=&quot;black&quot;\&gt;\&lt;/span\&gt;    \&lt;span class=&quot;white&quot;\&gt;\&lt;/span\&gt;  \&lt;/div\&gt;  \&lt;div\&gt;    \&lt;span class=&quot;black&quot;\&gt;\&lt;/span\&gt;    \&lt;span class=&quot;white&quot;\&gt;\&lt;/span\&gt;    \&lt;span class=&quot;black&quot;\&gt;\&lt;/span\&gt;  \&lt;/div\&gt;\&lt;/div\&gt; |

1. 11.Binary Logarithm

Write a JS function that prints the **binary logarithm**  ( **log**

# 2
** x** ) for each number in the input.

The **input** comes as an array of number elements.

The **output** should be printed to the console, on a new line for each number.

1. 12.Prime Number Checker

Write a JS function to check if a number is prime (only wholly divisible by itself and one).

The **input** comes as a single number argument.

The **output** should be the return value of your function. Return **true** for prime number and **false** otherwise.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | true |   | 8 | false | 81 | false |