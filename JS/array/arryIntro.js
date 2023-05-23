/* ###########################
        ( INTRODUCTION )
############################## */
/*

    * An array in JavaScript is an ordered set of data (or values)
    represented by a single variable name.

    * In JavaScript, an array is basically a user-defined object
    that represents a collection of different data type of elements.

    * Array uses a single variable name to store more than one value.
    These values are stored in indexed locations within an array.

*/


/* #############################
        ( TYPES OF ARRAY )
################################ */
/*
Basically, there are five types of arrays in JavaScript. They are:

    1. String arrays
    2. Number arrays
    3. Boolean arrays
    4. Object arrays (including null arrays because null is an object)
    5. Mixed arrays
*/


/*-------------------------------->
        ( Examples of array )
<----------------------------------
var colors = ['red', 'green', 'pink', 'yellow', 'black', 'white'];

// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];

*/


/*---------------------------------------------->
        ( Access Elements of an array )
<------------------------------------------------
const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

( Note: Array's index starts with 0, not 1. )
*/


/*--------------------------------------------------->
    ( Display Online take five elements in array )
<-----------------------------------------------------
/*

let person = ["Deep", " Tripti", " Rashmi", " Amit", " Ivaan"];
document.write(person); // Accessing full array.

Output:
    Deep, Tripti, Rashmi, Amit, Ivaan

// Spaces and line breaks are not important in the array declaration.
// An array declaration can span more than one line.

let cities = [
    "Dhanbad",
    " New York",
    " Sydney",
    " Mumbai",
    " Moscow"
];
document.write(cities);

Output:
    Dhanbad, New York, Sydney, Mumbai, Moscow

// We can also create an array and then insert the elements

let nums = [ ];
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;
document.write(nums);

Output:
    10,20,30,40,50
*/


/*------------------------------------------------->
        ( Access Elements of an Array )
<---------------------------------------------------
/*
const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

( Note: Array's index starts with 0, not 1. )
*/


/*#####################################
    ( ACCESS ELEMENTS OF AN ARRAY )
#######################################*/
/*
    - You can access elements of an array using indices (0, 1, 2 …). For example,

const myArray = ['h', 'e', 'l', 'l', 'o'];
// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

( Note: Array's index starts with 0, not 1. )
*/


/*#####################################
    ( ADD ON ELEMENT TO AN ARRAY )
#######################################*/
/*
    - You can use the built-in method push() and unshift() to add elements to an array.

    - The push() method adds an element at the end of the array. For example,

let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

    - The unshift() method adds an element at the beginning of the array. For example,

let dailyActivities = ['eat', 'sleep'];

//add an element at the start
dailyActivities.unshift('work');

console.log(dailyActivities); // ['work', 'eat', 'sleep']
*/


/*########################################
    ( CHANGE THE ELEMENT OF AN ARRAY )
##########################################*/
/*
    - You can also add elements or change the elements by accessing the index value.

let dailyActivities = [ 'eat', 'sleep'];

// this will change the element 'exercise' at the 1 index
dailyActivities[1] = 'exercise';

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

    - Suppose, an array has two elements. If you try to add an element at index 3 (fourth element),
    - the third element will be undefined. For example,

let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
*/


/*########################################
    ( REMOVE AN ELEMENT FROM AN ARRAY )
##########################################*/
/*
    - You can use the pop() method to remove the last element from an array.
    - The pop() method also returns the returned value. For example,

let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']

    - If you need to remove the first element, you can use the shift() method.
    - The shift() method removes the first element and also returns the removed element. For example,

let dailyActivities = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities); // ['eat', 'sleep']
*/


/*################################
        ( ARRAY LENGTH )
#################################*/
/*
    - You can find the length of an element (the number of elements in an array) using the length property. For example,

const dailyActivities = [ 'eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities.length); // 2
*/


/*################################
        ( ARRAY METHOD )
#################################*/
/*
    - Some of the commonly used JavaScript array methods are:

Method	        Description

concat()	    joins two or more arrays and returns a result
indexOf()	    searches an element of an array and returns its position
find()	        returns the first value of an array element that passes a test
findIndex()	    returns the first index of an array element that passes a test
forEach()	    calls a function for each element
includes()	    checks if an array contains a specified element
push()	        adds a new element to the end of an array and returns the new length of an array
unshift()	    adds a new element to the beginning of an array and returns the new length of an array
pop()	        removes the last element of an array and returns the removed element
shift()	        removes the first element of an array and returns the removed element
sort()	        sorts the elements alphabetically in strings and in ascending order
slice()	        selects the part of an array and returns the new array
splice()	    removes or replaces existing elements and/or adds new elements


------------------------------------------------->
        ( Access Elements of an Array )
<-------------------------------------------------
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]
*/


/*################################
    ( WORKING OF JS ARRAY )
#################################*/
/*
    - In JavaScript, an array is an object. And, the indices of arrays are objects keys.

    - Since arrays are objects, the array elements are stored by reference. Hence, when an array value is copied,
    any change in the copied array will also reflect in the original array. For example,

let arr = ['h', 'e'];
let arr1 = arr;
arr1.push('l');

console.log(arr); // ["h", "e", "l"]
console.log(arr1); // ["h", "e", "l"]

    - You can also store values by passing a named key in an array. For example,

let arr = ['h', 'e'];
arr.name = 'John';

console.log(arr); // ["h", "e"]
console.log(arr.name); // "John"
console.log(arr['name']); // "John"
*/
