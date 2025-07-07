//loops or interations
//for 
const array =[1,2,3,4,5,6,7,8,9,10];
//console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//       const element = array[i];
//     //  console.log(element);
      
// }

const array2 =[[1,2,3],[4,5,6],[7,8,9]];
// for (let i = 0; i < array2.length; i++) {

//      //console.log("i am in i loop",i);

//      for (let j = 0; j <array2.length; j++) { 

      // const elemente = array2[j];

     // console.log("i am in j loop");
      //console.log(elemente);
      i++; // ye lagana jarurui h kyuki fir wo i times bhi print kar dega 
//      }
// }

// break and continue
// for (let i = 0; i < array.length; i++) {
//       const element = array[i];
//       if(array[i] == 5){
//             //console.log("5 is the besh br0");
//             break;
//       }
//       //console.log(`value of i is ${element}`);

      
      
// }


// while and do while 

let index =0;
// while (index<=10)
//  {
//       //intialisation and iteration has to be done separately
//      // console.log(`value of index is ${index}`);// infinite loop ko stop karne k liye ctrl+c terminal pe click karne k baad
//       index =index + 2
       

// }

let myarray =['flash','batman','superman']

let arr =0;
// while (arr<myarray.length) {
//       console.log(`value is ${myarray[arr]}`);
//       arr++ ;
// }

let score = 1
// do {
//       console.log(`score is ${score}`);
//       score++
// } while (score <=10);

//for of
// ["","",""]
// [{},{},{}]

const arrr =[1, 2, 3, 4, 5]

//for (const i of object) { // yah par object se mtlb h wo  chiz not the objet os js or cpp
      //}

      // for (const i of arrr) {
      //       //console.log(i);  
      // }
// const greetings = "hello world";
//       for (const num of greetings) {
//             console.log(`each char is ${num}`);
            
//       }

// for objects

const myObject ={
      'game1' : 'NFS',
      'game2' : 'Spiderman'
 
}   // to iterate objects there are differnet ways 

// for (const [key,value] of myObject) {
//       // console.log(key,':-',value); //TypeError: myObject is not iterable
// }