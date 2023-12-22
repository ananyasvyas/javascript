// object literal
const user = {
    username: 'ananya',
    loginCount: 8,
    isLoggedIn: true,
    getLoggedIn: function () {
        return this.isLoggedIn
    }
}

// constructor function
// 'new' is constructor function, which helps to create multiple instances of same object literal. new can be used to create instances of functions
// The new keyword initiates the creation of a new JavaScript object.
// The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructors prototype.
// The constructor function is called with the specified arguments and gets bound to the newly created object. If nor explicit return value is specified from the contructor, JS assumes 'this' (newly created object), to be the intended return value.
function createUser(username, isValid, marks) { // this constructor function gets convereted to a class declaration
    this.username = username;
    this.isValid = isValid;
    this.marks = marks;
    return this; // this is by-default returned, but included to increase readability
}
console.log(new createUser('ananya', true, 55));
console.log(new createUser('shekhar', false, 78));