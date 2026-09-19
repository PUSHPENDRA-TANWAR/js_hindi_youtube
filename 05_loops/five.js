// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// remembering
// function count(){} ye normal syntax hota h function ka  // foreach me function ka name nhi aata bass  function (){}

// coding.forEach( function (val){        // condiing me foreach lagaya function me coding ki value dedi
//     console.log(val);
// } )


// greet = () => {} ye arrow function h bass isme bhi name hata do //() => {} ye for each loop for arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
//  coding.forEach(printMe) //output// "js", "ruby", "java", "python", "cpp"

// coding.forEach( (item, index, arr)=> {           // foreach k pass item,index,arr sab ka access hota h 
//     console.log(item, index, arr);
// } )


// ye array h jisme objects h
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )