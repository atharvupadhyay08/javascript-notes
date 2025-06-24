// singleton apne tarkike ka ek hi object
//object.create
//literals ki tarah declare karne pe singleton nahi banta
//constructer se banega toh singleton banega

//object literals
const mySym = Symbol("Key")
const jaUser={
      name : "atharv" ,//key:value  system chalta h
      "full name" :"atharv upadhyay", // isko (jaUser.full name) se access nai karte 
      [mySym]: "myKey1", //  -> is wrong way to describe symbol dststype 
      age : 22,
      location : "indore",
      email:"atharvupadhyay@gmail.com",
      isLoggedin : false,
      lastLoginDays: ["Monday","saturday"]
}

// console.log(jaUser.email) // yaha string ki tarah leneki jarurat nai h
// console.log(jaUser["email"]) // yaha h "" ki zarurat
// console.log(jaUser["full name"])
// //console.log(typeof jaUser.mySym)//console.log(jaUser.mySym) -> myKey1 , which is a string
// console.log(jaUser[mySym])

// jaUser.age="23"
// Object.freeze(jaUser)
// jaUser.age="32"
// console.log(jaUser);

jaUser.greeting = function(){
      console.log("hello JS user");
}

console.log(jaUser.greeting());