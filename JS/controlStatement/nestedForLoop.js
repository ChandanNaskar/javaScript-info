/* ###########################
        ( INTRODUCTION )
############################## */
/*
    * Nested for loops in JavaScript means one for loop inside another for loop. In other words,
    a for loop placed inside another for loop is called nested for loops.

    * A nested for loops consists of an outer for loop and one or more inner for loops.
    Each time the outer for loop repeats, the control re-enters inside the inner for loop and starts a new execution.

    * That is, each time the control will enter inside the inner for loop when the outer for loop repeats.
*/


/*#############################
        ( SYNTAX )
###############################*/
/*
// Outer for loop.
for ( initialization; test-condition; increment/decrement )
{
// Inner for loop.
    for ( initialization; test-condition; increment/decrement )
    {
    // statement of inner loop
    }
 // statement of outer loop
}

( ~ Let’s understand it with the help of an example. ~ )

for(var i = 1; i <= 3; i++)
{
  statement1; // This statement will execute 3 times when the value of i changes between 1 and 3.
}
for(var j = 1; j <= 4; j++)
{
  statement2; // This statement will execute 4 times when the value of j changes between 1 and 4.
}

( ~ If we write the second for loop inside the first for loop, it will look like this: ~ )

for(var i = 1; i <= 3; i++)
{
  statement1; // It will execute 3 times.
  for(var j = 1; j <= 4; j++)
  {
   statement2; // It will execute 12 (3 * 4) times.
  }
}
*/


/*----------------------------------------->
******** While loop under For loop ********
<-------------------------------------------

  * In the same way, we can also nest a while loop or a do-while loop inside a for loop and vice versa.
  These are called nested loops in JavaScript.

  * The general syntax to nest while loop inside a for loop is as:

for(initialization; test-condition; increment/decrement)
{
  statements;
  while(conditional expression)
  {
    statements;
  }
}
*/


/*
[ 1. Let’s create a JavaScript program in which we will display values of the inner for loop for each outer iteration,
    as well as outer for loop. ]

// Outer for loop.
for(var i = 1; i <= 3; i++)
{
  document.write(i, "<br>"); // will execute 3 times.
  // Inner for loop.
  for(var j = 1; j <= 4; j++)
  {
    document.write(j, " "); // will execute 12 (3 * 4) times.
  }
  document.write("<br>");
}

: OUTPUT :
    1
    1 2 3 4
    2
    1 2 3 4
    3
    1 2 3 4
*/


/*
[2. Let’s create a JavaScript program to print tables using nested for loop.]

let i, j;
document.write("Tables:", "<br>");
// Outer for loop.
for(i = 1; i <= 2; i++){
  // Inner for loop.
  for(j = 1; j <= 10; j++){
    document.write(i+ " * " +j+ " = "+ (i*j), "<br>");
  }
  document.write("");
}

: OUTPUT :
    Tables:
    1 * 1 = 1
    1 * 2 = 2
    1 * 3 = 3
    1 * 4 = 4
    1 * 5 = 5
    1 * 6 = 6
    1 * 7 = 7
    1 * 8 = 8
    1 * 9 = 9
    1 * 10 = 10

    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    2 * 4 = 8
    2 * 5 = 10
    2 * 6 = 12
    2 * 7 = 14
    2 * 8 = 16
    2 * 9 = 18
    2 * 10 = 20
*/


/*
[3. Let’s write JavaScript program to display triangle of * using nested for loop.]

let i, j;
document.write("Displaying a triangle of *:", "<br>");
// Outer for loop.
for(i = 1; i <= 5; i++)
{
// Inner for loop.
for(j = 1; j <= i; j++)
{
  document.write("* ");
}
document.write("<br>");
}

: OUTPUT :
     Displaying a triangle of *:
     *
     * *
     * * *
     * * * *
     * * * * *
*/


/*
[4. Let’s create a JavaScript program to display a triangle of numbers using nested for loops.]

let i, j;
document.write("Displaying a triangle of numbers:", "<br>");
// Outer for loop.
for(i = 1; i <= 5; i++)
{
  // Inner for loop.
  for(j = 1; j <= i; j++)
  {
    document.write(j);
  }
document.write("<br>");
}

: OUTPUT :
    Displaying a triangle of numbers:
    1
    12
    123
    1234
    12345
*/


/*
[5. Let’s create a JavaScript program to display right triangle pattern of numbers.]

let i, j;
document.write("Displaying Right Triangle Pattern:", "<br>");
// Outer for loop.
let k = 1;
for(i = 1; i <= 5; i++)
{
  // Inner for loop.
  for(j = 1; j <= i; j++)
  {
    document.write(k);
  }
  document.write("<br>");
  k++;
}

: OUTPUT :
    Displaying right triangle pattern:
    1
    22
    333
    4444
    55555
*/


/*
[6. Let’s create a JavaScript program to display the following number pattern.]

let i, j;
for(i = 5; i >= 1; i--)
{
  for(j = 1; j <= i; j++)
  {
    document.write(j, " ");
  }
document.write("<br>");
}

: OUTPUT :
      1 2 3 4 5
      1 2 3 4
      1 2 3
      1 2
      1
*/


/*
[7. Let’s write JavaScript code to print the following alphabet pattern using JavaScript nested for loops.]

let i, j;
for(i = 65; i <= 69; i++)
{
  for(j = 65; j <= i; j++)
  {
    document.write(String.fromCharCode(j));
  }
document.write("<br>");
}

: OUTPUT :
    A
    AB
    ABC
    ABCD
    ABCDE
*/


/*
[8. Let’s create a JavaScript program to display another alphabet pattern using nested for loops.]

let i, j;
for(i = 69; i >= 65; i--)
{
  for(j = 65; j <= i; j++)
  {
    document.write(String.fromCharCode(j));
  }
document.write("<br>");
}

: OUTPUT :
    ABCDE
    ABCD
    ABC
    AB
    A
*/


/*
[Example : 9]

let i, j;
let k = 65;
for(i = 65; i <= 69; i += 2)
{
  for(j = 69; j >= 65; j--)
  {
    if(j > i)
      document.write("&nbsp;&nbsp;");
    else
      document.write(String.fromCharCode(k++)+"&nbsp;&nbsp;");
  }
document.write("<br>");
}

: OUTPUT :
      A
    B  C  D
  E  F  G  H  I
*/


/*
[Example : 10]

let i, j, k, m = 1;
for(i = 1; i <= 5; i++)
{
  for(j = 5; j > i; j--)
  {
    document.write("&nbsp;&nbsp;");
  }
  for(k = 1; k <= i; k++)
  {
    document.write(k +"&nbsp;&nbsp;");
  }
document.write("<br>");
}

: OUTPUT :
     1
    1  2
   1  2  3
  1  2  3  4
 1  2  3  4  5
*/


/*
[Example : 11]

  let i, j, k;
  for(i = 1; i <= 4; i++)
  {
    for(j = i; j < 4; j++)
    {
      document.write("&nbsp;&nbsp;");
    }
    for(k = 1; k < i*2; k++){
      document.write("*");
    }
    document.write("<br>");
  }

: OUTPUT :
     *
    ***
   *****
  *******
*/