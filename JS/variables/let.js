/*--------------------------------->
        ~~~~ LET IN JS ~~~~
-----------------------------------> */
/* Let in JavaScript is a keyword that is used to declare a block-level variable
rather than a global variable or variable in a function block.

JavaScript let keyword follow the same definition as var,
with one exception that it is tied to the block scope, not the function scope.
*/
/* (- a variable defined with let keyword is visible only within the scope in which it is defined. -)
let language = 'JavaScript'; // Declare and initialize a variable.
Or,
let language; // Declare a variable.
language = 'JavaScript'; // Initialize a variable.

(- declare multiple variables using let keyword in a single line like this: -)
let x, y, z; // Declaration of 3 variables.
let num = 20, char = 'A'; // Declaration and initialization of 2 variables.
*/

// ( ----------> WHY NEED LET KEYWORD <---------- )
/* When a variable is declared using var keyword in JavaScript, it is called function scoped variable.
It is accessible globally to the script or throughout the script if declared outside the function.

Similarly, if the function scoped variable is declared inside a function,
it is accessible throughout the function, but not outside the function.
*/

/* ( #1. declare a function scoped variables :- )
var x = 10;
// Create a function named myFunction.
function myFunction() {
        document.write(x+"<br>");
        var y = 20; // accessible throughout the function.
        if (true) {
                var z = 30; // accessible throughout the function.
                document.write(y+ "<br>");
        }
        document.write(z); // Calling function.
}

OUTPUT->10
        20
        30
( As you see in the above script code, the variable z is a local variable inside the if statement.
The variable z is still accessible after the if statement has finished execution. )

( To overcome this problem, JavaScript has introduced let keyword in ES6
which we can use for creating variables that are block scoped. )

(In the above script code, if we use let instead of var,
the variable z would not be visible (accessible) after the loop completes.)
*/

// ( ------------> BLOCKED SCOPED VARIABLES IN JS (let keyword scope) <------------- )
/* ( Variables that are defined using the let keyword are called block scoped variables in javascript.
The block scoped variables are locked into a block. )

( That is, they exist only within the current block. They cannot be accessed outside a block
and they are removed from the memory as soon as the block finishes the execution. )

A block is a group of zero or more statements in Javascript that is created with curly braces ({ . . . .}).
A pair of curly braces can be put anywhere in the script to define a new block scope. )

( The block-scoped variables work the same way as function scoped variables when declared outside the function,
they are accessed globally.

But when the block scoped variables are defined inside a block,
they are only accessible inside the block in which they are defined, but not outside the function. )

( #2. Example :-    )
let x = 20; // accessible globally.
// Create a function named myFunction.
function myFunction() {
        document.write(x+ "<br>");
        let y = 30; // accessible throughout the function.
        if (true) {
                let z = 40; // accessible only inside if statement.
                document.write(y+ "<br>");
        }
        document.write(z); // Reference Error Example.
}
myFunction(); // Calling Function.

OUTPUT->20
        30
        Reference Error Example

( If you will execute the above script code, the last statement “document.write(z);”
would generate an error because the definition of z is removed as soon as the loop of if statement completes. )
*/

/* (#3. Example :-    )
for (var x = 1; x < 5; x++) {
        document.write(x+ " "); // Output: 1 2 3 4
}
document.write(x+ "<br>") // Output: 5 because variable x is accessible here.
for (let y = 1; y < 10; y++) {
        document.write(y+ " "); // Output: 1 2 3 4
}
document.write(y); // Error! y is undefined because variable y is not accessible outside for loop.

( the variable y declared with let keyword is accessible inside the for loop, but not outside the for loop. )
*/

// ( -------------> VARIABLES REDECLARATION IN JS <------------ )
/*
( We can easily redeclare a variable using var keyword that is already declared using var keyword in the same scope.
Consider a simple example below where we re-declare a variable using var keyword. )

(#4. Example :-)
var city = "Murshidabad";
var city = "Berhampore"; // redeclaration of variable.
document.write("Name of city: "+city+"<br>");
function myFunction() {
        var city = 'Laxmikantapur';
        var city = 'Mandibazar'; // redeclartion of variable.
        document.write("Name of city: "+city);
}
myFunction(); // Calling function

( If we declare a variable using let keyword that is already declared using let keyword in the same scope,
JavaScript interpreter will throw TypeError exception. )

(#5. Example :-)
let x = 20;
let x = 40; // TypeError because of redeclaration.
document.write("Value of x: "+x+ "<br>");
function myFunction() {
        let y = 100;
        let y = 200; // TypeError
        document.write("Value of y: " +y+ "<br>");
}
myFunction(); // Calling function

( the redeclaration of a variable using let keyword or var keyword in the different block scope is allowed. )

(#6. Example :-)
var x = 10;
let y = 20;
function myFunction() {
        var x = 30; // Different variable because of different block
        let y = 40; // Different variable because of different block scope.
        if (true) {
                var x = 50; // Overwritten because of the same block scope.
                let y = 60; // Different variable because of the different block scope.
                document.write("var- "+x+ "<br>");
                document.write("let- "+y+ "<br>");
        }
        document.write("var- "+x+ "<br>");
        document.write("let- "+y+ "<br>");
}
myFunction(); // Calling function
document.write("var- "+x+ "<br>");
document.write("let- "+y);
*/

// ( ------------> VARIABLE REASSIGNMENT IN JS <------------- )
/*
The ability to change or reassign the value of a variable at any time is called variable reassignment in JavaScript.
There are two ways to reassign the value of a variable that are as follows:

        1. Using var keyword
        2. Using let keyword

( reassign the value of variables using var and let keywords respectively )

(#7. Example :-)
// Declared and assigned using var.
var name = 'code';
document.write('name: ', name, '<br>');
// Value reassigned.
name = 'man';
document.write('Reassigned name: ', name, '<br>');

{
        // Declared and assigned using let.
        let city = 'Murshidabad';
        document.write('city: ',city, '<br>');
        // Value reassigned.
        city = 'Berhampore';
        document.write('Reassigned city: ', city);
}
*/

// ( ------------> VARIABLE HOISTING IN JS <------------ )
/*
The variable instantiation and assignment at the time of variable’s declaration is called variable hoisting.
Variables declared using var keyword can be reassigned, have function scope and variable hoisting.

It means that variables declared with var are hoisted to the top of the scope block,
can be initialized at any time, and used or accessed before they are declared.

(#8. Example :-)
document.write(x); // Accessing before declaration and initialization.
var x = 20;

(OUTPUT- undefined)

( Variables defined using let keyword are not subject to variable hoisting.
It means that accessing variable defined using let before assignment will throw a runtime error. )

document.write(x); // Accessing before declaration and initialization.
let x = 20;

(OUTPUT- ReferenceError: Cannot access 'x' before initialization)
*/

// ( -------------> ADVANTAGES OF USING LET KEYWORD <------------)
/*
        1. Let keyword makes script more memory friendly.
        2. It helps to prevent the scoping mistake.
        3. It prevents the accidental bugs in the script code.
        4. Let keyword makes the script code easier to read.
*/