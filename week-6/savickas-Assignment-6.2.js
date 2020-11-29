/*
============================================
; Title:  Exception Handling
; Author: Grayton Savickas
; Date:   28 Nov 2020
; Modified By: 
; Description: Program that demonstrates exception handling
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Discussion 6.2")
console.log(headerValue + "\n");

// start of program

try {

    let x = 3

    let y = "two"
// squared stores x to the power of y using Math.pow method
    let squared = Math.pow(x, y)
    
// If either of the variables were to not an integers then this will throw and error
if (y === parseInt(y) || x === parseInt(x)) throw "One of the values is NaN";

    console.log(squared);
// This will catch any error
} catch (err) {

    console.log("Catch clause: " + err);
// finally with end the program
} finally {

    console.log("Finally clause: End of program ...");

}

// end of program