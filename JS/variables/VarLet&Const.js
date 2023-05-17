/* The key differences among the three variable declarations with var, let and const keywords are:
        1. Variable reassignment
        2. Variable scope
        3. Variable hoisting
        4. Variable redeclaration
*/

// [ #1. Variable Reassignment ]
/* 1. All variables declared with var keyword can be assigned, and reassigned a new value at will.
// Declaration and assignment of variable.
    var flower = "Rose";
    document.write("Original value of variable: " +flower+ "<br>");
// A new value reassigned.
    flower = "Lotus";
    document.write("Value of variable after reassignment: " +flower);

Output:-
        Original value of variable: Rose
        Value of variable after reassignment: Lotus

2. The keyword let also allows us to declare a variable that can be reassigned at any time in the script.
// Declared and assigned a variable.
    let firstName = "Deep";
    document.write("First name: " +firstName+ "<br>");
// A new value reassigned to the variable.
    firstName = "Herry";
    document.write("First name after reassignment: " +firstName);

Output:-
        First name: Deep
        First name after reassignment: Herry

3. The keyword const does not allow us to reassign a new value to the variable once the variable gets initialized.
It does not allow to reassign the same way as var and let keywords.
If we attempt to reassign or modify a new value, Java interpreter will throw an error.
// Declared and assigned a variable using const keyword.
    const city = "Berhampore";
    document.write("City: " +city+ "<br>");
// A new value reassigned to the variable.
    city = "New York";
    document.write("New city: " +city); // throw error.

Output:-
        City: Berhampore
        TypeError: Assignment to constant variable


	                           Var	              Let	                Const
Variable reassignment	Can be reassigned	Can be reassigned	Cannot be reassigned
*/

// [ #2. Variable Scope ]
/* 1. All JavaScript variables declared with var keyword are called function scoped variables because they have function scope.
The function scoped variables declared outside the function are accessible globally to the script (i.e. throughout the script).
Similarly, when the function scoped variables are declared inside the function,
they are accessible throughout the function, but not outside the function.

var p = 20; // accessible globally.
function myFunction() {
    document.write(p+ "<br>");
    var q = 30; // accessible throughout the function.
    if (true) {
        document.write(q+ "<br>");
        var r = 40; // accessible throughout the function.
    }
    document.write(r);
}
myFunction(); // Calling Function

Output:-
        20
        30
        40
(As you can observe in the above code, the variable r is accessible outside the if statement.
To overcome this accessibility, ES6 had introduced let statement that can be used for declaring a variable that is block scoped.)

2. All variables that are declared by using the let keyword are called block scoped variables.
When block-scoped variables are declared outside the functions, they can be accessed globally.

But, when block-scoped variables are declared inside the block, they are visible only inside the block
in which they are defined and can be accessed only inside the block or also any sub-blocks but not outside the block.

let p = 200; // accessible globally.
function myFunction() {
    document.write(p+ "<br>");
    let q = 300; // accessible throughout the function.
    if (true) {
        document.write(q+ "<br>");
        let r = 400; // only accessible inside the block.
    }
    document.write(r); // Calling function.
}
myFunction();

Output:-
        200
        300
        Reference Error Exception

3. When a variable is declared with const keyword whose value cannot be reassigned then it is called constant variable or read-only variable.
Constant variables are also block scoped variables that follow the same scoping rules as variables that are using let keyword.

const p = 200; // accessible globally.
function myFunction() {
    document.write(p+ "<br>");
    const q = 300; // accessible throughout the function.
    if (true) {
        document.write(q+ "<br>");
        const r = 400; // only accessible inside the block.
    }
    document.write(r); // ReferenceError Exception.
}
myFunction();

Output:
        200
        300
        ReferenceError Exception

	                 Var	        Let	       Const
Variable scope	Function scope	Block scope	Block scope
*/

// [ #3. Variable Hoisting ]
/* 1. All variables that are declared with the var keyword, are hoisted.
It means that variables declared with var keyword are hoisted to the top of block scope,
where they are defined and can be accessed before the declaration.

// Referenced before declaration.
document.write(p); // Expected output: undefined.
var p = 10;

2. All the variables created with let keyword are not subject to variable hoisting.
It means that accessing a variable declaration with let keyword before assignment will throw ReferenceError.

// Referenced before declaration.
document.write(p); // Expected ReferenceError because p is not defined.
let p = 10;

3. All variables declared with const keyword are not hoisted. Look at the below example code.

// Referenced before declaration.
document.write(language); // Expected ReferenceError because language is not defined.
const language = "Javascript";

	                      Var	           Let	              Const
Variable hoisting	Can be hoisted	Cannot be hoisted	Cannot be hoisted
*/

// [ #4. Variable Redeclaration ]
/* 1. Using var keyword, we can declare a variable with the same name that is already declared using var keyword in the same scope.
Redeclaring a variable using var will overwrite the variable of the same name in the same scope but not overwrite in the outer scope.

var x = 1;
var x = 2; // Redeclaration of variable with the same name.
document.write(x+ "<br>");
function myFunction() {
    var y = 3;
    var y = 4;
    document.write(y);
}
myFunction();

Output:-
        2
        4

2. Redeclaring a variable using let keyword that is already declared using let keyword in the same scope, will throw TypeError exception.

let firstName = "John";
let firstName = "Deep"; // TypeError
document.write(firstName+ "<br>");
function myFunction() {
    let lastName = "Mask";
    let lastName = "Sagar"; // TypeError
    document.write(lastName);
}
myFunction();

3. Redeclaring a variable using const keyword that is already declared using const keyword in the same scope will also throw TypeError exception.
const language = "Javascript";
const language = "Java"; // TypeError
document.write(language+ "<br>");
function myFunction() {
    const language2 = "HTML";
    const language2 = "Python"; // TypeError
    document.write(language2);
}
myFunction();

	                            Var	                 Let	                Const
Variable redeclaration	Can be redeclared	Cannot be redeclared	Cannot be redeclared
*/

// (~ Difference between var, let and const in tabular form ~)
/*
                          Var	                      Let	                           Const
Reassignment	   Can be reassigned	       Can be reassigned	            Cannot be reassigned
Scope Creation	   Function scope	           Block scope	                    Block scope
Hoisting	       Hoisted	                   Not hoisted	                    Not hoisted
Redeclaration	   Can be redeclared	       Cannot be redeclared             Cannot be redeclared
*/