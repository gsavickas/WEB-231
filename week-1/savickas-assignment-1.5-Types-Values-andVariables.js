/*============================================
; Title: Types-Values-Variables
; Author: Grayton Savickas
; Date: 23 Oct 2020
; Modified By: N/A
; Description: This program demonstrates the
; use of JavaScript types, values,
; and variables in an application.
;===========================================*/
// var firstName = "Grayton";
// var lastName = "Savickas";
// var address = "42 Wallaby Way, Sydney AU";
// var hireDate
// var payRate

// Declare all variables and assign values
var firstName = "Edgar";
var lastName = "Poe";
var address = "Boston, Massachusetts"
// Assign hireDate a new Date object
var hireDate = new Date(1849, 9, 7);
var payRate = 18.09;
// Print the values including the payRate with the .toFixed method in order to keep one decimal place
console.log(firstName, lastName, address, payRate.toFixed(1));
// Format the Date output by assigning formatHireDate with Date object get methods. Added / directly
var formatHireDate = hireDate.getDate() + "/" + hireDate.getMonth() + "/" + hireDate.getFullYear();
console.log(formatHireDate);
console.log("");

// Repeated Process from above. I Would refactor by creating an employee object.
var firstName = "Fredrick";
var lastName = "Nietzsche";
var address = "Saxony, Prussia"
var hireDate = new Date(1900, 7, 25);
var payRate = 18.44;
console.log(firstName, lastName, address, payRate.toFixed(1));
formatHireDate = hireDate.getDate() + "/" + hireDate.getMonth() + "/" + hireDate.getFullYear();
console.log(formatHireDate);
console.log("");

// Repeated Process from above. I Would refactor by creating an employee object.
var firstName = "Andrea";
var lastName = "Jeremiah";
var address = "Tamil Nadu, India"
var hireDate = new Date(2012, 04, 18);
var payRate = 20.01;
console.log(firstName, lastName, address, payRate.toFixed(1));
formatHireDate = hireDate.getDate() + "/" + hireDate.getMonth() + "/" + hireDate.getFullYear();
console.log(formatHireDate);