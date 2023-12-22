const user = {
    id: '001',
    name: 'ananya',
    marks: '78'
}

// getOwnPropertyDescriptor
// provides information about properties of the object
// get description of property id of object user
console.log(Object.getOwnPropertyDescriptor(user, 'id')); // { value: '001', writable: true, enumerable: true, configurable: true }
// to redifine the properties, we use defineProperties
Object.defineProperty(user, 'id', {
    writable: false,
    enumerable: false
})