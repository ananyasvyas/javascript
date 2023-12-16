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
// 'new' is constructor function, which helps to create multiple instances of same object literal
// new can be used to create instances of functions
function createUser(username, isValid) { // this constructor function gets convereted to a class declaration
    this.username = username;
    this.isValid = isValid;
    return this; // this is by-default returned, but included to increase readability
}
console.log(new createUser('ananya', true));
console.log(new createUser('shekhar', false));