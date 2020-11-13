/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   12 Nov 2020
; Modified By: Grayton Savickas
; Description: Displays two arrays with different values
; Attribution: JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
;===========================================
*/
const header = require('../week-2/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Arrays")
console.log(headerValue);

// Array that stores ints 1 through 5
let testArray1 = [1 2 3 4 5];

// Array that stores all numbers 1 through 9 via the "..." iterable operator
let testArray2 = [...1239];

// Output
console.log(testArray1);
console.log(testArray2);