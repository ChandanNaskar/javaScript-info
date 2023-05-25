/* #########################
        ( SYNTAX )
########################## */
/*
    -> The forEach() method calls a function and iterates over the elements of an array.
    -> The forEach() method can also be used on Maps and Sets.

    array.forEach(function(currentValue, index, arr))

    * function(currentValue, index, arr) - a function to be run for each element of an array
    * currentValue - the value of an array
    * index (optional) - the index of the current element

    arr (optional) - the array of the current elements
*/


/* ###########################
    ( forEach WITH ARRAY )
############################## */
/*
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}

OUTPUT :->
John
Sara
Jack

(In the above program, the forEach() method takes myFunction()
function that displays each element of a students array.)
*/


/* ####################################
    ( UPDATING THE ARRAY EXAMPLE )
####################################### */
/*
    -> As we have seen in the above example, the forEach() method is used to iterate over an array,
    -> it is quite simple to update the array elements. For example,

let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}
console.log(students);

OUTPUT :->
["Hello John", "Hello Sara", "Hello Jack"]
*/


/* ####################################
    ( forEach WITH ARROW FUNCTION )
####################################### */
/*
    -> use the arrow function with the forEach() method to write a program. For example,

// with arrow function and callback
const students = ['John', 'Sara', 'Jack'];

students.forEach(element => {
    console.log(element);
});

OUTPUT :->
John
Sara
Jack
*/


/* ##################################
        ( FOR LOOP TO forEach )
##################################### */
/*
    -> Here is an example of how we can write a program with for loop and with forEach()

    * (using for loop) *
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

// using for loop
for (let i = 0; i < arrayItems.length; i++) {
    copyItems.push(arrayItems[i]);
}
console.log(copyItems);

OUTPUT :-
["item1", "item2", "item3"]


    * (using forEach loop) *
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

// using forEach
arrayItems.forEach(function(item){
    copyItems.push(item);
})
console.log(copyItems);
*/


/* ##################################
        ( for...of with Sets )
##################################### */
/*
    -> iterate through the Set elements using the forEach() method. For example,
// define Set
const set = new Set([1, 2, 3]);

// looping through Set
set.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}

OUTPUT :->
1
2
3
*/


/* ##################################
        ( for...of with Sets )
##################################### */
/*
    -> iterate through the Map elements using the forEach() method. For example,
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

// looping through Map
map.forEach (myFunction);

function myFunction(value, key) {
    console.log(key + '- ' + value);
}

OUTPUT :-
name- Jack
age- 27
*/