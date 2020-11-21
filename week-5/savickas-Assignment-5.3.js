/*
============================================
; Title:  Array like object collection
; Author: Grayton Savickas
; Date:   18 Nov 2020
; Modified By: 
; Description: Construct array like objects that store key value pairs
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
; - MDN web docs moz://a : Keyed collections
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Exercise 5.3")
console.log(headerValue + "\n");

// start of program

// Array like object that stores the first and last names of famous composers along with their genre and rating
const famousComposers = [
    {
        firstName: 'Ludwig',
        lastName: 'Beethoven',
        genre: 'Classical',
        rating: '9'
    },
    {
        firstName: 'Wolfgang',
        lastName: 'Mozart',
        genre: 'Classical',
        rating: '8'
    },
    {
        firstName: 'Johann',
        lastName: 'Bach',
        genre: 'Classical',
        rating: '8'
    },
    {
        firstName: 'Joseph',
        lastName: 'Haydn',
        genre: 'Classical',
        rating: '5'
    },
    {
        firstName: 'Franz',
        lastName: 'Schubert',
        genre: 'Classical',
        rating: '10'
    }
  ];

  // Output of famousComposers
  famousComposers.forEach(function(composer){console.log('LastName: ' + composer.lastName+ ' Genre: ' + composer.genre + ' Rating ' + composer.rating)});

  // end program