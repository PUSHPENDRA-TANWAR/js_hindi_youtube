// singleton 


// object literals

/// Note : js me object ki key ko backend me  string consider kiya jata h  

const mykey = Symbol("mykey1")
const jsuser = { 
    
    // OBJECT DECLARE

    name : "hitesh",
    "fullname" : "hitesh chaudhary" ,
    age : 18 ,
    location : "jaipur",
    email:"asdf@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],
    [mykey]: "mykey1"  // idhar key me bracet isiliye lagaye taaki iska data type symbol show ho // IMP syntax h



}

// ACCESS OBJECT

console.log(jsuser);

// console.log(jsuser.email); // simple way to access
// console.log(jsuser["email"]); // good way to access (isse hum key ka datatype bhi jaan sakte h )
// console.log(jsuser["fullname"]); // agar simple way use karte to it show error
// console.log(jsuser[mykey]);  // string show kar raha h jo ki galat tarika h // // line number 8 202 31 (symbol lena h define karo   key ki trah act karao or    print kara do)


jsuser.email = "abc@chatgpt.com" // changing/overwrite the value
//Object.freeze(jsuser) // ab object ki value change nhi ho sakti 
jsuser.email = "abc@gemini.com"
console.log(jsuser["email"]);

// FUNCTION 
// function treate an variable in js

// object me function add karna
jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greetingtwo = function(){
    console.log(`hello js user ,${this.name}`); // using backtick
    
}

console.log(jsuser.greeting()); // undefined 
console.log(jsuser.greeting); // [Function (anonymous)] // function return nhi hua h bass reference liya h

console.log(jsuser.greetingtwo());















