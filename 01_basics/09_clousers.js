// clousers - a closure gives you access to an outer function's scope from an inner function
function outer() {
    const outerVar = 'outer';
    
    function inner() {
        const innerVar = 'inner';
        console.log(outerVar); // outer
    }

    console.log(innerVar); // error: innerVar is not defined

    inner();
}

outer();