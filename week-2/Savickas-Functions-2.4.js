/*
============================================
; Title:  Functions with parameters
; Author: Professor Krasso
; Date:   31 Oct 2020
; Modified By: Grayton Savickas
; Description: Create functions with parameters
;===========================================
*/

/**
 * Calls on the header.display() function imported from Savickas-header.js
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('./Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Header")
console.log(headerValue);
console.log("\n");
// 1. function that takes a first and last name and returns those values
/**
* Params: firstName, lastName
* Response: return
* Description: Returns a well-formatted string header
*/
function fullName(firstName, lastName){
return (firstName + " " + lastName);
};
var nameTest = fullName("Grayton", "Savickas");
console.log("Hello my name is " + nameTest);
console.log("\n");
// 2. collects year, month and day for a date object and returns the object
// subtracts 1 from the month due to the 0 indexing
/**
* Params: year, month, day
* Response: return
* Description: Returns a date object
*/
function dateWriter(year, month, day){
  var writtenDate = new Date(year, (month - 1), day);
  return writtenDate;
};
// 3. Adds formatting to first parameter number by adding numberOfFixedPositions
/**
* Params: number, numberOfFixedPositions
* Response: return
* Description: Returns a number with fixed number of positions
*/
function formatNumber(number, numberOfFixedPositions){
  return number.toFixed(numberOfFixedPositions);
};

var dateWriterTest = dateWriter(1993, 11, 25);
var formatNumberTest = formatNumber(65.333, 1);
console.log("Today's date is " + dateWriterTest + " and the current temperature is " + formatNumberTest + " degrees");
console.log("\n");
// 4. Converts a string to a integer
/**
* Params: string
* Response: returns int
* Description: Returns a integer parsed from the string parameter
*/
function convertToInt(string){
  x = parseInt(string);
  return x
}

// 5. Converts a string to a float
/**
* Params: string
* Response: returns float
* Description: Returns a float parsed from the string parameter
*/
function convertToFloat(string){
  x = parseFloat(string)
  return x
}
var convertToIntTest = convertToInt("27 years old");
var convertToFloatTest = convertToFloat("10000 dollars");
console.log("I am " + convertToIntTest + " years old and my savings account goal is " + convertToFloatTest)
