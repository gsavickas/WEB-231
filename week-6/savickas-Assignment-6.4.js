/*
============================================
; Title:  Nested Object Literals
; Author: Grayton Savickas
; Date:   28 Nov 2020
; Modified By: 
; Description: Program that demonstrates nested object literals
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
; - w3Schools: JavaScript Date Objects - https://www.w3schools.com/js/js_dates.asp
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Assignment 6.4")
console.log(headerValue + "\n");

// start of program

// creates a new object called ticket with keys of id, name and requestor
let ticket = new Object({
    id: 101,
    name: "Help Desk Support",
    dateCreated: new Date(),
    priority: "Red",
        // creates a nested object literal that stores sub-key value pairs under the person field
    person: {

        id: 101,
        firstName: "Grayton",
        lastName: "Savickas",
        jobTitle: "Supervisor"

        }
});

// Converts date to a more readable formate using the .toDateString method of the date object
x = ticket.dateCreated;
y = x.toDateString();

// displays output
console.log("Ticket " + ticket.id + " was created on " + y + " assigned to employee " + ticket.person.firstName +
 " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");