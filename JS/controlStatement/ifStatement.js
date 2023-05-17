/*
An if statement in JavaScript is the simplest decision-making statement
that allows to specify an alternative path of execution in a program.
It is used to change the flow of execution in the program.

This statement executes a block of statements when the condition is true,
and skips them if the condition is false.

If statement is also called conditional control statement or single selection statement in JavaScript
because it selects or ignores a single action or a single group of actions.
*/

// Syntax of if Statement :-

/*
if(Test condition)
{
    JavaScript statement(s) to be executed if condition is true.
}

a) The condition consists of a boolean expression that returns a boolean value,
either true or false.

b) The test condition contains any relational comparison consisted of relational operators
and must be enclosed within parentheses.

c) If the test condition is true, the statement executes. If the test condition is false,
the statement skips or bypass.

d) If the block of if statement (also called body of if statement) contains more than one statement,
must enclose these statements within a pair of braces ({ }).
*/

// ( #1. Program code :- )
/*
let radius, pi, area;
radius = 2;
pi = 3.14;
if (radius>=0) {
    area = radius * radius * pi;
    document.write("Area of circle: " +area);
}

( if the condition in the if statement evaluates true, statements inside the block of if statement will execute.
Otherwise, statements inside block will not execute if the condition evaluates false. )
*/

// ( Some Valid if statements in JavaScript :- )
/*
1. let x = 1;
    if(x > 0)
        document.write(x+ " is a positive number");

2. let x = 1;
    if(x) // same as: if(x != 0)
    document.write(x+ " is a nonzero number");

3. let x = 10, y = 10;
    if(x == y)
        document.write("x and y are equal number");

4. let x = 5, y = 10;
    if(x < y) {
        document.write("x is less than y");
    }
5. let x = true;
    if(x) // Here, we have used a boolean value to check whether the condition is true or not.
        document.write("You are eligible for voting");
*/

// ( Types of Selection Statements in JavaScript :- )
/*
    1. One way if statements
    2. Two-way if-else statements
    3. Nested if statements
    4. Multi-way if-else statements
    5. Switch statements
    6. Conditional expressions
*/

// ( Example Program based on If Statement in JavaScript :- )
/*
1. Let’s create a JavaScript program in which we will prompt marks for three subjects, such as math,
chemistry, and physics from the user.

Then we will calculate the percentage of three subject marks and display “Grade A”
if the percentage is greater than or equal to 85. Look at the script code to understand better.

let phy, chem, math;
// Prompt the user to enter marks of three subjects.
let phy, chem, math;
phy = prompt("Enter your physics marks: ");
let p = parseInt(phy);
chem = prompt("Enter your chemistry marks: ");
let c = parseInt(chem);
math = prompt("Enter your math number: ");
let m = parseInt(math);

let totalMarks = p+c+m;
let myPer = totalMarks/3;
document.write("Total marks of obtained: " +totalMarks, "<br>");
document.write("Your percentage: " +myPer, "<br>");
if (myPer>=85.0) {
    document.write("Grade A");
}
*/

/*
2. Let’s create a JavaScript program for a web application to prompt the user to enter a number.
If the number is divisible by 2, the program displays a message “number is divisible by 2”.

// Prompt the user to a number.
let num = prompt("Enter a number: ");
if (num % 2 == 0) {
    document.write(num+ " is divisible by 2.");
}
if (num % 2 != 0) {
    document.write(num+ " is not divisible by 2.");
}
*/

/*
3. Let’s write a JavaScript code in which we will display a “Good morning”
greeting if the time on the browser is less than 12. If the time on the browser is greater than 12,
it will display “Have a nice day!” on the browser.

var date = new Date();
var time = date.getHours();
if (time < 12) {
    document.write("<b>Good Morning</b>","<br>");
}
if (time > 12) {
    document.write("<b>Have a nice day!</b>")
}
*/
var date = new Date();
var time = date.getHours();
if (time < 12) {
    document.write("<b>Good Morning</b>","<br>");
}
if (time > 12) {
    document.write("<b>Have a nice day!</b>")
}