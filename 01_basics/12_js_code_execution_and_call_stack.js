// js execution context
// 1. Global Execution Context
// 2. Function/Functional Execution Context
// 3. Eval Execution Context (Property of Global Execution Context)
// ---
// js code execution
// Two phases
// 1. Memory Creation/Creation Phase - memory allocation to variable and functions
// 2. Execution Phase - execution of code
// Example -
let one = 10;
let two = 5;
function add(val1, val2) {
    let total = val1 + val2;
    return total;
}
let res1 = add(one, two);
let res2 = add(10, 2);
// Phase 1 - Global Execution/Environment is assigned to 'this'
// Phase 2 - Memory Creation/Creation Phase
// one -> undefined
// two -> undefined
// add -> defination
// res1 -> undefined
// res2 -> undefined
// Phase 3 - Execution phase
// one -> 10
// two -> 5
// add -> nothing
// res1 -> Seperate execution context (new variable env + execution thread)
    // Phase 1 - Memory Creation/Creation Phase
    // one -> undefined
    // two -> undefined
    // total -> undefined
    // Phase 2 - Execution phase
    // val1 -> 10
    // val2 -> 5
    // total -> 15 // gets assigned to global context
    // the new env gets deleted after exection phase
// res2 -> same as res1
// ---
// Call Stack
/*
|           |
|           |
|           |
|___________|
|Global Exec|
|___________|
  Call Stack

Call stack has one method execution ata a time, if one function calls another, the second one sits on the top. Call stack follows LIFO style.
*/

