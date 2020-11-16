/*
============================================
; Title:  Predicates Arrays
; Author: Professor Krasso
; Date:   14 Nov 2020
; Modified By: Grayton Savickas
; Description: Utilize Predicate to use .filter() method
; Attribution: JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Exercise 4.4")
console.log(headerValue + "\n");


// Array of state names
let stateArray = ["Pennsylvania", "Nevada", "Michigan", "Wyoming", "Colorado"];
console.log(stateArray + "\n");

/**
* getState
* Params: String1, String2
* Response: Returns
* Description: Function that compares 2 strings and returns a boolean true if they equal
*/
function getState(String1, String2){
    if (String1 == String2){
        return true;
    }
    else
    return false;
}

// Value that we are looking to filter
let n = "Nevada"
console.log(n + " is the value we want!" + "\n")

// Assigning x the value of Filter method that finds elements equal to Nevada
// IMPORTANT NOTE: For unknown reasons it may take 2 runs in debugging for the console of x to appear 
let x = stateArray.filter(function(x) {
    console.log(x)
     return getState(x, n)
});

console.log("\n");

// Output
console.log(x);
