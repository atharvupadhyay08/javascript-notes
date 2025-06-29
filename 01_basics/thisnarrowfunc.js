//arrow function and this keyword
//this keyword -> tells about current context 
const user = {
      username:"atharv",
      price:999,

      welcomeMessage: function(){
            console.log(`${this.username} ,welcome to website`);//this mtlb is scope m jo h unko access karne k liye 
            console.log(this);
      }
} 

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

//console.log(this);// as were in node enviornment \

// function chai(){
//       let username="atharv"
//       console.log(this.username); // gives undefined function m use nai kar paate h this keyword ko
       
// }
// chai()

//in another way of same function
// const chai = function(){
      
//    let username="atharv"
//           console.log(this.username);
// }
// chai()

//arrow function
const chai = () => {
      let username = "atharv"
      //console.log(this.username);//also gives undefined
      console.log(this);
}

//chai()

// const addTwo = (num1,num2)=>{
//       return num1+num2
// }

// //implicit return using arrow function
// const addtwo =(num1,num2)=> (num1+num2)
// no need of return and {}
const addtwo =(num1,num2) =>({username:"atharv"}) // object return karne ka treeka
console.log(addtwo(3,4))

//  ay.forEach(()=>{})