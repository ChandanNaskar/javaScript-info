/* ###########################
        ( INTRODUCTION )
############################## */
/*
/*
    -> A multidimensional array is an array that contains another array. For example,

// multidimensional array
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
*/


/*##########################################
    ( CREATE A MULTIDIMENSIONAL ARRAY )
###########################################*/
/*
    -> EXAMPLE 1
let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

    -> EXAMPLE 2
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsData = [student1, student2, student3];

( -> Here, both example 1 and example 2 creates a multidimensional array with the same data. -)
*/


/*##########################################
    ( ACCESS ELEMENTS OF AN ARRAY )
###########################################*/
/*
    -> You can access the elements of a multidimensional array using indices (0, 1, 2 …). For example,

let x = [
['Jack', 24],
['Sara', 23],
['Peter', 24]
];

// access the first item
console.log(x[0]); // ["Jack", 24]

// access the first item of the first inner array
console.log(x[0][0]); // Jack

// access the second item of the third inner array
console.log(x[2][1]); // 24
*/


/*#####################################################
    ( ADD AN ELEMENT TO A MULTIDIMENSIONAL ARRAY )
######################################################*/
/*
    -> use the Array's push() method or an indexing notation to add elements to a multidimensional array.
    * (Adding Element to the Outer Array) *
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.push(['Peter', 24]);

console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]

    * (Adding Element to the Inner Array) *
// using index notation
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData[1][2] = 'hello';

console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// using push()
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData[1].push('hello');

console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]


    -> You can also use the Array's splice() method to add an element at a specified index. For example,
let studentsData = [['Jack', 24], ['Sara', 23],];

// adding element at 1 index
studentsData.splice(1, 0, ['Peter', 24]);

console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]
*/


/*########################################################
    ( REMOVE AN ELEMENT TO A MULTIDIMENSIONAL ARRAY )
##########################################################*/
/*
    -> You can use the Array's pop() method to remove the element from a multidimensional array. For example,

    * (Remove Element from Outer Array) *
// remove the array element from outer array
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.pop();

console.log(studentsData); // [["Jack", 24]]

    * (Remove Element from Inner Array) *
// remove the element from the inner array
let studentsData = [['Jack', 24], ['Sara', 23]];
studentsData[1].pop();

console.log(studentsData); // [["Jack", 24], ["Sara"]]

    -> use the splice() method to remove an element at a specified index. For example,

let studentsData = [['Jack', 24], ['Sara', 23],];

// removing 1 index array item
studentsData.splice(1,1);
console.log(studentsData); // [["Jack", 24]]
*/


/*####################################################
    ( ITERATING OVER MULTIDIMENSIONAL ARRAY )
#####################################################*/
/*
    -> You can iterate over a multidimensional array using the Array's forEach()
    method to iterate over the multidimensional array. For example,

let studentsData = [['Jack', 24], ['Sara', 23],];

// iterating over the studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

OUTPUT :->
Jack
24
Sara
23
( The first forEach() method is used to iterate over the outer array elements and
the second forEach() is used to iterate over the inner array elements. )

    -> You can also use the for...of loop to iterate over the multidimensional array. For example,

let studentsData = [['Jack', 24], ['Sara', 23],];

for (let i of studentsData) {
    for (let j of i) {
        console.log(j);
    }
}

    -> You can also use the for loop to iterate over a multidimensional array. For example,

let studentsData = [['Jack', 24], ['Sara', 23],];

// looping outer array elements
for(let i = 0; i < studentsData.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;

    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}
*/
