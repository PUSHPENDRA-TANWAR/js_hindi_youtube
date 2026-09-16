//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

      //console.log(website);

       two()

}

 one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
     console.log(website);
}

 console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // isme ye print kar dega

function addone(num){
    return num + 1
}


// ek variable function ko hold kar raha h 
console.log(addTwo(5)); // hamne niche variable ki form me function declare kara h isme hm function se pahle access nhi kar sakte thats why it show error

const addTwo = function(num){
    return num + 2
}