//const coding = ["js","ruby","java","python","cpp"]
//higher order function k liye hota h

// (callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void
// array.forEach(element => {
      
// });
// ye for each ko bs function dena hota h baki sab isko pata hota h length etc etc
// coding.forEach(function (val)  {
//      console.log(val); 
// }); // ek function jisme nam nai dena h ie callback function or for each k argument me hi function likhna h

// coding.forEach( (item)=>{
//       console.log(item);
// })

// function printMe(item){
//       console.log(item);
// }

// coding.forEach(printMe); //not coding.forEach(printMe());

// coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
// })

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// const myCoding = [
//       {langname:"javascript",
//             langfilename:"js"
//       },
//       {langname:"java",
//             langfilename:"java"
//       },
//       {langname:"python",
//             langfilename:"py"
//       },
// ]

// myCoding.forEach((item)=>{

// console.log(item.langname);
// })


// const values = coding.forEach((item)=>{
//       console.log(item);
//       return item; // it will give undefined cuz foreach loop doesnt return 
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num > 4)  //this is similar to foreach and it return value
// console.log(newNums);

// const newNums = myNums.filter((num)=> {
//       return num > 4
// }  )


const newNums = []

myNums.forEach ((num) => {
      if(num>4){
            newNums.push(num)
      }
})
console.log(newNums);





