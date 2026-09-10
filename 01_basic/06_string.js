const name = "monu";
const repocount = 50;

const gamename = new String("hitesh"); // ye bhi ek tarika h string declare karne ka (isme hame h ,i,t,... ki positions pata rahti h ,isme length property bhi milti h )

// methods
console.log(gamename[0]); // h
console.log(gamename.length); // 6
console.log(gamename.toUpperCase()); // HITESH
console.log(gamename.charAt(2)); // t
console.log(gamename.indexOf("t")); //2 


const newString = gamename.substring(0,4)
console.log(newString); // hite

const anotherString = gamename.slice(-4) // (slice me hum negative values ko reverse print karne k liye use karte h) last for character print
console.log(anotherString);

const newstringone = "   hitesh   "
console.log(newstringone);
console.log(newstringone.trim()); // extra whitespace ko hatane k liye use hota h 

const url = "https://hitesh.com/hitesh%20chaudry"
console.log(url.replace('%20','-'));  // ('search values','relce by it')

console.log(url.includes('hitesh'));// true // ye question puchta h ki url me hitesh word h ki nhi 


const gamename2 = new String("hitesh-dot-com");

console.log(gamename2.split('-'));// [ 'hitesh', 'dot', 'com' ] //it split the string on basis of saprater('-') and make an array 








//console.log(name + repocount + " value"); // old way 

// new way

console.log(`hello my name is ${name} and my repo count is ${repocount}`); // use backticks 
