let score = "33asd";
let score2 = null
console.log(typeof score);

let inNumber = Number(score); // ham ese mention karke data type change sakte h 
let inNumber2 = Number(score2)

console.log(typeof inNumber);
console.log(inNumber);// it print NaN (which mean not a number)
console.log(inNumber2); // now it print 0

let loggin = 1;
let booleanloggin = Boolean(loggin)
console.log(booleanloggin); // output = true 

let somenumer = 33
let stringNumber = String(somenumer)
console.log(stringNumber);

console.log(typeof stringNumber);


//**********************  operations  *******************

let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // power
console.log(2/2);
console.log(2%3);

let str1 = "Pushpendra"
let str2 = " Singh"
let str3 = str1+str2 //  Pushpendra Singh
// console.log(str3);

// console.log(1+"2"); //12
// console.log("1"+2); //12
// console.log("1"+2+2); // 122
// console.log(1+2+"2"); // 32(1+2 ho gaya or 3 side me aa gaya)

console.log(+true); // it convert true in number give 1
console.log(+"");  // it convert true in number give 0

let gamecounter = 100;
gamecounter++;
console.log(gamecounter);












