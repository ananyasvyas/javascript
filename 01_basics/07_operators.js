// rest operator (...) when declared as a function param takes multiple values in a single variable
function calculateMarks(...marks) {
    return marks;
}
console.log(calculateMarks(200, 300, 100, 400)); // [200, 300, 100, 400]
// Nullish Coalescing Operator (??) selects between two values; if first is null or undefined, selects the second value
const val = 5 ?? 10; // 5
const val1 = null ?? 10; // 10