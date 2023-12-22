// USE-CASE : As soon as the page loads and object of class User is created -
// 1. Get reference of button 'bind'
// 2. A method associated with button 'bind' displays a message, when the button is clicked
class User {
    constructor() {
        this.username = 'ananya';
        document
        .querySelector('#bind_btn')
        .addEventListener('click', this.displayName.bind(this))
    }
    displayName () {
        console.log(this.username);
    }
}
// create object of class User
const user = new User();

// In above scenerio, 
/*
displayName () {
    ...
    console.log(this.username); // undefined
}
*/

// to solve this, update addEventListener as -
/*
.addEventListener('click', this.displayName.bind(this))
*/
