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

//arrow function
const chai = function(){
      
   let username="atharv"
          console.log(this.username);
}