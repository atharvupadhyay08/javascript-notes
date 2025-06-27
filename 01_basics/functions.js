//functions


function sayMyName(){
console.log("A");
console.log("t");
console.log("h");
console.log("a");
console.log("r");
console.log("v");
}

//sayMyName()

// function addTwoNumbers (number1,number2){ //here inside the parenthesis are parameter
//       console.log(number1+number2);
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers()
// addTwoNumbers(3,null) here 3 n null are arguments inside the paranthesis

function addTwoNumbers (number1,number2){ //here inside the parenthesis are parameter
      return number1+number2 ;
}
const result = addTwoNumbers(3,5)

//console.log("result",result); // gives-> result undefined kyuki return statement nai h function m

function loginUserMessage(username ){//="sam"){
      if(username == undefined)/*or (!username)*/{
            console.log("please enter a username");
            return
      }
      return `${username} just logged in `
}

// console.log(loginUserMessage("atharv"))
 console.log(loginUserMessage())