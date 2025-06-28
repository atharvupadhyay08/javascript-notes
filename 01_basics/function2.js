//function 2
//function calculateCartPrice(...num){ //...num rest op and spread op also ->packages all into array
function calculateCartPrice(val1,val2,...num){ 
return num
}

// console.log(calculateCartPrice(200,300,400,500,2000)); //[ 200, 300, 400, 500, 2000 ]
console.log(calculateCartPrice(200,300,400,500,2000));//[ 400, 500, 2000 ]

const user ={
      username:"atharv",
      price:"999"
}
 
function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({username:"harshi",
      price:"priceless"
})

//passing arrays in function
const newArray=[200,400,500]
function returnSecondValue(getArray){
     return getArray[1]
}

//console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,300,400]));