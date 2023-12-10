// scode is defined as area marked by {}
function scopeFunc () {
    // scope of the function
}

//Issue with var
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a); // undefined
console.log(b); // undefined
console.log(c); // 30