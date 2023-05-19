/* ###########################
        ( INTRODUCTION )
############################## */
/*
    * The condition or expression evaluates at the end of loop rather than the beginning.
        This means that the body of loop always executes at least once.
*/


/*#############################
        ( SYNTAX )
###############################*/
/*

// Initialization:
do {
    // Loop body;
    statement(s);
    Increment/decrement;
} while (test conditional expression);

1. The body of the loop is executed at first. Then the condition is evaluated.
2. If the condition evaluates to true, the body of the loop inside the do statement is executed again.
3. The condition is evaluated once again.
4. If the condition evaluates to true, the body of the loop inside the do statement is executed again.
5. This process continues until the condition evaluates to false. Then the loop stops.

( Note: do...while loop is similar to the while loop. The only difference is that in do…while loop,
the body of loop is executed at least once. )
*/


/*---------------------------------------->
Example 1: Display Text
<------------------------------------------
let count = 1;
do {
    document.write("This is do while loop statement.");
    count++;
}while(count > 2);

: OUTPUT :
This is do while loop statement.
*/


/*---------------------------------------->
Example 2: Display Numbers from 1 to 5
<------------------------------------------
let x;
x = 1; // starting number is 1.
do {
    document.write(x, "<br>"); // print x value.
    x++; // increment x value by 1.
} while(x <= 5); // This statement will execute as long as x <= 5.

: OUTPUT :
1
2
3
4
5

Iteration	    Variable	     Condition: i <= n	      Action

                i = 1
                n = 5	         not checked	          1 is printed. i is increased to 2.


1st	            i = 2
                n = 5	         true	                  2 is printed. i is increased to 3.


2nd	            i = 3
                n = 5	         true	                  3 is printed. i is increased to 4.


3rd	            i = 4
                n = 5	         true	                  4 is printed. i is increased to 5.


4th	            i = 5
                n = 5	         true	                  5 is printed. i is increased to 6.


5th	            i = 6
                n = 5	         false	                  The loop is terminated
*/


/*---------------------------------------->
Example 3: Sum of Positive Numbers
<------------------------------------------
// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);

: OUTPUT :
Enter a number: 2
Enter a number: 4
Enter a number: -500
The sum is 6.

(Here, the do...while loop continues until the user enters a negative number.
When the number is negative, the loop terminates; the negative number is not added to the sum variable.)
/*


/*--------------------------------------------->
Example 4: display the multiplication table.
<-----------------------------------------------
let row, column;
document.write("Multiplication Table:", "<br>");
row = 1; // Initialization.
do {
    column = 1;
    do {
        let x = row * column;
        document.write(x, " ");
        column = column + 1;
    }while(column <= 5);
    document.write("<br>");
    row = row + 1;
} while(row <= 5);

: OUTPUT :
    Multiplication Table:
    1 2 3 4 5
    2 4 6 8 10
    3 6 9 12 15
    4 8 12 16 20
    5 10 15 20 25
*/