//logic control or control flow
// we need or code to run in conditional nat always we want our code to run as a whole
//if
const isUserloggedin =true

if(isUserloggedin){// condition true to code execute hoga
 //console.log("ferari");
}
// <,>,>=,<=,==,!=,===,!==
//=== checks valuee and type also same with !==
// if(2!=="2"){// cuz they are not same as 2 is number and "2"is string 
//       console.log(yes);
// }


// const temperature = 41

// if(temperature === 50){ // === also used in conparing 
//       console.log("yes");
// }
// else{
//       console.log("no");
// }

//const and let are scope both functional and global depending how they are defined 
// whereas var is global even if it is defined in local scope 
// const score =200
// if(score>100){
//       var power="fly"
//       console.log(`user power ${power}`);
// }
// console.log(`user power2 ${power}`);
//console.log(`user power ${power}`); gives erraor cuz of the const scope if till if statement only
 //                         ^
// whereas var will execute the it just fine

const balance =1000
//if(balance>500)console.log("test"); //good practise 
//if(balance>500)console.log("test"),console.log("test2"); //bad practise

//nesting conditionals
// if (balance<500) {
//       console.log("less than 500");
//       }
//       else if (balance<750) {
//       console.log("less than 750");
//       }
//       else if (balance<900) {
//       console.log("less than 900");
//       }
//       else  {
//       console.log("less than 1200");
//       }

const userloggedin =true
const userdebitcard = true
const userloggedinfromgoogle =false
const userloggrdinfromemail = true

if(userloggedin && userdebitcard && 2==2){
      console.log("welcome");
}

if(userloggedinfromgoogle || userloggrdinfromemail){
      console.log("welcome");
}