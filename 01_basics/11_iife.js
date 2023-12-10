// Immediately Invoked Function Expression (IIFE)
// Executed a method immediately after it is declared
(function connectToDB() {
    console.log('DB Connected!');
})(); // DB Connected!
// ';' is important to end iife

// named iife - iife with a name
(function connectToDB() {
    console.log('DB Connected!');
})();
// unnamed iife - nameless function
(() => {
    console.log('DB Connected!');
})();

// pass arguments to iife
((name) => {
    console.log(`DB Connected! ${name}`);
})('ananya'); // DB Connected! ananya