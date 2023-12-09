"use strict"; // treats code as newer version of js, by default, it is in strict mode only

// ecma script - defining standards for js

// Premitive data types (Call by value, updates copy) -
// *number - range 2^53
const score = 200; // number variable
const total = new Number(500); // number variable using constructor

// *string - ''/""
const firstName = 'ananya'; // string variable
const middleName = new String('shekhar'); // string variable using constructor
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
const id = Symbol('123');

// *bigint

// use typeof to identify the type of any variable
let age = 4;
typeof(age); // number
typeof(null) // object
typeof(undefined) // undefined

// Non premitive (reference) data types
// *Array
const arr = [1, 2 ,3];
const arrOne = new Array(1, 2, 3);
// unshift - inserts element in start of array (shifts all other elements)
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
// shift - pops first element from the array
arr.shift();
console.log(arr); // [1, 2 ,3]
// join - adds all elements to create a string
console.log(arr.join()); // 1,2,3
// slice and splice
// both return section of array, slice does not include extreme range, splice includes extreme range; slice does not manipulate the origional array, splice manipulated the origional array
const sliceArray = arr.slice(0, 2); // [1, 2]
console.log(arr); // [1, 2, 3]
const spliceArray = arr.splice(0, 1); // [1, 2]
console.log(arr); // [3]
// *flat - Returns a new array with all sub-array elements concatenated into it upto specified dept or infinity for all depths
const multiLevelArray = [1, 2, 3, [4, 5], 6, [7, [5, 6, 7]]];
console.log(multiLevelArray.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 5, 6, 7]
// from - creates array from string
console.log(Array.from('Hi')); // ['H', 'i'];
// Note: array-copy operations create shallow copy, where properties share same reference.

// *Object
const obj = { // object declaration and initialization (literal)
    name: 'ananya',
    mail: 'ananya@mail.com',
    isLoggedIn: 'false'
}
// use symbol data type in object
const objId = Symbol('231');
const objWithSymbol = {
    [objId]: 'id',
    name: 'ananya',
    mail: 'ananya@mail.com',
    isLoggedIn: 'false'
}
// add function in object
objWithSymbol.greeting = function() {
    console.log('I am a function inside oject');
}
objWithSymbol.greeting; // Function reference
objWithSymbol.greeting(); // I am a function inside oject
// Lock value of object using freeze
Object.freeze(objWithSymbol); // cannot modify object

// Function
function demo (){}
typeof(demo()); // object function