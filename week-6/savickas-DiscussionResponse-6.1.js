/*
============================================
; Title: Pinson-Discussion 6.1.js
; Author: James Pinson
; Date: November 23rd 2020
; Description: This assignment creates a object literal with two or more errors.
;============================================
*/


/*
--EXPECTED OUTCOME--
--EMPLOYEE LOG--
Department: Retail Banking 
Location: Central-Tennessee 
Employee: John Matthews
ID: 222456
Position: Personal Banker
Pay Grade: 41
*/


//This is the start of the program. 


//This is the object literal department with fields name & location. 
// Correction: when declaring an object you must first use > const department ({Key value: pair}); > you were missing the ()
const department = ({
  
    name: "Retail Banking",
  
    location: "Central-Tennessee",
  
//This is the nested object literal employee with fields id, firstName, lastName, jobTitle, and payGrade.
// Correction:  Missing comma after lastName: "Matthews". Key value pairs must be separated by commas due to syntax
    employee: {
  
      id: 222456,
  
      firstName: "John",
  
      lastName: "Matthews",
  
      jobTitle: "Personal Banker",


      payGrade: "41"



    }
  });


//This is where I call my object literal and nested object literal fields in the desired format. 
// Correction: Missing syntax "+" after Grade:" 
// Correction: department.firstName must be changed to department.employee.firstName to access the nested objects key value pair
  console.log (" --EMPLOYEE LOG--");
  console.log ("Department: " + department.name + " \nLocation: " + department.location + 
                " \nEmployee: " + department.employee.firstName + " " + department.employee.lastName + "\nID: " + department.employee.id + 
                "\nPosition: " + department.employee.jobTitle + "\nPay Grade: " + department.employee.payGrade)


//This is the end of the program.

