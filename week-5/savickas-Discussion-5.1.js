/*
============================================
; Title:  Arrays
; Author: Grayton Savickas
; Date:   18 Nov 2020
; Modified By: 
; Description: Advanced Arrays
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
; - MDN web docs moz://a : Keyed collections
; - IMDb TV : https://www.imdb.com
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Discussion 5.1")
console.log(headerValue + "\n");

// This Map stores a collection of movies/TV from IMDB and their rating making a Title : Rating Set
let movieList = new Map();
movieList.set("The Queen's Gambit", 8.8);
movieList.set("Paranormal", 8.5);
movieList.set("The Mandalorian", 8.7);
movieList.set("Joker (2019)", 8.5)

// Displays keys and values of the Map movieList as below

// The Queen's Gambit is rated 8.8 Out of 10!
// Paranormal is rated 8.5 Out of 10!
// The Mandalorian is rated 8.7 Out of 10!
// Joker (2019) is rated 8.5 Out of 10!

for(let [key, value] of movieList){
    console.log(key + " is rated " + value + " Out of 10!")
}

// console.log(movieList);