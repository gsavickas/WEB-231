/*
============================================
; Title:  Pattern Matching Function
; Author: Professor Krasso
; Date:   31 Oct 2020
; Modified By: Grayton Savickas
; Description: Uses Control statements to compare values
;===========================================

  // output from the match() function
  false
  true
  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

/**
 * Calls on the header.display() function imported from Savickas-header.js
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../week-2/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Pattern Matching Function")
console.log(headerValue);

// variable
var testVar1 = "Train";
var testVar2 = "Plane";
var testVar3 = "Automobile";
var testVar4 = "Boat";
var testVar5 = "boat";
var testVar6 = "Train";

/**
* Params: arg1, arg2
* Response: returns boolean
* Description: Returns true if arg1 and arg2 are === equal. Returns false if they are not.
*/
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

if (match(testVar4, testVar5)){
  logMatch(testVar4, testVar5)
}
else{
  logMismatch(testVar4, testVar5)
}

