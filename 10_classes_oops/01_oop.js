const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// constructor function
function User(username, loginCount, isLoggedIn){
    //"Take the value stored in the function's username parameter and put it into the object's username property."
    // this.username is property and left side username is parameter
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)  // agar ham yanha new keyword use nhi karte to niche console log me usertwo ki value print kara deta 
// console.log(userOne.constructor);
console.log(userOne);