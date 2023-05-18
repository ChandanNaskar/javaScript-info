/*
A switch statement in JavaScript is a multi-way decision statement that executes one statement from multiple conditions.
*/

/* SYNTAX :-

switch(expression)
{
    case value-1:
        // statement sequence
        break;
    case value-2:
      // statement sequence
        break;
    .
    .
    .
    case value-n:
       // statement sequence
        break;
    default:
        // default statement sequence
}
statement-x;

a) In the above switch syntax, an expression must be of integer, string, boolean, or character type.
The expression must be type compatible with each of the values specified in the case statements.
Duplicate case values have not permitted.

b) value-1, value-2, value-3, … are constants or literals.
These constants have called case labels (or case clauses).

c) A switch can have multiple case clauses depending on requirements and must be unique within a switch statement.
The case labels must end with a colon (:).

d) The statement sequence is a list of statements and may contain zero or more statements.

e) After each case, a break statement is necessary inside the switch block to come out from the switch block.
Break statement terminates the loop.

f) The default statement is optional and execute when none of the previous cases matched.
In other words, the default clause handles the case when no match of any case in the switch statement found.
*/

/*
switch(variable/expression) {
    case value1:
        // body of case 1
        break;

    case value2:
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}

The switch statement evaluates a variable/expression inside parentheses ().

    1. If the result of the expression is equal to value1, its body is executed.
    2. If the result of the expression is equal to value2, its body is executed.
    3. This process goes on. If there is no matching case, the default body executes.

Notes:

    1. The break statement is optional. If the break statement is encountered, the switch statement ends.
    2. If the break statement is not used, the cases after the matching case are also executed.
    3. The default clause is also optional.
*/

/* [Example 1: Simple Program Using switch Statement -]
// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
*/

/* (NOT WORKING : because user input string and case is number)
let num = prompt("Input the number between 1 to 3 ");
switch (num) {
    case 1:
        num = "one";
        document.write(num);
        break;

    case 2:
        num = "two";
        document.write(num);
        break;

    case 3:
        num = "Three";
        document.write(num);
        break;

    default:
        num = "elder than 3 or negative number.";
        document.write(num);
        break;
}
*/

/* [Example 2: Type Checking in switch Statement ]
// program using switch statement
let a = 1;

let a = 1;
switch (a) {
    case "1":
        a = 1
        document.write(a);
        break;

    case 1:
        a = 'one'
        document.write(a);
        break;

    case 2:
        a = 'two'
        document.write(a);
        break;

    default:
        a = 'not found'
        document.write(a);
        break;
}

OUTPUT -
The value is one.

    1. In JavaScript, the switch statement checks the value strictly.
        So the expression's result does not match with case "1".

    1. Then the switch statement goes to the second case.
        Here, the expressions's result matches with case 1. So The value is one is displayed.

    1. The break statement terminates the block and control flow of the program jumps to outside of the switch block.

Note:-
In JavaScript, the switch statement checks the cases strictly (should be of the same data type)
with the expression's result. Notice in the above example, 1 does not match with "1".
*/

/* [Example 3: Simple Calculator ]

*/

/* [Example 4: ]
Consider another example program in which we will take numeric case values inside the switch block.
We will prompt the user to enter a number between 1 and 5.

// Variable hold a numeric value.
let num = parseInt(prompt("Enter a number between 1 to 5: "));
switch (num) {
    case 1:
        document.write("One");
        break;

    case 2:
        document.write("Two");
        break;

    case 3:
        document.write("Three");
        break;

    case 4:
        document.write("Four");
        break;

    case 5:
        document.write("Five");
        break;

    default:
        document.write("Invalid Input");
        break;
}
*/

/* [Example 5: ]
Let’s consider another example program in which we will pass a string value in the switch statement.
In this case, the case labels must be string literal.

// Variable hold a string value.
let gameLevel = prompt("Input your gameLevel :");
let level = 0;

// Passing string value in switch statement.
switch (gameLevel) {
// Using string literal in switch cases.
    case "Beginner": level = 1
        break;

    case "Intermediate": level = 2;
        break;

    case "Expert": level = 3;
        break;

    default: level = 0;
        break;
}
document.write("Your game level is : " +level);
*/

/* [Example 6: Simple Calculator ]
// program for a simple calculator
let result;
// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');
// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}

// program for a simple calculator
let result;
// take the operator input
const operator = prompt("Enter operator ( either +, -, * or /): ");
// take the operand input
const num1 = parseFloat(prompt("Input first number: "));
const num2 = parseFloat(prompt("Input second number: "));

switch (operator) {
    case '+':
        result = num1 + num2;
        document.write(num1+" + " +num2+ " = " +result);
        break;

    case '-':
        result = num1 - num2;
        document.write(num1+" - " +num2+ " = " +result);
        break;

    case '*':
        result = num1 * num2;
        document.write(num1+" * " +num2+ " = " +result);
        break;

    case '/':
        result = num1 / num2;
        document.write(num1+" / " +num2+ " = " +result);
        break;

    default:
        break;
}
*/

/* [Example 6:]

let season = prompt("Enter the value for season: ").toUpperCase();
switch (season) {
    case 'R':
        document.write("Rainy season");
        break;

    case 'S':
        document.write("Summer season");
        break;

    case 'W':
        document.write("Winter season");
        break;

    case 'P':
        document.write("Spring season");
        break;

    default:
        document.write("Invalid value for season");
        break;
}
*/

/* [Example 7:]
// Declare a variable of char type.
let city = prompt("Enter the first letter of your city: ").toLowerCase();
// Switch expression with char case values.
switch (city) {
    // Case statements.
    case 'm':
        document.write("Murshidabad");
        break;

    case 'b':
        document.write("Berhampore");
        break;

    case 'l':
        document.write("LaxmikantaPur");
        break;

    default:
        document.write("Invalid word");
        break;
}
*/

/* [Example 8: ]
let num = parseInt(prompt("enter the number :"));
switch (num) {
    // Case statement without break statements.
    case 10:
        document.write("ten", "<br>");

    case 20:
        document.write("twenty", "<br>");

    case 30:
        document.write("thirty", "<br>")

    case 40:
        document.write("forty", "<br>");

    default:
        document.write("default values");
}
*/
