// Immediately Invoked Function Expressions (IIFE)
// agar hame kisi function ko immediately inwoked karana h uske liye use hota h 

// why it use
// 1. To create a private scope
// 2. avoid global pollution
// 3. Run some initialization code once
// whole function raped in()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; for start another IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')