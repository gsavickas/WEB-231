/*
============================================
; Title:  Filtering Arrays
; Author: Professor Krasso
; Date:   14 Nov 2020
; Modified By: Grayton Savickas
; Description: Utilize Filtering Arrays
; Attribution: JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Exercise 4.3")
console.log(headerValue + "\n");


// Array of vehicle names
let vehicleArray = ["Toyota", "Nissan", "Ford", "Subaru", "Dodge"];

// Console.logs all elements of vehicleArray
console.log(vehicleArray + "\n");

/**
* getValue
* Params: Array, String
* Response: Console.log
* Description: Function that iteratively compares the value of arg String to elements of the arg Array
*/
function getValue(Array, String){
    for(let element of Array){
        if (element == String){
            console.log(element)
        }
    }
}

// Calls getValue function on vehicle Array
getValue(vehicleArray, "Ford");