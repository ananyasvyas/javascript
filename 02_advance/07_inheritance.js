const Teacher = {
    school: '',
    temporary: false
}
const SubjectTeacher = {};
// modern syntax
Object.setPrototypeOf(SubjectTeacher, Teacher); // sets the prototype of 'SubjectTeacher' to 'Teacher'
// old syntax
// approach 1
// SubjectTeacher = {
//     __proto__: Teacher // referencing to parent class
// }
// approach 2
// SubjectTeacher.__proto__ = Teacher;

// console.log(SubjectTeacher.temporary); // false

// Inheritance using class
class User {
    constructor(username) {
        this.username = username;
    }
    getUsername () {
        return this.username;
    }
}

class Admin extends User {
    constructor(username, type) {
        super(username); // as seen in call.js, we needed to use the 'call' method and pass the current context 'this' to call other function. But using super(var), we directly get access to the other function
        this.type = type;
    }
    getUserType () {
        return `${this.username} is of type ${this.type}`
    }
}

const admin = new Admin('ananya', 'admin');

console.log(admin.getUserType()); // ananya is of type admin