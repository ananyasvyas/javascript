function setUsername(username) { // a function to set user name to global context 'username'
    this.username = username;
}

// function createUser(username, email) { // a function calling first function 'setUsername()' to set username and set email to global context
//     setUsername(username);
//     this.email = email;
// }

// let user = new createUser('ananya', 'asv@mail.com');
// console.log(user); // {email: 'asv'}

// Reason :

// When execution starts at 'createUser', an execution context is assigned to 'createUser'
// when setUsername(username); is getting executed, it gets its own execution context above the 'createUser' and the function executes
// After end of execution of setUsername function, the execution context along with variables is removed from the call stack 
// Hense, the calling function 'createUser' looses all the reference to the 'setUsername' function

// Solution : To hold the reference of the inner function and variables even after it gets removed from the call stack
// for this we explicitly call the function ''setUsername' using the call' method
// Along with this, we also provide the current context 'this' of the 'createUser' function to the inner function, to set values in 'createUser' function's context
function createUser(username, email) {
    setUsername.call(this, username);
    this.email = email;
}

let user = new createUser('ananya', 'asv.mail.com')

console.log(user); // { username: 'ananya', email: 'asv.mail.com' }