/*
============================================
; Title:  3.3
; Author: Professor Krasso
; Date:   31 Oct 2020
; Modified By: Grayton Savickas
; Description: Uses Control statements to compare values
;===========================================
*/
const header = require('../week-2/Savickas-header')
var headerValue = header.display("Grayton", "Savickas", "3.3")
console.log(headerValue);

/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/

let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}

// Switch Statement evaluates the given event stored in eventKeyCode and compares it to 4 different cases. If none match console.log Unrecognized key
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
  break;
  case 16:
    console.log('The shift key was pressed.')
  break;
  case 32:
    console.log('The spacebar key was pressed.')
  break;
  case 8:
    console.log('The backspace / delete key was pressed.')
  break;
  default:
    console.log('Unrecognized key.')
  break;
  }
