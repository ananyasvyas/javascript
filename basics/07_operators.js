// rest operator (...) when declared as a function param takes multiple values in a single variable
function calculateMarks(...marks) {
    return marks;
}
console.log(calculateMarks(200, 300, 100, 400)); // [200, 300, 100, 400]
