/*
============================================
; Title: Pinson-Discussion 5.1.js
; Author: James Pinson
; Date: November 11th 2020
; Description: This is a simple JavaScript program using a keyed collection array that contains at least two errors. 
;============================================
*/


/*
Expected Outcome:
-- Favorite Wrestlers --


Wrestler: Shawn Michaels
Finisher: Sweet Chin Music
Alignment: Face
Rating: 10


Wrestler: Stone Cold Steve Austin
Finisher: Stone Cold Stunner
Alignment: Face 
Rating: 9


Wrestler: The Rock
Finisher: The Rock Bottom
Alignment: Face
Rating: 8


Wrestler: Randy Orton
Finisher: RKO
Alignment: Heel 
Rating: 7



*/


//This is setting the array and keys for the variable wrestlers. 
// Correction: missing comma after first key value pair object for wrestlers and after "RKO"
const wrestlers = [
    {
        name: "Shawn Michaels",
        finisher: "Sweet Chin Music",
        alignment: "Face",
        rating: 10
    },
    {
        name: "Stone Cold Steve Austin",
        finisher: "Stone Cold Stunner",
        alignment: "Face",
        rating: 9
    },
    {
        name: "The Rock",
        finisher: "The Rock Bottom",
        alignment: "Face",
        rating: 8
    },
    {
        name: "Randy Orton",
        finisher: "RKO",
        alignment: "Heel",
        rating: 7
    }
];


//This should call the program heading. 
console.log("-- Favorite Wrestlers -- ")


//This should call my keyed collection array in a formatted way. 
// Corrected spelling error in name of wrestler.name to wrestlers
wrestlers.sort().forEach(function(wrestlers){
    console.log(
        " \n Wrestler: " + wrestlers.name + " \n Finisher: " + wrestlers.finisher + " \n Alignment: " + wrestlers.alignment + " \n Rating: " + wrestlers.rating + "\n"
    );
});


//This is the end of the program.

