// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
 
// for of loop
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps // map unique value ko print karte h or order wise print karte h

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

 //console.log(map);
 // output
//  Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }


// map me for of lagaya h
for (const [key, value] of map) {
     console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }   // error myobject not iterable // object me for of loop nhi lagta