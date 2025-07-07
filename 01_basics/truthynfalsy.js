const userEmail = "atharv@agent.ai"

if (userEmail) {
      console.log("got user gmail.com");
} else {
      console.log("aint got shit on me ");
}


// falsy values => false, 0 , -0, Bigint 0n , NaN, null , undefined 
// truthy value => "0", 'false' , " ", [ ],{ }, function(){}

//if(userEmail.length===0){
//console.log("array is empty");
//}

// const emptyObj ={}

// if(Object.keys(emptyObj).length === 0){
//       console.log("object is empty");    
// }

// false == 0
// false == ''
// 0 == ''

// nullish coalescing operator (??) : null undefined 
// null or undefined se bachne k liye use karte h
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1= undefined ?? 10
// val1 = null ?? undefined
//val1 = undefined ?? null
// val1 = null ?? 2 ?? 3
// console.log(val1);


// ternary operator
// condition ? true : false

const iceTeaprice =100
iceTeaprice >=80 ? console.log("mehngi h") : console.log("sasti h ");

