/* ###########################
        ( INTRODUCTION )
############################## */
/*
    * The for loop in JavaScript is an entry-controlled loop structure that executes a block of
statements a certain number of times.

    * The structure of for loop comprises three parts, separated by semicolon: initialization,
test condition, and increment or decrement.
*/

/* ###########################
            ( SYNTAX )
############################## */
/*
for(initialization; test-condition; increment/decrement) // This line determines how many times loop will repeat.
{
 // Loop body
    statement(s);
}
Or,
for (i = initialValue; i < endValue; i++)
{
 // Loop body
    statement(s);
}

This loop control structure comprises three parts:

    1. Initialization,
    2. Test condition,
    3. Increment or decrement (Iteration)

The body of loop enclosed inside curly braces follows this control structure.
Semicolon (;) separates the initialization, test condition, and iteration.
There is no semicolon at the end iteration section.
*/

/*
for (initialExpression; condition; updateExpression) {
    // for loop body
}

1. The initialExpression initializes and/or declares variables and executes only once.
2. The condition is evaluated.

    * If the condition is false, the for loop is terminated.
    * If the condition is true, the block of code inside of the for loop is executed.

3. The updateExpression updates the value of initialExpression when the condition is true.
4. The condition is evaluated again. This process continues until the condition is false.
*/

/*-------------------------------------->
Example 1: Display a Text Five Times
<----------------------------------------
// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

: OUTPUT :
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.

Iteration	        Variable	          Condition: i <= n	              Action

                    i = 1                                                 I love JavaScript. is printed.
1st                                       true
					n = 5                                                 i is increased to 2.


					i = 2		                                          I love JavaScript. is printed.
2nd                                       true
	                n = 5                                                 i is increased to 3.


					i = 3		                                          I love JavaScript. is printed.
3rd                                       true
                    n = 5                                                 i is increased to 4.


					i = 4	                                              I love JavaScript. is printed.
4th                                       true
                    n = 5                                                 i is increased to 5.


					i = 5		                                          I love JavaScript. is printed.
5th	                                      true
	                n = 5                                                 i is increased to 6.


                    i = 6
6th                                       false                           The loop is terminated.
					n = 5
*/

/*-------------------------------------->
Example 2: Display Numbers from 1 to 5
<----------------------------------------
// program to display numbers from 1 to 5
const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}

: OUTPUT :
1
2
3
4
5

Iteration	        Variable	        Condition: i <= n	        Action

                    i = 1                                           1 is printed.
1st                                     true                                          i is
					n = 5                                           increased to 2.


                    i = 2                                           2 is printed.
2nd                                     true                                          i is
					n = 5                                           increased to 3.


                    i = 3                                           3 is printed.
3rd                                     true                                          i is
					n = 5                                           increased to 4.


                    i = 4                                           4 is printed.
4th                                     true                                          i is
					n = 5                                           increased to 5.


                    i = 5                                           5 is printed.
5th                                     true                                          i is
					n = 5                                           increased to 6.


                    i = 6
6th                                     false                       The loop is terminated.
					n = 5
*/

/*-------------------------------------->
Example 3: Display Numbers from 5 to 1
<----------------------------------------
// program to display numbers from 1 to 5
const n = 0;

// looping from i = 5 to 1
// in each iteration, i is decreased by 1
for (let i = 5; i >= n; i--) {
    console.log(i);     // printing the value of i
}

: OUTPUT :
5
4
3
2
1
0
*/

/*--------------------------------------------->
Example 4: Display Sum of n Natural Numbers
<-----------------------------------------------
// program to display the sum of natural numbers
let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);

: OUTPUT :
sum = 5050

(Here, the value of sum is 0 initially. Then, a for loop is iterated from i = 1 to 100.
In each iteration, i is added to sum and its value is increased by 1.

When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.)


The above program to add sum of natural numbers can also be written as :-
// program to display the sum of n natural numbers
let sum = 0;
const n = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = n; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:',sum);
*/

/*----------------------------------------------------------------->
Example 5: display numbers from 1 to 5 and 5 to 1 simultaneously.
<-------------------------------------------------------------------
let i, j;
for(i = 1, j = 5; i <= 5; i++, j--){
    document.write(i+" "+ j+ "<br>");
}

: OUTPUT :
1 5
2 4
3 3
4 2
5 1

(In this for loop structure, we have used two initialization expressions (i = 1, and j = 5) and
two iteration expressions (i++, and j- -). But, there is only one test conditional expression (i < = 5).
The loop will print i and j values from 1 to 5 and from 5 to 1, respectively.)

( Note: The for loop can have more than one initialization expression and iteration expression.
This feature cannot apply in other loops. Each expression must separate from the next by comma. )

[ ~PROGRAM CODE~ ]
let x, y;
for(x = 1, y = 5; x < y; x++, y--)
{
    document.write("x = " + x, "<br>");
    document.write("y = " + y, "<br>");
}
(In this example, the initialization section comprises two control variables x and y that comma has separated.
The expressions (x++ and y- -) separated by commas in the iteration section will execute each time the loop repeats.)

[ ~PROGRAM CODE~ ]
let i, j;
for(i = 0, j = 0; (i + j) < 5; i++, j += 1)
{
    document.write("Hello JavaScript", "<br>");
}
*/

/*-------------------------------------------->
Example 5: JavaScript Infinite for loop
<----------------------------------------------
If the test condition in a for loop is always true, it runs forever (until memory is full). For example,

// infinite for loop
for(let i = 1; i > 0; i++) {
    // block of code
}

In the above program, the condition is always true which will then run the code for infinite times.
*/