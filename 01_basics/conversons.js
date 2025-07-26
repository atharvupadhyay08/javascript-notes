//  let score = "33ab"
//  console.log(typeof score);

// let valueInNum = Number(score) //converting any value into number
// console.log(typeof (valueInNum)); 
// console.log( valueInNum); // gives NaN as typeof NaN is also number

 let score = null
 console.log(typeof score);

let valueInNum = Number(score) //converting any value into number
console.log(typeof (valueInNum)); 
console.log( valueInNum); // gives 0 when null 
//gives NaN when undefined 
//gives 1 when true and 0 when false 

let bill = "loff"
console.log(typeof bill);

let booleanislogged = Boolean(bill);
console.log(typeof booleanislogged);
console.log(booleanislogged)
//in JavaScript, all non-empty strings are truthy




// Boolean("")        // false → empty string
// Boolean(0)         // false
// Boolean(null)      // false
// Boolean(undefined) // false
// Boolean(NaN)       // false
// Boolean(false)     // false