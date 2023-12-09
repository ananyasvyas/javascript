let today = new Date();
console.log(today); // 2023-12-09T09:30:47.037Z
console.log(today.toString()); // Sat Dec 09 2023 09:31:22 GMT+0000 (Coordinated Universal Time)
console.log(typeof today); // object

// toLocaleString - provides date information corresponding to provided locale
console.log(today.toLocaleString('default', {
    weekday: "long"
}));