const myObject ={
      js :'javascript',
      cpp : 'c++',
      rb : 'ruby',
      swift : 'swift by apple'
}
// for (const key in myObject) {
//      console.log(`${key} is shortcut for ${myObject[key]}`);
// }

// js is shortcut for javascript
// cpp is shortcut for c++
// rb is shortcut for ruby
// swift is shortcut for swift by apple

const programming = ["js","rb","py","java","cpp"] //array h ye 
// arrays m bhi keys hoti h thats the index objects ka design hi isiliye hua tha to have machahi keys 
// for (const key in programming) {
//      console.log(key);
// }

//0
// 1
// 2
// 3
// 4

// for (const key in programming) {
//      console.log(programming[key]);
// }

// js
// rb
// py
// java
// cpp

const map = new Map()
map.set('IN',"India")
map.set('USA',"Unites States of America")
map.set('FR',"france")
map.set('IN',"India")

for (const key in map) {
      console.log(key); // nothing happens as map is non iterable 
}

// for in loop objects k liye 
//arrays k liye for of 