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

    Lesson Overview

    1. Explain the 3 steps in the problem solving process.

        1. Plan/Understanding the Problem
           Know what the problem wants/needs.
           Don't Write The Code Yet

    2. Explain what a pseudocode is and be able to use it to solve problems.
        1. Before coding the problem, write the steps to solve the problem into words.

    3. Be able to break a problem down into subproblems.
        1. Identify the subproblems of the big problem.
        2. Solve the subproblems before solving the big problem.


Understanding Errors

    Lesson Overview

    1. Name at least 3 kinds of JavaScript errors.

        1.  ReferenceError - called when a variable is not intialized or declared in the current scope.

        2.  SyntaxError - called when code is not written grammatically correctly.

        3.  TypeError - an operand or argument passed to a function is incompatible with the type expected by that operator or function;
                        or when attempting to modify a value that cannot be changed;
                        or when attempting to use a value in an inappropriate way.

    2. Identify 2 parts of an error message that can help you find where the error originates.
        1. Stack
        2. Console log where the file is mentioned and the line

    3. Be able to understand how to research and solve errors.

    4. Errors VS Warnings 
        Errors will stop the program completely whereas Warnings will show the potential dangers that may crash the program at a certain point.
        Errors are Red
        Warnings are Yellow



DOM Manipulation And Events

    Lesson Overview
    1. DOM in relation to a webpage
        Document Object Model 
            - Tree-like representation of the contents of a webpage

    2. Difference between a 'Node' and an 'Element'
        - A Node represents an object that is part of the document structures. Nodes can be elements, attributes, text, or other types of objects within the document hierarchy.
        - A element is a specific type of node that represents an HTML element.

    3. Target Nodes using "Selectors"
        Element Selector: This targets all elements of a specific tag name. For example, to target all <p> elements, you would use the selector p.

        Class Selector: This targets elements with a specific CSS class. To target elements with a class name "example", you would use the selector .example.

        ID Selector: This targets a specific element with a unique ID. To target an element with an ID of "myElement", you would use the selector #myElement.

        Attribute Selector: This targets elements that have a specific attribute or attribute value. For example, to target all <a> elements with a target attribute, you would use the selector a[target]. To target elements with a specific attribute value, you can use the attribute value within square brackets. For instance, to target all <a> elements with a href attribute starting with "https://", you would use the selector a[href^="https://"].

        Pseudo-class Selector: This targets elements based on a specific state or condition. For example, you can target the first child of an element using the selector :first-child. Similarly, :hover targets an element when the mouse cursor is over it.

        Combined Selectors: You can combine different selectors to target elements more precisely. For example, to target all <a> elements with the class "example", you would use the selector a.example.
    4. Basic methods for finding/adding/removing and altering DOM Nodes

        Finding DOM Nodes:

        getElementById(id): Returns the element with the specified ID.
        querySelector(selector): Returns the first element that matches the specified CSS selector.
        querySelectorAll(selector): Returns a NodeList containing all elements that match the specified CSS selector.
        Adding DOM Nodes:

        createElement(tagName): Creates a new element with the specified tag name.
        createTextNode(text): Creates a new text node with the specified text content.
        appendChild(node): Appends a node as the last child of a parent node.
        insertBefore(newNode, referenceNode): Inserts a new node before a specified reference node.
        Removing DOM Nodes:

        removeChild(node): Removes a specified child node from its parent.
        parentNode.removeChild(node): Removes a specified node by accessing its parent node.
        Altering DOM Nodes:

        setAttribute(name, value): Sets the value of the specified attribute on an element.
        getAttribute(name): Returns the value of the specified attribute on an element.
        innerHTML: Property that allows you to get or set the HTML content of an element.
        textContent: Property that allows you to get or set the text content of an element.

    5. Difference between a 'Nodelist' and an 'Array Of Nodes'.
        In summary, a NodeList is a collection of DOM nodes returned by certain methods and is typically live, automatically updating when the document changes. It has limited methods and properties compared to an Array. On the other hand, an Array of nodes is a standard JavaScript array that contains DOM nodes as its elements, with access to a wider range of methods and properties for array manipulation and traversal.


    6. 'Bubbling' and how it works.
        Event Bubbling is allows for Parent Elements to be aware of what is happening to their child elements.
        When a child element is triggered, it alerts the closest parent element in the DOM Heirarchy.


Started on JavaScript Projects 30

Fundamentals Part 5

    Objects

    1. Used to store keyed collections of various data and more complex entities.
    2. Consists of a Key:Value pair. Key is a string, Value can be any type.

    Example: Creating an Object

        let user = new Object();
        let user = {};

    Objects can be created using either of the 2 syntaxes above.


    Example: Placing Properties into the Object

        let user = 
        { 
            name: "John",
            age : 20
        };

    Every property has a Key before the colon :, and a value on the right of it.