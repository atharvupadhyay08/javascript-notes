//arrays
const myArr =[0,1,2,3,4,5] //array is an object jisme collection of multipe items single variable mai store karte h
//js arrays are resizable and can have diff datatypes in single
//arrays are not associative and cannot be accessed using arbitary strings $ non neg nos

//console.log(myArr[0]);

//js arrays m shallow copies banti h  rather than deep copies
//shallow copy of an object is a whoose properties share the same references jo copy m change karung wo original m bhi change hoga
// deep copies nornal copy isme same refernce point nai hota h

//another ways 
const myHeros = ["batman","ironman "]
const myArr2 = new Array(1,2,3,4)

//array methods
// myArr.push(6)
// myArr.pop();

 //myArr.unshift(9)
 //myArr.shift()

//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(90)); //both of the functions tell same thigs

// const newArr = myArr.join() //string m print kardega elements ko

//  console.log(myArr);
//  console.log(newArr);
//  console.log(typeof newArr);

//slice ,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);