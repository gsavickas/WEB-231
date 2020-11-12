/*
============================================
; Title:  Function Properties
; Author: Professor Krasso
; Date:   31 Oct 2020
; Modified By: Grayton Savickas
; Description: Displays a formatted header
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
var headerValue = header.display("Grayton", "Savickas", "Header")
console.log(headerValue);

// function property
myName.Savickas = "Savickas";

// function
function myName(){
  return myName.Savickas;
}

// output
console.log('\n');
console.log("Hello there, my name is " + myName() + ". What is yours?");
// end program
