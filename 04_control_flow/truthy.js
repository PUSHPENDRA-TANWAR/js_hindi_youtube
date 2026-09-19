// truthy values

const userEmail = 'abc@gmail.com' // "" (it show dont have eamil) // [] it show got user eamil

if (userEmail) { // we dont check userEmail = 'abc@gmail.com' // here we asume that useremail h 
    console.log("Got user email");// prints
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// ye null/undefined value ki safety check karta h 

let val1;
// val1 = 5 ?? 10 // 5 print
// val1 = null ?? 10 // 10 print
val1 = undefined ?? 15 // 15 print
// val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator
//syntax
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")