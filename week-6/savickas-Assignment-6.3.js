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
let headerValue = header.display("Grayton", "Savickas", "Assignment 6.3")
console.log(headerValue + "\n");

// start of program

// creates a new object called ticket with keys of id, name and requestor
let ticket = new Object({
    id: 101,
    name: "Help Desk Support",
    requestor: "Bob Jones"
});

// displays output
console.log(ticket);

// end of program