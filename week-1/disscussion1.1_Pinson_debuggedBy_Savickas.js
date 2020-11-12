/*
Title: Discussion 1.1
Author: James Pinson
Date: 10/22/2020
Description: A Javascript program with two errors
Modified by Savickas
*/

//start program
//Below is a javascript program that contains two errors.
/*
Expected Output
JamesPinson
10/22/20
*/

// Corrected naming convention for vars to have camelCase
var firstName= "James";
var lastName= "Pinson";
var todaysDate= new Date();
// Added a formatTodaysDate variable and assigned it the values to match intended output
var formatTodaysDate = (todaysDate.getMonth() + 1 ) + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();

// Corrected assignment of console.log to be included in the output by placing them inside the () after console.log()
// Corrected Firstname to be firstName following proper camelCase
console.log(firstName + lastName)
console.log(formatTodaysDate)
