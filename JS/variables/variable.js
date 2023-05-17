/*-------------------------------
        ~~~ VARIABLE ~~~
---------------------------------*/
/* ( What is variable ? )
A variable in JavaScript is a container that can hold a value such as a number,
some text string, an element in the DOM, a function, an object, or anything. */

/* ( Few rules declaring variables ? )
The following variable names are invalid:-
1. var 1stCounter; // cannot start with digit.
2. var new variable; // cannot have space.
3. ^mystring // first character is illegal
4. var var; // keyword.
5. var document; // keyword.
6. var length; // keyword.

The following variable names are valid:-
1. var myText;
2. var $;
3. var r8;
4. var _counter;
5. var $field;
6. var __$abc;
7. var my_School; */

/* ( Variable Initialization ? )
1. declare variables with initial values.
    var name = "Chandan"; // Here, we are assigning a string value to a variable name.
    var age = 24;

2. initialize a value to a variable (after declared)
a)  var age; // creating a variable age.
    age = 30; // storing the number 30 in that variable.

b)  var myText;
    myText = "Hello world!";

3. declare multiple variables on the same line of code
    var x, y, firstName, lastName;

4. variables can be initialized at the same line of code
    var x = 10, y = 20, firstName = "Shubh", lastName = "Deep";
*/

/* ( Variable Types ! )
Most high-level languages such as C and Java are strongly typed.
It means that when we declare a variable in a program, we must declare its type of variable before it used.
Once a variable has defined, we cannot change its data type.

Variables in JavaScript are weakly types (i.e. not strongly typed).
It means that a variable will hold an integer, a floating-point number, or a string simultaneously.

    var x = 24 // first hold integer value
    x = "Now it is a Integer" // it's change and holds string value

can change the value of a variable whenever we want.
    var myText;
    myText = "Hello Javascript";
    myText = 99;
    myText = 4 * 10;
    myText = true;
    myText = undefined;
*/

/* ( Using variables in Statement )
Once we declared a variable and assigned a value to it, we can then use that variable in other statements.
When Javascript interpreter embedded in the web browser sees the variable, it goes to the computer’s memory,
retrieves the current variable’s value, and then puts that value into the statements.

1. declare a variable and assign value to it, and then use it in another statement.
    // Declaration and initialization of a variable.
    var firstName = "Chandan";
    document.write("Welcome to Github " +firstName); // using other statement

2. initialize the variable by taking the input from the user using prompt() method
    var firstName;
    firstName = prompt("Please, tell me your First Name! ");
    document.write("Welcome to the GitPage " ,firstName);

3. declare a variable and assign a value to it and then display the value.
After it, we will change the value, again display it
    var firstName;
    firstName = "Chandan";
    document.write(firstName);
    document.write("<br>");
    firstName = "Shyam";
    document.write(firstName);
    document.write("<br>");
    firstName = "Deep";
    document.write(firstName);
*/
