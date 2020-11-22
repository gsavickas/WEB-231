/*
============================================
; Title:  Array like object collection
; Author: Grayton Savickas
; Date:   21 Nov 2020
; Modified By: 
; Description: Construct array like objects that store key value pairs
; Attribution: 
; - JavaScript: The Definitive Guide, 7th Edition by David Flanagan Published by O'Reilly Media, Inc., 2020 
; - MDN web docs moz://a : Keyed collections
;===========================================
*/
const header = require('../week-2/Savickas-header')
let headerValue = header.display("Grayton", "Savickas", "Exercise 5.4")
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
  console.log('-- COMPOSER BY RATING --' +'\n')
// Filters famousComposers using the map function to separate ratings and assign them to the composerRating
  let composerRating = famousComposers.map(function(composer){
      return 'Rating: ' + composer.rating + '\n' + 'Composer: ' + composer.lastName + '\n'
  } );
// Output composerRatings
  composerRating.forEach(function(composer) {
      console.log(composer);
  });

console.log('-- COMPOSER BY GENRE --' +'\n')

// Filters famousComposers using the map function to separate ratings and assign them to the composerGenre
  let composerGenre = famousComposers.map(function(composer){
      return 'Genre: ' + composer.genre + '\n' + 'Composer: ' + composer.lastName + '\n'
  } );
// Output composerGenre
    composerGenre.forEach(function(composer) {
      console.log(composer);
  });
