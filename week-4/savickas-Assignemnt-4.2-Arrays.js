/*
============================================
; Title:  Arrays
; Author: Professor Krasso
; Date:   13 Nov 2020
; Modified By: Grayton Savickas
; Description: Utilize Arrays
; Attribution: JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
;===========================================
*/

const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Exercise 4.2")
console.log(headerValue + "\n");


// Array of fruit names stored as strings
let fruitsArray = ["Banana", "Apple", "Orange", "Tomato", "Watermelon"];

/**
* getFruit
* Params: Array
* Response: Console.log
* Description: Function that iteratively console.logs evey element of the argument array
*/
function getFruit(Array){
    for(let element of Array) {
        console.log(element);
    }    
}
// Expected to console.log all elements of the fruitsArray 
getFruit(fruitsArray)