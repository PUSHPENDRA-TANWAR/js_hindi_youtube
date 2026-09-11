const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman"];

// marvel_heros.push(dc_heros) // array ek array ko bhi element k roop me store kar sakta h 

// console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman' ] ]

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman' ] // new veriable declare karna padta h
  
//  useally we use this 

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman' ] // benifit : multiple array le sakte h


// VERY IMP

console.log(Array.isArray("Pushpendra")); // false
 console.log(Array.from('Pushpendra'));  
//  [ 'P', 'u', 's', 'h',
//   'p', 'e', 'n', 'd',
//   'r', 'a'
// ]

 console.log(Array.from(name = 'Pushpendra')); // [] // isne nhi pata ki keyka ya object ka array banaye


 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
 


