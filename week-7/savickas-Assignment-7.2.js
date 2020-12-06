/*
============================================
; Title:  Constructor Functions Assignment 7.2
; Author: Grayton Savickas
; Date:   6 Dec 2020
; Modified By: 
; Description: Program that demonstrates object properties
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Assignment 7.2")
console.log(headerValue + "\n");

// start of program
employeeList = [
    new employee(421, "Grayton", "Savickas", "Supervisor"),
    new employee(422, "Bobby", "Hill", "Cook"),
    new employee(423, "Sarah", "Conner", "Analyst"),
    new employee(424, "Joe", "Dirt", "Labor"),
    new employee(425, "Doom", "Slayer", "Weapon")
];

// Creates an constructor for a new employee object with 4 different parameters
function employee(id, firstName, lastName, title){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}


employeeList.forEach(element => {
    console.log(element.id + " " +  element.firstName + " " + element.lastName + " " + element.title);
});

// end of program