"use strict"; // treats code as newer version of js, by default, it is in strict mode only

// ecma script - defining standards for js

// Premitive data types (Call by value, updates copy) -
// *number - 2^53

// *string - ''/""
const firstName = 'ananya'; // string variable

// declare and initialize using new keyword
// this makes the string as key value pair object, having default prototype methods
const middleName = new String('shekhar');

// string interpolation
console.log(`My name is ${firstName} ${middleName}`);

// string methods
// charAt - returns character at the specified index
console.log(firstName.charAt(3)); // n
console.log(firstName[3]); // n

// at - returns character at the specified index, accepts negetive numbers which count back from the last string character.
console.log(firstName.at(-2)); // y

// concat - combines two or more strings
console.log(firstName.concat(middleName)); // ananyashekhar

// endsWith - Determines whether a string ends with the characters of the string
console.log(firstName.endsWith('g')); // false

// *boolean - true/false

// *null - standalone value/representation of empty value

// *undefined - Variabled declared but not assigned

// *symbol - used to identify uniqueness

// *bigint

// use typeof to identify the type of any variable
let age = 4;
typeof(age); // number
typeof(null) // object
typeof(undefined) // undefined

// symbol example
const id = Symbol('123');

// Non premitive (reference) data types
// Array
// Object
// Function
function demo (){}
typeof(demo()); // object function