"use strict"; // treats code as newer version of js, by default, it is in strict mode only

// ecma script - defining standards for js

// Premitive data types (Call by value, updates copy) -
// number - 2^53
// string - ''/""
// boolean - true/false
// null - standalone value/representation of empty value
// undefined - Variabled declared but not assigned
// symbol - used to identify uniqueness
// bigint

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