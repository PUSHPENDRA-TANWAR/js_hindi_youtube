const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //current context ko refer karne par (this keyword use hoga)
        console.log(this);
    }

}

//  user.welcomeMessage() // method
// user.username = "sam"  // current context ko change kar diya
//  user.welcomeMessage()

 console.log(this);  // ham abhi node enviorment me h isiliye empty aa raha h // yanha globall object kuch nhi h

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // undefined show karega 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//chai() // undefined show karega 

const chai =  () => {
    let username = "hitesh"
  //  console.log(this);
}


// chai() // show {}

// Arrow function basic // curlybasis use hua to return likhna padega

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit return 
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // object return k liye {} use karna padega


//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()