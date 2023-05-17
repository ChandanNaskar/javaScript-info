/* ----------------------------------------
        ~~~ TYPE OF VARIABLES ~~~
   ---------------------------------------- */
/* There are two types of variables in JavaScript
    1. Global Variable
    2. Local Variable
*/

// ############### GLOBAL VARIABLE ################
/* A global variable is a variable that is defined in the main part of the script but outside the function.
In other words, a variable defined outside the functions is called global variable in JavaScript.

It exists everywhere in the entire JavaScript code. That is, we can access a global variable throughout the JavaScript program.
We can use them anywhere, even within functions. A global variable is erased when we close the web page
*/

/* ( 1. declare a global variable and access it from outside the function and inside the function. )
    // Declare a global variable.
    var message = "This is a global variable, and you can access it anywhere.";
    // Create a function named display.
    function display() {
      document.write(message); // Accessing global variable from inside the function.
    }
    document.write(message, "<br>"); // Accessing from outside the function.
    display(); // Calling function.
*/

// ################ LOCAL VARIABLE ################
/* A local variable is a variable that is defined inside the body of the function with var keyword.
It can be used or accessed only within the function where it is defined in. */

// ( creating a local variable using var keyword inside the function ! )
/*  function showMe(){
      var localVariable = "I am local variable";
    }
*/

/* ( 2. declare both local and global variables, access them, and display their messages. )
// Declare a global variable and assign it a value.
    var message1 = "This is a global variable, and you can access it anywhere.";
// Create a function named display.
    function display() {
// Declare a local variable and assign it a value.
      var message2 = "This is a local variable, and you can access it only inside the function."
      document.write(message2); // Accessing local variable from inside the function.
    }
   document.write(message1 +"<br>"); // Accessing the global variable.
   display(); // Calling function.
*/

/* ( 3. declare two global variables and two local variables within a function.
One of the global and local variables will share a common name student2.)
// Declare global variables.
    var student1 = "John";
    var student2 = "Larry";
// Create a function named showMe.
    function showMe()
    {
      var student2 = "Harry"; // Here, local variable is sharing the same name as global variable.
      var student3 = "Deep";
      document.write(student2+ " " +student3+ "<br>");
    }
  showMe(); // calling function.
  document.write(student1+ " " +student2);
*/

// #################### SCOPE OF VARIABLE ######################
/* Variable scope in JavaScript is a location (or region) of the program (script) in which it has defined.
In other words, the scope of variable is the location from which we can access its value.
*/

/* ( - GLOBAL SCOPE - )
When we define a variable in the main part of a script code (outside the function), it has global scope.
We can access it from everywhere in the JavaScript program.

( 1. defined a global variable msg on the first line of the script. We can access it inside the function. )
    var msg = "Global variable";
    function displayMe(){
      alert(msg);
    }
    displayMe(); // It will display "Global variable".
*/

/* ( - LOCAL SCOPE - )
When we define a variable inside the JavaScript function, then it has local scope.
We can access it only within the body of the function.

Since it is only visible within the body of JavaScript function,
the main script and other functions cannot see or access this variable.

( 2. Example )
  var scope = "Global scope"; // Declaration of global variable.
  // Create an outer function.
    function showMe() {
      var scope = "Local scope"; // Declaration of local variable.
  // Create an inner function named nested.
    function nested()
    {
      var scope = "Nested scope"; // A nested scope of local variable.
      document.write(scope); // It will print "Nested scope".
      document.write("<br>");
    }
      nested(); // calling inner function.
    }
    showMe(); // calling outer function.
    document.write(scope); // It will print "Global scope".

(we have nested the function definitions. Each function has its own local scope, so we can nest several layers of local scope.)
*/

/* Another Example ->
    var scope = "global";
    function showMe()
    {
      document.write(scope); // It will display "undefined", not "global".
      var scope = "local"; // Here, we have initialized variable and defined everywhere.
      document.write(scope); // It will display "local".
    }
    showMe(); // function calling.
 */

/*The first statement within function will display “undefined” value, not global
because we have defined the local variable throughout the body of function,
which means global variable having the same name has hidden throughout the function.
Although the local variable will not initialize until the var statement does not execute.
*/

/*
    function showMe()
    {
      var scope;
      document.write(scope);
      document.write("<br>");
      scope = "local";
      document.write(scope);
    }
    showMe();
*/