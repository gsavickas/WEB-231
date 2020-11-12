/*
============================================
; Title:  3.4
; Author: Professor Krasso
; Date:   7 Oct 2020
; Modified By: Grayton Savickas
; Description: Use the 4 different loops
;===========================================
*/
const header = require('../week-2/Savickas-header')
var headerValue = header.display("Grayton", "Savickas", "3.4")
console.log(headerValue);

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.
  FirstName LastName
  Assignment 3.4
  Today's Date
  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
  6 does not match 5!
*/

// variables
var inputNum = 6;

// Functions from assignment 3.2
function match(arg1, arg2){
  if (arg1 === arg2)
    return true
  else
    return false
}

function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!")
}

function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!")
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// Main logic body
// For loop that compares 10 numbers to the variable inputNum
console.log('-- DO THE NUMBERS MATCH GAME --');
for (i = 0; i<10; i++){
  x = randomNumber();
  if (match(x, inputNum)){
    logMatch(x, inputNum);
  }
  else{
    logMismatch(x, inputNum)
  }
}


