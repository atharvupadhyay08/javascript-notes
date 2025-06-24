//arrays2
const marvel_heros =["thor","spiderman","ironman"];
const dc_heros =["superman","flash","batman"];

// marvel_heros.push(dc_heros) // isse arrays merge nahi hote hai 
// console.log(marvel_heros);//issme dc wala array bhi aagaya as whole  another element  
// console.log(marvel_heros[3][1]) //to traverse an elemnet in an array within an array


// console.log(marvel_heros);
// console.log(dc_heros);
// const newArr =marvel_heros.concat(dc_heros);//concat m naya array banana zaruri h
// console.log(newArr);
// console.log(dc_heros);

// const all_new_heros =[...marvel_heros,...dc_heros]//spreading
// console.log(all_new_heros)

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("atharv")) // bataega array h ya nahi 
console.log(Array.from("atharv")) // array m convert kardega
console.log(Array.from({name :"atharv"}));//yr empty array dega if it cant convert somting into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //array banane m helpful