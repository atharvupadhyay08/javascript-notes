const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword ="12345"
accountCity ="Jaipur"

//accountId = 2 //not allowed
accountEmail= "hdfc@googl.com"
accountPassword="121212"
accountCity ="udaipur" //also not good practise

// prefer not to use var because of issue in block scope and functional scope

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity])