/*
============================================
; Title:  heredia-discussion-5.1.js
; Author: Professor Krasso
; Date:   18 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using a
; keyed collection array with at least
; two (2) errors
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
// const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
// console.log(header.display("Daniel", "Heredia", "Assignment 5.1"));
// console.log("");

/*
    Expected output:

    Daniel Heredia
    Assignment 5.1
    Date: 11/18/2020

    Map(4) {American => Burgers and Fries, Mexican => Tacos, Italian => Pizza, Breakfast => Eggs and Bacon}
*/

// start program

//Creates a collection of elements
// Corrected: capitalized map to Map();
let food = new Map();

//Sets the Key value pairs for the array
// Corrected missing , after Italian on line 42
food.set('American', 'Burgers and Fries' );
food.set('Mexican' , 'Tacos');
food.set('Italian',  'Pizza');
food.set('Breakfast' , 'Eggs and Bacon');

//Outputs the both the key and value pairs
console.log(food);

// end program