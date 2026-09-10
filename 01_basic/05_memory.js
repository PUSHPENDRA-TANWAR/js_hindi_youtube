

// stack (use in premitive , copy milta h  ), heap memory(use in non premitive  , reference milta h original value ka )

let myyoutube = "hiteshsingh"
let anotheryoutube = myyoutube

anotheryoutube = "chaiorcode"

console.log(myyoutube);//hiteshsingh
console.log(anotheryoutube); // chaiorcode

let userone = {
     email : "pushpendra@gmail.com",
     upi : "upi@bl"
}

let usertwo = userone // value copy nhi hogi balki original value ka reference liya jayega

console.log(usertwo);
console.log(userone);

usertwo.email = "bhai@gmail.com"  // original value hi change hoo jaati h,( object se value . k through li jaati h )

console.log(usertwo.email); // bhai@gmail.com
console.log(userone.email); // bhai@gmail.com

