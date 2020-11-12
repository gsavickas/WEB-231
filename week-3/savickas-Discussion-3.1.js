/*
============================================
; Title:  Discussion 3.1 Control Statements
; Author: Professor Krasso
; Date:   5 Nov 2020
; Modified By: Grayton Savickas
; Description: Statement Errors for Discussion
;===========================================
*/

/**
 * Calls on the header.display() function imported from Savickas-header.js
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../week-2/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Control Statements")
console.log(headerValue);

// Example of a for loop
// This example should out put the value of i iteratively 10 times
var i;
for (i = 0; i < 10; i++){
    console.log("The value is " + i);
    i++;
}

// Example of an if statement
// This if else statement should output if the value of i is greater than, less than or equal to the value of 6
if (i == 6){
  console.log("i equals 6")
}
 else(i < 5){
  console.log("i is less than 6")
}
else{
  console.log("i is greater than 5")
};
