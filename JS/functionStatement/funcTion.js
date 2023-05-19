/* ###########################
        ( INTRODUCTION )
############################## */
/*
* A function in JavaScript is a block of code that contains a group of instructions to perform a particular task.
* In other words, a function groups a number of program statements in a single unit to perform a particular task.
* For example, write() is an in-built JavaScript function that is used to print a statement.
* A function does not execute until it is called. That is, a function will execute when “someone” invokes it.
* When a function gets called, the code inside the function executes.
We can call a function from other parts of the program when needed.
*/


/*---------------------------------------->
When to Use Function in JavaScript?
<------------------------------------------
/*
A function makes the code reusable multiple times to perform several tasks in a program.
It eliminates the need to write the same piece of code again and again in the entire program.
It saves the programmer time for writing a lot of repetitive code.

a function can be useful when we need repeatedly to perform a calculation or action throughout a program.
We can define the function to write messages to the user,
calculate the total tax on an order, or estimate the shipping date for an item.

Another use of JavaScript functions is to link actions on a web page with JavaScript code.
For example, button presses, mouse clicks, text selection,
and other user actions can invoke functions by including suitable tags in HTML source for the page.

With the help of functions, we can break a huge program into several small and manageable functions
which eventually reduces the redundancy.
*/


/*#############################
        ( SYNTAX )
###############################*/
/*

Function nameOfFunction(parameters-list)
{
// Lines of code to be executed to perform a specific task.
}

Example :-
function sayHello() {
        document.write("hello!");
}
(the function name is sayHello. The parameter list is empty that tells the function is not receiving any argument value.)
Note: JavaScript is a case sensitive. You must write function keyword in lowercase letters.
*/


/*###################################
        ( TYPES OF FUNCTION )
#####################################*/
/*

        1. Predefined functions
        2. User-defined functions

*/


/*####################################
        ( DECLARING FUNCTION )
######################################*/
/*

function nameOfFunction () {
    // function body
}

        * A function is declared using the function keyword.

        * The basic rules of naming a function are similar to naming a variable.
        It is better to write a descriptive name for your function.
        For example, if a function is used to add two numbers, you could name the function add or addNumbers.

        * The body of function is written within {}.

For example :-
// declaring a function named greet()
function greet() {
        console.log("Hello there");
}

*/


/*####################################
        ( CALLING FUNCTION )
######################################*/
/*
        * In the above program, we have declared a function named greet(). To use that function, we need to call it.
        * Here's how you can call the above greet() function.

// function call
greet();

                        function greet() { <------
                                // code          |
                --------}                        |
                |        greet(); -----------------
                |------>// code
*/


/*------------------------------->
Example 1: Display a Text
<-------------------------------*/
/*
// program to print a text
// declaring a function
function greet() {
        console.log("Hello there!");
}

// calling the function
greet();

: OUTPUT :
Hello there!
*/


/*####################################
        ( FUNCTION PARAMETERS )
######################################*/
/*
A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.

                                function greet(name) {
                                        // code  |
                                }                |
                                        ---------
                                        |
                                greet(name);
*/


/*------------------------------------------>
Example 2: Function with Parameters
<------------------------------------------*/
/*
// program to print the text
// declaring a function
function greet(name) {
        console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

: OUTPUT :
Enter a name: Chandan
Hello Chandan :)

(In the above program, the greet function is declared with a name parameter. The user is prompted to enter a name.
Then when the function is called, an argument is passed into the function.)

Note: When a value is passed when declaring a function, it is called parameter.
And when the function is called, the value passed is called argument.
*/


/*---------------------------------->
Example 3: Add Two Numbers
<----------------------------------*/
/*
// program to add two numbers using a function
// declaring a function
function add(a, b) {
        console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);

: OUTPUT :
7
11

( In the above program, the add function is used to find the sum of two numbers.

* The function is declared with two parameters a and b.
* The function is called using its name and passing two arguments 3 and 4 in one and 2 and 9 in another.

Notice that you can call a function as many times as you want.
You can write one function and then call it multiple times with different arguments. )
*/


/*####################################
        ( FUNCTION RETURN )
######################################*/
/*
        * The return statement can be used to return the value to a function call.

        * The return statement denotes that the function has ended. Any code after return is not executed.

        * If nothing is returned, the function returns an undefined value.


                                function add(num1, num2) { <-------
                                        // code                   |
                                        return result;            | function
                                }       _________/                | call
                                        |                         |
                                let x = add(a, b);  ---------------
                                // code
*/


/*---------------------------------->
Example 3: Sum of Two Numbers
<----------------------------------*/
/*
// program to add two numbers
// declaring a function
function add(a, b) {
        return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);

: OUTPUT :
Enter first number: 3.4
Enter second number: 4
The sum is 7.4

(In the above program, the sum of the numbers is returned by the function using the return statement.
And that value is stored in the result variable.)
*/


/*####################################
        ( FUNCTION EXPRESSION )
######################################*/
/*
// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);

: OUTPUT :
16
9

(In the above program, variable x is used to store the function. Here the function is treated as an expression.
And the function is called using the variable name.)

(The function above is called an anonymous function.)
*/


/*########################################################
        ( CALLING FUNCTION FORM OTHER FUNCTION )
########################################################*/
/*
We can call a function from another function. It is useful if for example,
a specific function contains too many lines of code and may be difficult to read.

So, we can break too many lines of code into separate smaller functions and
then call them from one main function. From it would make easier to read.

// Function 1.
function runFirst() {
        document.write("function 1", "<br>");
}

// Function 2.
function runSecond() {
        document.write("function 2", "<br>");
}

// Function 3.
function runThird() {
        document.write("function 3");
}

// Calling functions inside from function.
        function main() {
        runFirst();
        runSecond();
        runThird();
}

main();

: OUTPUT :
        function 1
        function 2
        function 3

(In this program, when you will click on button, it will call main() function.
The main() function will automatically execute other functions one right after other.
It is also a lot easier instead of calling each function independently one by one,
assuming that they need to execute all functions at once.)
*/


/*
[ ~FUNCTION PROGRAM~ ]

// Variable declaration.
let x = 20;
let y = 30;

// Function 1.
function addition() {
        let sum = x + y;
        document.write("Sum = " +sum, "<br>");
}

// Function 2.
function subtraction() {
        let sub = x - y;
        document.write("Sub = " +sub, "<br>");
}

// Function 3.
function multiplication() {
        let multiply = x * y;
        document.write("Multiply = " + multiply, "<br>");
}

// Function 4.
function division() {
        let div = x / y;
        document.write("Div = " +div);
}

// Calling functions inside from function.
function main() {
        addition();
        subtraction();
        multiplication();
        division();
}

main(); // calling function.

: OUTPUT :
        Sum = 50
        Sub = -10
        Multiply = 600
        Div = 0.666666
*/


/*################################################
        ( SELF INVOKING FUNCTION )
#################################################*/
/*
We can also make a function expression “self-invoking or self executing”.
We can do it by enclosing entire function within { } parentheses and
adding the ( ) parentheses operator at the end of the expression.

It means that function expression will automatically execute one time when the browser first loads the script

(function() {
// code to be executed.
})();

(function() {
        document.write("Hello! I invoked myself");
})();

: OUTPUT :
Hello! I invoked myself
*/
