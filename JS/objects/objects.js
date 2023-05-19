/* ###########################
        ( INTRODUCTION )
############################## */
/*
We know JavaScript is a simple object-based language. Everything is an object in JavaScript.

An object in JavaScript is an entity or any real-world thing that has a state and behavior.

Here, the state represents properties (characteristics) of an object and behavior represents actions
or functionality of an object.

In the real world, everything in JavaScript is an object if it has properties and actions.
*/


/*------------------------------------>
JavaScript Object Declaration
<--------------------------------------
const object_name = {
    key1: value1,
    key2: value2
}

Here, an object object_name is defined. Each member of an object is a key:
value pair separated by commas and enclosed in curly braces {}.

// object creation
const person = {
    name: 'John',
    age: 20
};
console.log(typeof person); // object

You can also define an object in a single line.

const person = { name: 'John', age: 20 };

In the above example, name and age are keys, and John and 20 are values respectively.
*/


/*------------------------------------>
JavaScript Object Properties
<--------------------------------------
In JavaScript, "key: value" pairs are called properties. For example,

let person = {
    name: 'John',
    age: 20
};

Here, name: 'John' and age: 20 are properties.


                        let person = {
                keys<------ name : 'code' ----------> values
                            age : 20 ---------------> values
                        }

*/


/* ##############################################
        ( ACCESSING OBJECT PROPERTIES )
################################################# */
/*
You can access the value of a property by using its key.

/*------------------------------->
Example 1: Using dot Notation
<-------------------------------*/
/*
Here's the syntax of the dot notation.

objectName.key

const person = {
    name: 'John',
    age: 20,
};

// accessing property
console.log(person.name); // John
*/


/*--------------------------------------->
Example 1: Using bracket Notation
<----------------------------------------*/
/*
Here is the syntax of the bracket notation.

objectName["propertyName"]

const person = {
    name: 'John',
    age: 20,
};

// accessing property
console.log(person["name"]); // John
*/


/*######################################
        ( NESTED OBJECT )
########################################*/
/*
An object can also contain another object. For example,

// nested object
const student = {
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

In the above example, an object student contains an object value in the marks property.
*/


/*######################################
        ( JS OBJECT METHOD )
########################################*/
/*
In JavaScript, an object can also contain a function. For example,

const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello

( Here, a function is used as a value for the greet key. That's why we need to use person.greet()
instead of person.greet to call the function inside the object. )
*/


/*##############################################
(Example Programs based on Object Literals)
################################################*/
/*
[1. create an object person and access the various properties and display them]

var person = {
    firstName:"John",
    lastName:"Herry",
    age: 25,
    skinColor:"White"
};
// Accessing properties of person object.
document.write("First name: " +person.firstName+ "<br>");
document.write("Last name: " +person.lastName+ "<br>");
document.write("Age: " +person.age+ "<br>");
document.write("Skin color: " +person.skinColor);

Output:
    First name: John
    Last name: Herry
    Age: 25
    Skin color: White
*/


/*
[2. create an object student and access the various properties of a student and display them]

var student = {
    firstName:"John",
    lastName:"Herry",
    schoolName: "RSVM",
    rollNo: 05,
    age: 16,
    city: "Dhanbad",
    myfunction:function() {
            display();
    }
};

function display() {
// Accessing properties of student object.
    document.write("First name: " +student.firstName+ "<br>");
    document.write("Last name: " +student.lastName+ "<br>");
    document.write("School name: " +student.schoolName+ "<br>");
    document.write("Roll no: " +student.rollNo+ "<br>");
    document.write("Age: " +student.age+ "<br>");
    document.write("City: " +student.city);
}
student.myfunction(); // Calling function using student object reference.

Output:
    First name: John
    Last name: Herry
    School name: RSVM
    Roll no: 5
    Age: 16
    City: Dhanbad
*/


/*
[3. perform the addition, subtraction, and multiplication of three numbers and display results obtained]

var cal = {
    a: 25,
    b: 25,
    c: 25,
addition:function() {
    sum = cal.a + cal.b + cal.c;
    document.write("Addition: " +sum+ "<br>");
},
subtraction:function() {
    sub = cal.a - cal.b - cal.c;
    document.write("Subtraction: " +sub+ "<br>");
},
multiplication:function() {
    multiply = cal.a * cal.b * cal.c;
    document.write("Multiplication: " +multiply);
}
};
function display() {
    cal.addition();
    cal.subtraction();
    cal.multiplication();
}
display(); // Calling function.

Output:
    Addition: 75
    Subtraction: -25
    Multiplication: 15625
*/


