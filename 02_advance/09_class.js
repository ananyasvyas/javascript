class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    encryptPassword() {
        return `${this.password}@#!`
    }
}

const user = new User('ananya', 'qwerty', 'asv@mail.com');

console.log(user); // { username: 'ananya', password: 'qwerty', email: 'asv@mail.com' }

console.log(user.encryptPassword()) // qwerty@#!