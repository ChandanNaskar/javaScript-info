/* ###########################
        ( INTRODUCTION )
############################## */
/*
      * JavaScript while loop is the simplest of all the looping structures.
        It is an entry-controlled loop statement.

      * In the entry-controlled loop, the test condition evaluates first.
        If the specified condition is true, then the body of loop executes.

      * If the condition does not satisfy, then the body of loop does not execute.
        Thus, the while loop executes a block of statements repeatedly while the test condition is true.
*/


/*############################
        ( SYNTAX )
############################## */
/*

Initialization;
while (test condition)
{
// Loop body
statement(s);
}

1. A while loop evaluates the condition inside the parenthesis ().
2. If the condition evaluates to true, the code inside the while loop is executed.
3. The condition is evaluated again.
4. This process continues until the condition is false.
5. When the condition evaluates to false, the loop stops.
*/


/*---------------------------------------->
Example 1: Display Hell World Five Times
<------------------------------------------
// Initialization. This variable has defined outside the loop and will update inside the loop.
let count = 0;

// Declare while loop statement.
// Loop continuation conditional expression that must always appear inside the parentheses.
while (count < 5) {
        // Body of the loop.
        document.write("Hello world!"); // This statement will execute while the condition is true.
        count++; // It counts the number of executions, and increments count by 1.
}

statements; // continue program if the condition is false.

: OUTPUT :
Hello world!
Hello world!
Hello world!
Hello world!
Hello world!
*/


/*---------------------------------------->
Example 2: Display Numbers from 1 to 5
<------------------------------------------
// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
        console.log(i);
        i += 1;
}

: OUTPUT :
1
2
3
4
5

Iteration	Variable	Condition: i <= n	Action

                i = 1
1st                             true                    1 is printed. i is increased to 2.
                n = 5


                i = 2
2nd                             true                    2 is printed. i is increased to 3.
                n = 5


                i = 3
3rd                             true                    3 is printed. i is increased to 4.
                n = 5


                i = 4
4th                             true                    4 is printed. i is increased to 5.
                n = 5


                i = 5
5th                             true                    5 is printed. i is increased to 6.
                n = 5


                i = 6
6th                             false                   The loop is terminated.
                n = 5
*/


/*---------------------------------------->
Example 3: Display Numbers from 5 to 1
<------------------------------------------
let i = 5;
while(i >= 1){
        document.write(i, "<br/>");
        i--; // decrement.
}

: OUTPUT :
5
4
3
2
1
*/


/*---------------------------------------->
Example 4: Display The Sum of 1 to 10
<------------------------------------------
let sum = 0, i = 1;
while (i <= 10)
{
        sum = sum + i;
        i++;
}
document.write("Sum is " + sum);

: OUTPUT :
sum is 55
*/


/*---------------------------------------->
Example 5: Sum of Positive Numbers Only
<------------------------------------------
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {
        // add all positive numbers
        sum += number;

        // take input again if the number is positive
        number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);

: OUTPUT :
Enter a number: 2
Enter a number: 5
Enter a number: 7
Enter a number: 0
Enter a number: -3
The sum is 14.

( Here, parseInt() is used because prompt() takes input from the user as a string.
And when numeric strings are added, it behaves as a string.
For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.

The while loop continues until the user enters a negative number.
During each iteration, the number entered by the user is added to the sum variable.

When the user enters a negative number, the loop terminates. Finally, the total sum is displayed. )
*/


/*-------------------------------------------->
While loop without Loop Body Example Program
<----------------------------------------------
[ A. Consider another example program where the body of while loop will be empty.
We will calculate the mid-value between “x” and “y” where “x” is equal to 10 and “y” is equal to 20.]

let x = 10, y = 20;
while (++x < --y); // No body in this loop.
document.write("Mid value is " + x, "<br>");

: OUTPUT :
Mid value is 15
*/


/*
[ B. Consider an example program in which we will display numbers between 5 and 10 using while loop statement.]

let x = 5
while ((x >= 5) && (x < 10))
{
        document.write("Value of x: " + x, "<br>");
        x++;
}

: OUTPUT :
        Value of x: 5
        Value of x: 6
        Value of x: 7
        Value of x: 8
        Value of x: 9
*/