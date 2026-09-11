
// js arrays are resizalble hote h 
// array have zero base indexing
// shalow copy (same reference point)

const myarray = [1,2,3,4,5,6]

// console.log(myarray[0]);

const myarray2 = new Array(1,2,3,4,5,6)

// Array method

// myarray.push(7)  // yanha myarray change ho gaya h 
// myarray.pop()  // array ki last value ko nikal dega

// myarray.unshift(0) // [0,1,2,3,4,5,6] // arrya k starting me 0 add hoga or array ki sari value bhi shift ho jayegi 
// myarray.shift() // 0 ko remove kar degi first se

// console.log(myarray.includes(9)); // false // 9 array me nhi h
// console.log(myarray.indexOf(19)); // -1 // 19 nhi h

// const newarray = myarray.join(); // join hamare array ko bind or string me convert karta h


// console.log(myarray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(newarray); // 1,2,3,4,5,6


console.log("A",myarray); //A [ 1, 2, 3, 4, 5, 6 ]

const myn1 = myarray.slice(1,3); //slice karega 1 se leke 3 tak 3 exclude hoga

console.log(myn1); // [ 2, 3 ]
console.log("B",myarray); // B [ 1, 2, 3, 4, 5, 6 ]

const myn2 = myarray.splice(1,3)
console.log("c",myarray); // c [ 1, 5, 6 ] // 2, 3, 4 nikal gaya
console.log(myn2); // [ 2, 3, 4 ]

// slice : dont manupulate original array
// splice : it manupulate original array






