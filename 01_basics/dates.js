let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
let date = new Date();

console.log(date.toDateString());     // "Thu Jul 24 2025"
console.log(date.toTimeString());     // "15:34:05 GMT+0530 (India Standard Time)"
console.log(date.toLocaleDateString()); // "24/7/2025" (in India)
console.log(date.toLocaleTimeString()); // "3:34:05 PM"


// let dates = new Date(2025,0,24,7,37);
// console.log(dates.toLocaleString());