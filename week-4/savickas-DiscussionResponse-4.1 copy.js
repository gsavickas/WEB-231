/*
===============================================
; Title: Discussion Board 4.1 - Arrays
; Author: Mark Watson
; Date: 11 November 2020
; Modified by Grayton Savickas
; Description: This program is intended to generate 10 random integers within an array. If the amount of even numbers generated within the array is seven (7) or greater, the program will print "You WIN!!!" otherwise, it will print "Sorry, you LOSE... try again".
===============================================
*/

/*
  Possible expected output:

    YOUR LOTTERY NUMBERS ARE:
    [35, 25, 14, 24, 22, 9, 48, 18, 21, 17]

    Amount of even numbers: 5

    Sorry, you LOSE... try again
    (or "You WIN!!!" if amount of even numbers is 7 or greater)
*/

// start program

// CORRECTION when declaring a new array and specifiying the number of elements us the () syntax intead of [] - Grayton

let lottoNums = new Array(10); //array intended for ten (10) randomly generated lottery numbers
let evenNums = []; //empty array for storage of even numbers

/**
 * Params: number
 * Response: check if number is even - if even, store number at the end of evenNums array
 * Description: stores even number into evenNums array
 */
function checkEven(num) {
  if (num % 2 === 0) {
    evenNums.push(num);
  }
}

/**
 * a loop which generates 10 random integers from 0-51 and places them in the lottoNums array in order of the index number (i), then uses checkEven function for each generated number
*/

// CORRECTION: when using the .push method and other methods the first letter of the first word is lowercase - Grayton

for (i = 0; i < lottoNums.length; i++) {
  lottoNums[i] = Math.floor(Math.random() * 52);

  checkEven(lottoNums[i]);
}

// output
console.log('YOUR LOTTERY NUMBERS ARE:')
console.log(lottoNums, '\n'); //new line
console.log(`Amount of even numbers: ${evenNums.length}`, '\n') //new line

/**
 * result output
 * checks if amount of numbers in evenNums array is 7 or greater
 * prints WIN or LOSE depending on the result of conditional statement
*/
if (evenNums.length >= 7) {
  console.log('You WIN!!!');
} else {
  console.log('Sorry, you LOSE... try again')
}

// end program

