# OdinProject-JavaScript


Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

    1. Name the eight data types in JavaScript.
        String
        Number
        Bigint
        Boolean
        Undefined
        Null
        Symbol
        Object

    2. Understand the difference between single, double, and backtick quotes.

        Single quote box (''): This box is the simplest one. You can put any words you want inside it, like "hello" or "apple".

        Double quote box (""): This box is just like the single quote box, but it looks a little different. You can put words inside it too, like "world" or "banana".

        Backtick box (``): This box is special. It can do more things! You can put lots of words inside it, and even make them go on different lines. It's like having a big box to hold a long story. The backtick box also lets you do a trick called "interpolation." It means you can put something inside the box that will change. For example, if you have a box with the word "My name is ${name}", and you put your name in there, it will say "My name is [your name]". It's like a box that can talk and fill in the missing parts!

        Embed a variable/expression in a string.
        let name = "Angelo";
        let greeting = 'My name is ${name}';


    3. Understand what a method is.
        A method is a preset defined list of instructions that a certain object already knows what to do with. example objects of type string have toUpperCase() method.


    4. Name the three logical operators.
        && 
        ||
        !

    5. Understand what the comparison operators are.
        ==
        !=
        ===
        !==


    6. Understand what conditionals are.
        If else statements. If this happens do that, else do something else

    7. Understand what nesting is.
        Having something inside that something.
        You have 1 for loop, and within that for loop, you have another for loop.


    8. Understand what truthy and falsy values are.

        Falsy values are those that are "empty" or "not valuable" such as 
        false
        0
        ""
        null
        undefined
        NaN

        Truthy is all those that are not Falsy



JavaScript Developer Tools 
    1. CSS
        1. View and Change CSS - Completed
            Use of DOM Tree in Inspect, adding of classes, changing css styles, usage of :hov, .cls and sidebar, able to change padding of element using the image 
        2. CSS Features References

    2. Viewing and Changing The DOM
        Uses the inspect tool to allow changes to a website's property such as its style and classes.


    3. Mobile Simulation
        Open Inspect, Click the Mobile Button beside the Inspect Figure. 
        Able to change the dimensions based on what phone you want to see the app on.
        Allows you to see the app in various viewport modes.

    4. JavaScript
        1. Debug
            Open Inspect, Go To Sources To See JavaScript Code
        2. Pause Code With BreakPoints
            Same as C++, code will stop running at the breakpoint

Fundamentals Part 3

    Lesson Overview

    1. How to Define And Invoke Different Kinds Of Functions
        Functions that are part of a object, are called methods.
        Anything with () is a function.
        Custom functions are those that are defined in the code, not in the browser.

        To invoke the function, means to call the function's name somewhere else in the code followed by ()

        There are functions that require parameters whereas there are functions that have optional parameters or have default parameters.

        Anonymous functions exists, they are functions without a name.
        Example:
            (function () {
                alert("hello");
            });

        Arrow Functions can be used 
        Example:
            textBox.addEventListener("keydown", (event) => {
            console.log(`You pressed "${event.key}".`);
            });

        Brackets are not needed if function only takes 1 parameter 
        Example:
            textBox.addEventListener("keydown", event => {
            console.log(`You pressed "${event.key}".`);
            });


    2. How To Use The Return Value
        Refers to the value returned by the function once it completes its process.

        To use the return value, use the return keyword in the function.


    3. What Function Scope Is.
        Lifetime of how long a variable/value/function exists.


    Assignment

        1. Write a function called add7 that takes one number and returns that number + 7.
        My Answer:
            function add7 (num) {
                return num + 7;
            }
            console.log(add7(100)); // returns 107

        
        2. Write a function called multiply that takes 2 numbers and returns their product.
            function multiply (num1, num2)
            {
                return num1 * num2;
            }
            console.log(multiply(7,7)); // returns 49

        3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
            function capitalize(str) {
            if (typeof str !== 'string' || str.length === 0) {
                return str; // Return the input as it is if it's not a string or an empty string
            }
            
            const firstLetter = str.charAt(0).toUpperCase(); // Get the first letter and convert it to uppercase
            const restOfString = str.slice(1).toLowerCase(); // Get the rest of the string and convert it to lowercase
            
            return firstLetter + restOfString; // Concatenate the first letter and the rest of the string
            }

        4. Write a function called lastLetter that takes a string and returns the very last letter of that string: 
            lastLetter("abcd") should return "d"

            function lastLetter(str) {
            if (typeof str !== 'string' || str.length === 0) {
                return null; // Return null if the input is not a string or an empty string
            }
            
            return str.charAt(str.length - 1); // Get the last character of the string
            }

Problem Solving 
