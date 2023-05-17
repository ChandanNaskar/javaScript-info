/*--------------------------------->
        ~~~~ CONST IN JS ~~~~
-----------------------------------> */
/*
Const in JavaScript is another keyword introduced in ES6 that is used to declare a read-only variable,
meaning a variable whose value cannot be reassigned.

In other words, if a variable is defined with a const keyword,
its value cannot be changed (or modified) afterward throughout its lifetime.

JavaScript const keyword allows us to define a constant value. We must initialize it when the variable is declared.

If a value of the variable assigned with a const keyword is modified, TypeError will be thrown.

const firstName = "Code"; // Defining a constant.
firstName = "Man"; // throws read-only exception.

constant can never be declared without assigning a value.
Attempting to declare a constant without assigning it, will produce a SyntaxError.

const x; // raises a SyntaxError.
const x = 10; // works as expected.
*/

// --------------> (SCOPE OF CONST KEYWORDS) <--------------
/* Variables declared with a const keyword are blocked-scope variables.
Constant variables follow the same scoping rules as variables that are declared with the let keyword. */

/* ( #1. EXAMPLE )
const x = 20; // accessible globally.
// Declare a function named myFunction.
function myFunction() {
    document.write("Value of x: " +x+ "<br>");
    const y = 30; // accessible throughout function.
    if (true) {
        const z = 40; // accessible throughout the "if" statement.
        document.write("value of y: " +y+ "<br>");
    }
    document.write(z);
}
myFunction(); // calling function.
*/

/* ( the const keyword has the same scoping and variable hoisting rules as the let keyword.
Variables declared with const keyword have block scoping and do not get hoisted at the top of the scope. )

( #2. EXAMPLE )
function myFunction() {
    document.write("Variable declared with const keyword is not hoisted");
    // Referenced before declaration.
    document.write(x);
    const x = 20; // ReferenceError because x is not defined.
}
myFunction(); // calling function.

OUTPUT- Variable declared with const keyword is not hoisted
        ReferenceError because x is not defined.

( The key difference between let and const keywords is that
variables declared with let keyword can be reassigned a new value whereas,
variables declared with const keyword can never be reassigned a new value (i.e. it is immutable). )
*/

// -------------> REFERENCING OBJECTS USING CONSTANT VARIABLES <-------------
/* A variable marked with const keyword creates a read-only reference to a value.
It does not mean that the value held by a reference is immutable.

When we assign an object or an array to a variable,
the reference of the object is constant to that variable and not to the object itself.

Therefore, the contents of an array or object properties are mutable,
but the reference of object or an array is immutable.

( #3. EXAMPLE )
const x = {
    name1 : "Ram",
    name2 : "Sita",
    name3 : "Laxman",
};
document.write(x.name1+ "<br>");
document.write(x.name2+ "<br>");
document.write(x.name3+ "<br>");

// Reassigned of variable.
x = "Shyam";
document.write(x); // throws read-only exception.

( In this example program, x variable stores the address (i.e. reference) of the object.
Therefore, the address of the object is a value of x variable and it cannot be changed.

But, here the object is mutable. When we attempted to assign another object to variable x,
we got an exception because we are attempting to change the value of variable x. )
*/

/* (Let’s take a simple example where we will find the area and circumference of a circle and see the output.)
const pi = 3.14;
const r = 10;
function calArea() {
    let area = pi * r * r;
    document.write("Area of circle: " +area+ "<br>");
}
function calCircumference() {
    let circum = 2 * pi * r;
    document.write("Circumference of circle: " +circum);
}
calArea();
calCircumference();
*/

// --------------> When To Use let & const Keyword <-------------
/*
While writing the code in ES6, always use const keyword to declare variables whose values will not change.

Use let keyword only when you need to perform any changes (reassignments) to the variable and completely avoid using var keyword.
*/

// -------------> Common Examples based on Const Keyword <-------------
/*
1. const x; // SyntaxError: Missing initializer in const declaration.
2. const x = 10;
    document.write(x); // output: 10
    x = 20; // TypeError: Assignment to a constant variable.

3. if(true) {
        const name = "John";
    }
   document.write(name); // ReferenceError: name is not defined.

4. if(while) {
        const x = 20;
    }
    document.write(x); // ReferenceError: x is not defined.

5. function showMe(){
        const scName = "RSVM";
    }
     document.write(scName); // ReferenceError: scName is not defined.

6. const x = {
        a : 10,
        b : 20;
    };
   x = { a : 30, b : 40}; // It will not work.
   x.a = 60; // It will work because only a property of object x has been changed.

7. const x = 10;
    let y = x; // output: x = 10, y = 10
    y = 20; // output: x = 10, y = 20
( In code example 7, x referenced a primitive number 10. Then, we assigned y to the same value as x.
In this case, x and y both have the same value 10. We then reassigned the value of 20 to y, but still, x has a value of 10. )

8. If we assign a non-primitive value to a variable, it is done by reference.
Therefore, if any changes happen, they will subsequently affect all references to that object.

const p = { value : 10};
let q = p; // output: p.value = 10, q.value = 10;
q.value = 20; // output: p.value = 20, q.value = 20;

( In the above code example, the change to the value property of q also occurs in the value property
p changing as well because variables p and q are both referencing the same object.
So, any changes to one of them will also influence the other.)

9. Redeclaration of an existing var variable to const is not allowed in the same scope. Look at the below example.
var x = 20; // allowed
const x = 30; // not allowed

10. Redeclaration of an existing let variable to const is not allowed in the same scope. See the below example.
let p = 20; // allowed
const p = 30; // not allowed

11. Reassigning an existing const variable is not allowed in the same scope. For example:
const a = 10; // allowed
var a = 20; // not allowed
let a = 30; // not allowed
const a = 50; // not allowed

12. Redeclaring a variable with const keyword is allowed in another block scope or another block. Look at the examples below:
const firstName = "Deep"; // valid
{
    const firstName = "Herry"; // valid
}
{
    const firstName = "Ricky"; // valid
}
*/
