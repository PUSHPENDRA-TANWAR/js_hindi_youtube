const score = 400;
// console.log(score); // 400


const balance = new Number(100)
// console.log(balance); // [Number: 100]
// console.log(balance.toString()); // 100 but this is string
// console.log(balance.toFixed(2)); // 100.00

const othernumber = 23.889

// console.log(othernumber.toPrecision(3)); // 23.9 // precise value deta h 

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000 ye US satandrd k accod h 
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 ye INDIA k accord h 



// *********************** MATHS ********************

// console.log(Math); // Object [Math] {}  // ye ek object h jisme bahut sari properties h

// console.log(Math.abs(-4)); // 4 (absolute value dega)
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.3)); // 5 // upper value dega
// console.log(Math.floor(4.9)); // 4 // lower value dega
// console.log(Math.min(4,5,7,1,48,));  // 1 // minimum value dega
// console.log(Math.max(4,5,7,1,48,));  // 48 // max dega


console.log(Math.random()); // 0.12123111 // kuch bhi random val dega but 0.,,, somthhing
console.log((Math.random()*10 )+ 1); //1.23322,2.2342 // multiply 10 se 1. ya 3. something hoga or +1 isiliye taaki 0.something na ho kyuki 0 bhi to random numer aa sakta h 
 
   //OUTPUT
//0.746976706757007
//6.016671351605575

//0.5064701590922028
//2.810095526564539

console.log(Math.floor(Math.random()*10 )+ 1); // floor se 3,2,5 roundoff random dega

//agar hame 10 se 20 k beech random chahiye 
// Very Very IMP
const min = 10;
const max =20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);














