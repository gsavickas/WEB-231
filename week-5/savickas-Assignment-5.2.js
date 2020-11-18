/*
============================================
; Title:  ES5 Built-In Functions
; Author: Grayton Savickas
; Date:   18 Nov 2020
; Modified By: 
; Description: Construct arrays that can we can use .forEach functions on
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
; - MDN web docs moz://a : Keyed collections
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Exercise 5.2")
console.log(headerValue + "\n");

// Array of my favorite foods
let favFoods = ["Pizza", "Chicken Tikka Masala", "Pulled Pork Sandwich", "Kimchi Ramen", "Unagi Sushi"];

// Iteration over favFoods array with the build in .forEach method of arrays and console.log each element in the array
favFoods.forEach(value => {console.log(value)});
