/* ##########################################################
    ( PASSING ARRAY TO FUNCTION AS PASS BY REFERENCE )
############################################################# */
/*
1. Let’s create a JavaScript program in which we will pass an initialized array to a function.
Then, we will multiply each array element by 5 and display it.

let nums = new Array(20, 10, 25, 15, 35, 40);
let arrayLength = nums.length;
document.write("Original array elements are: ", "<br/>");

for(i = 0; i < arrayLength; i++) {
    document.write(nums[i]+ " ");
}
document.write("<hr>");
// Function to pass an array by reference.
function modifyArray(x) {
    document.write("Modified array elements: ", "<br/>");
    for(i = 0; i < arrayLength; i++) {
        document.write(nums[i] * 5 + " ");
}
}
// Calling function by passing array.
 modifyArray(nums); // entire array passed by reference.


OUTPUT :-
    Original array elements are:
    20 10 25 15 35 40
    Modified array elements:
    100 50 125 75 175 200

(In this example program, we have passed an array nums into modifyArray() as pass by reference.
That is, the parameter nums is passed into modifyArray() function with reference to x.
Inside the function the array elements are multiplied by 5 and displayed.)
*/


/*
let nums = [10, 20, 30, 40, 50];
let arrayLength = nums.length;
document.write("Original array elements are: ", "<br/>");

for(i = 0; i < arrayLength; i++) {
    document.write(nums[i]+ " ");
}
document.write("<br/>");

// Function to pass an array by reference.
function modifyArray(newArray, len) {
    document.write("Modified array elements are: ", "<br/>");
    for(i = 0; i < len; i++) {
    document.write(nums[i] * 2 + " ");
}
}
// Calling function by passing array and array length.
 modifyArray(nums, arrayLength); // entire array passed by reference.


OUTPUT :-
    Original array elements are:
    10 20 30 40 50
    Modified array elements are:
    20 40 60 80 100
*/


/* #######################################################################
    ( Passing Individual Array Element to Function as Pass by Value )
########################################################################## */
/*
3. pass the entire array as a pass by reference to the function in JavaScript.
Then we will pass the individual array element to the function as a pass by value in JavaScript.

let nums = [10, 20, 30, 40, 50];
document.write("Original array: ", "<br/>");
for(i = 0; i < nums.length; i++)
document.write(nums[i]+ " ");
document.write("<br/>");

document.write("Modified array: ", "<br/>");
// Create a function that modifies elements of an array.
function modifyArray(newArray) {
for(j = 0; j < nums.length; j++)
    document.write((newArray[j] *= 4)+ " ");
}
modifyArray(nums); // passing an array as passed by reference.
document.write("<br/>");
document.write("nums[3] before modifyElement: " +nums[3], "<br/>");

// Create a function that modifies the value passed.
function modifyElement(e) {
    e *= 3;
    document.write("nums[3] after modifyElement: " +e);
}
modifyElement(nums[3]); // passing array element nums[3] as passed by value.


Although the entire array is passed by reference,
whereas individual numeric and boolean array elements are passed by value.

To pass an element of an array to a function,
use the sub-scripted name of the element as an argument value in the function call.
*/