/*##########################################
(By Creating Instance of Object)
############################################*/
/*
( We can create an object directly by using a combination of a new keyword and Object() constructor function.

The new keyword and object constructor create a blank object in which
we can then add properties and methods to the object using dot notation.

Each statement that adds property and method to any object must end with a semicolon.
The general syntax to create an object in JavaScript using a new keyword and Object() constructor is as follows: )

var objectName = new Object();
objectName.propertyName1 = "Value1";
objectName.propertyName2 = "Value2";
objectName.propertyName3 = "Value3";
. . . . . .
objectName.functionName1 = function()
{
  // function code;
};
objectName.functionName2 = function()
{
  // function code;
};

Consider the following example.

var person = new Object();
// Adding properties to object person.
person.name = "Herry";
person.city = "Dhanbad";
person.age = 25;
// Adding method to object person.
person.display = function()
{
     // function code;
};

Let’s create a simple JavaScript program in which we will create an instance of Object using new keyword.
*/

/*
[EXAMPLE - 1]

 // Creating an instance of Object.
    var hotel = new Object();
 // Adding properties to the object hotel.
    hotel.name = "Park";
    hotel.rooms = 120;
    hotel.booked = 50;

// Adding functions to the object hotel.
hotel.checkAvailability = function()
{
    return this.rooms - this.booked;
};
hotel.display = function()
{
    var hotelName = hotel.name; // Accessing name of hotel.
    document.write("Name of hotel: " +hotelName+ "<br>");
    var availableRooms = hotel.checkAvailability(); // Accessing function.
    document.write("Rooms left in hotel: " +availableRooms);
};

hotel.display();

Output:
    Name of hotel: Park
    Rooms left in hotel: 70
*/


/*#####################################################################
(Creating Many Objects in JavaScript using Constructor Notation)
#######################################################################*/
/*
Sometimes, we need to create several objects to represent similar things.
In this situation, we can use the constructor function to create several objects in JavaScript.

For this, we need to create a function as a template with parameters.
The argument values passed we can assign to parameters inside the current object by using this keyword.

In other words, we can set the properties inside the object with this keyword.
The keyword this refers to the current object. We commonly used this keyword inside functions and objects.

For example, let us consider an employee object with properties like name, age, salary as given:


function employee(name, age, salary)
{
    // Setting properties inside the object using this keyword.
    this.name = name;
    this.age = age;
    this.salary = salary;
}

We can also create many employee objects with the help of new keyword. For example,

var emp1 = new employee("Tripti", 23, 60000);
var emp2 = new employee("Deep", 30, 65000);
var emp3 = new emplyee("Ivaan", 20, 25000);
*/


/*
[1. Let us consider an example program where we will display the student details of the object student.]

function Student()
{
 // Properties of student.
    this.name = "Rashmi";
    this.cName = "SSLNT";
    this.rollNo = 05;
    this.city = "Dhanbad";
}
var st = new Student();
document.write(st.name+ " " +st.cName+ " " +st.rollNo+ " " +st.city);
*/


/*
[2. Let us consider an example program where we will display the student details of the object student.]

function Student()
{
// Properties of student.
    this.name = "Rashmi";
    this.cName = "SSLNT";
    this.rollNo = 05;
    this.city = "Dhanbad";
}

var st = new Student();
document.write(st.name+ " " +st.cName+ " " +st.rollNo+ " " +st.city);
*/


/*
[3. Let’s create a JavaScript program in which we will assign values to the object’s properties by passing values to the function.
We will create objects using constructor functions.]

function employee(name, cName, age, salary)
{
    // Properties of employee.
    this.name = name;
    this.cName = cName;
    this.age = age;
    this.salary = salary;
}

// Creating objects of employee type.
var emp = new employee("Ruchi", "TCS", 25, 60000);
document.write(emp.name+ " " +emp.cName+ " " +emp.age+ " " +emp.salary, "<br>");

var emp = new employee("Tripti", "IBM", 24, 65000);
document.write(emp.name+ " " +emp.cName+ " " +emp.age+ " " +emp.salary, "<br>");

var emp = new employee("Priya", "Wipro", 23, 55000);
document.write(emp.name+ " " +emp.cName+ " " +emp.age+ " " +emp.salary, "<br>");

Output:
    Ruchi TCS 25 60000
    Tripti IBM 24 65000
    Priya Wipro 23 55000
*/


/*##############################################
        (Modifying Prototype Object)
###############################################*/
/*
/*
JavaScript provides an advanced language feature object prototype that allows us to add a property
to all instances of a particular object.

function Student(name, sName, id)
{
    this.name = name;
    this.sName = sName;
}
var st = new Student("Tripti", "RSVM");
document.write("Name: " +st.name+ ", " +"School name: "+st.sName, "<br>");

// Adding more properties using prototype property.
Student.prototype.id = 12345;
Student.prototype.marks = 500;
document.write("Id: " +st.id+ ", "+"Marks obtained: " +st.marks);

Output:
    Name: Tripti, School name: RSVM
    Id: 12345, Marks obtained: 500
*/
