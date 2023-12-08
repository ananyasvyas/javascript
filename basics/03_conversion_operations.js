// Number conversion

// operation needs to be done on a number but the value is of type string
let quantity = '20';
typeof(quantity); // string

// convert (string)quantity into (number)quantity
let convertedQuantity = Number(quantity); // convert string into number
typeof(convertedQuantity); // number

quantity = '203abc'; // variable containing alpha-numeric string
typeof(convertedQuantity); //number?
console.log(convertedQuantity); // NaN

quantity = null;
typeof(convertedQuantity); //number - 0

quantity = undefined;
typeof(convertedQuantity); //number - NaN

quantity = true;
typeof(convertedQuantity); //number - 1

// boolean conversion
let hasAccess = 1;
let convertedHasAccess = Boolean(hasAccess); // true

hasAccess = ""; // convertedHasAccess = false
hasAccess = "ananya"; // convertedHasAccess = true