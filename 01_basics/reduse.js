//reduce user supplied call back function 

const myNums= [1,2,3]

// const myTotal = myNums.reduce(function (acc,curval){
//       console.log(`acc:${acc} and curval ${curval}`);
//       return acc + curval
// },0) //yeinitial vvalue h

//console.log(myTotal);

// const myTotal = myNums.reduce((acc,curr)=> acc +curr ,0)
// console.log(myTotal);

const shoppingCart =[
      {itemName :"js course",
            price : 999
      },
      {itemName :"python course",
            price : 999
      },
      {itemName :"data science course",
            price : 999
      },
      {itemName :"dsa course",
            price : 999
      },
      {itemName :"java ",
            price : 999
      },

]

const priceTopay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceTopay);