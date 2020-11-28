/*
============================================
; Title:  Objects and build-in Objects
; Author: Grayton Savickas
; Date:   26 Nov 2020
; Modified By: 
; Description: Program that demonstrates object properties
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Discussion 6.1")
console.log(headerValue + "\n");

// start of program

// Creates object called tree
let tree = new Object({type: "spruce", leaves: "green", height: 12});

// displays the tree object attributes
console.log(tree);

// changes tree.height object property to 15
tree.height = 15;

// displays the tree.height object attributes
console.log("Your tree grew to " + tree.height + " feet!");

// end program