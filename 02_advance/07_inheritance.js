const Teacher = {
    school: '',
    temporary: false
}
const SubjectTeacher = {};
// modern syntax
Object.setPrototypeOf(SubjectTeacher, Teacher); // sets the prototype of 'SubjectTeacher' to 'Teacher'
// old syntax
// approach 1
SubjectTeacher = {
    __proto__: Teacher // referencing to parent class
}
// approach 2
SubjectTeacher.__proto__ = Teacher;

console.log(SubjectTeacher.temporary); // false