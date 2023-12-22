// Map holds key value pair and keeps the origional order
const data = new Map();
data.set('In', 'India');
for (const key of data) {
    console.log(key);
} // [ 'In', 'India' ]
for (const [key, value] of data) {
    console.log(`${key} : ${value}`);
} // In : India