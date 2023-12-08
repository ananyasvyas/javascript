// stack (Primitive data types)
// a copy of the declared variable is given
let firstName = 'ananya';
let middleName = firstName; // assign firstName to middleName
middleName = 'shekhar'; // modify value of middle name

console.log(firstName); // ananya
console.log(middleName); // shekhar

// since the copy of value was provided, so original value remains unchanged  

// heap (Non-Primitive data types)
// the origional reference to the declared variable is given
let user1 = {
    email: 'one@mail.com'
}
let user2 = user1; // assign user1 to user2
user2.email = 'two@mail.com'; // modify email of second user

console.log(user1.email); // two@mail.com
console.log(user2.email); // two@mail.com

// since the reference of user1 was provided while assigning it to user2, modification in user2 modifies the original user1