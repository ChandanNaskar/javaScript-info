/*
If else in JavaScript is a two-way conditional statement or double selection statement.
It tests a condition and executes one of two sets of code, depending on the result.

In other words, if else statement executes the first statement if the condition is true.
Otherwise, it executes the second statement if the condition is false.
It decides the execution path based on whether the condition is true or false.
*/

// [Syntax of If else statement in JavaScript :-]
/*
if(expression or condition)
{
    statement to be executed if the condition is true.
}
else {
    statement to be executed if the condition is false.
}
*/

/*
[Example :-]

let passMarks = 35;
if (passMarks >= 35) {
    document.write("Passed");
} else {
    document.write("Failed");
}
*/

// ## [Substitution of If-else statement with Conditional operator / Ternary Operator]
/*
A ternary operator can be used to replace an if..else statement in certain situations.

SYNTAX :-
condition ? expression1 : expression2
*/

/*
(Example: JavaScript Ternary / Conditional Operator :-)

// program to check pass or fail
let marks = prompt('Enter your marks :');
// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);

OR

let passMarks;
passMarks = prompt("Enter your number : ");
document.write(passMarks >= 35 ? "pass" : "fail");
*/

// [another example of using the if-else statement. This example will verify whether a number is even or odd.]
/*
let num;
num = prompt("Input the number :");
if (num % 2 == 0) {
    document.write(num+ " It's even number.");
} else {
    document.write(num+ " It's odd number");
}

(USING TERNARY OPERATOR -)

let num = prompt("Input the number: ");
document.write((num % 2 == 0) ? num+" even num" : num+" odd num" );
*/

// Some valid if else statements :-
/*
1. if(x > y)
        document.write(x+ " is greater than " +y);
    else
        document.write(y+ " is greater than " +x);

2. if((gender == 'M') || (gender == 'm'))
        document.write("You are a male");
    else
        document.write("You are a female");
*/

// JavaScript If else Example Program for Best Practice :-
/*
1. Let’s create a very simple program in which we will take marks of three subjects
and then calculate the total marks, percentage, and grade using if else statement.

let chem, phy, math;
chem = prompt("Input your Chemistry number: ");
let c = parseInt(chem);

phy = prompt("Input your Physics number :");
let p = parseInt(phy);

math = prompt("Input you Math umber: ");
let m = parseInt(math);

let total = c + p + m;
let per = total/3;

document.write("Total: " +total, "<br>");
document.write("Percentage: " +per, "<br>");

if (per >= 80) {
    document.write("Grade A");
} else {
    document.write("Grade B");
}
*/

/*
2. Let’s write JavaScript code to check whether a number is divisible with another number or not.

let num1 = prompt("Input the first number: ");
let f1 = parseInt(num1);

let num2 = prompt("Input the second number: ");
let s2 = parseInt(num2);

if (f1 % s2 == 0) {
    document.write(f1+ " divisible by " +s2)
} else {
    document.write(f1+ " not divisible by " +s2);
}

OR

let num1, num2;
num1 = prompt("Input the first number: ");
num2 = prompt("Input the second number: ");
if (num1 % num2 == 0) {
    document.write(num1+ " It's divisible by " +num2);
} else {
    document.write(num1+ " It's not divisible by " +num2);
}
*/

/*
3. Let’s write JavaScript code to take a number and check whether it is a Buzz number or not.
A number is a buzz number when it ends with 7 or is divisible by 7.

let num;
num = prompt("Input the number :");
if ((num % 10 == 0) || (num % 7 == 0)) {
    document.write(num+ " is a Buzz number.")
} else {
    document.write(num+ " is not a Buzz number");
}
*/

/* ----------------------------------->
    JavaScript if...else if statement
<--------------------------------------*/
/* SYNTAX :-

if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else {
    // code block 3
}

* If condition1 evaluates to true, the code block 1 is executed.
* If condition1 evaluates to false, then condition2 is evaluated.
        #. If the condition2 is true, the code block 2 is executed.
        #. If the condition2 is false, the code block 3 is executed.

// check if the number if positive, negative or zero
const num = prompt("Input the number: ");

// check if number is greater than 0
if (num > 0) {
    document.write(num+ " It's positive number.")
}

// check if number is 0
else if (num == 0) {
    document.write(num+ " It's zero number.")
}

// if number is neither greater than 0, nor zero
else {
    document.write(num+ " It's negative number.");
}
*/

/* ---------------------------------------->
        NESTED IF ELSE STATEMENT
<-----------------------------------------*/
/*
(You can also use an if...else statement inside of an if...else statement.
This is known as nested if...else statement.)

// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}

(Note: As you can see, nested if...else makes our logic complicated and we should
try to avoid using nested if...else whenever possible.)
*/

/* ----------------------------------------------->
            IF ELSE IF LADDER
<-------------------------------------------------*/
/* SYNTAX :-
if(condition-1)
    statement1; // It will execute if condition-1 is true.
else if(condition-2)
    statement2; // It will execute if condition-2 is true.
else if(condition-3)
    statement3;
...
...
else if(condition-n)
    statementn; // It will execute if condition-n is true.
else
    statement; // It will execute if none of the condition is true.
*/

/* (EXAMPLE :- )

let eng, science, maths;
eng = 80;
science = 90;
maths = 95;
let total = eng + science + maths;
let per = total/3;
document.write("Total marks: " +total, "<br>");
document.write("Percentage: " +per, "<br>")

if (per >= 90.0)
    document.write("Grade A");
else if (per >= 80.0)
    document.write("Grade B");
else if (per >= 70.0)
    document.write("Grade C");
else if (per >= 60.0)
    document.write("Grade D");
else
    document.write("Grade F");
*/

// [Body of if...else With Only One Statement]
/*
(If the body of if...else has only one statement, we can omit { } in our programs. For example, you can replace)

const number = 2;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative or zero.");
}

OR

const number = 2;
if (number > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative or zero.");

*/