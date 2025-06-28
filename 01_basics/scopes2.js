//
function one(){
      const username ="atharv"

      function two(){
            const website ="youtube"
            console.log(username);
      } //two can have everything of one but not vice versa as parent and child/

     //console.log(website);  //gives error coz out of scope

      two()
}
//one()

if(true){
      const username ="atharv"
      if(username==="atharv"){
            const website ="youtube"
           // console.log(username+website);
      }
      //console.log(website);
}

//console.log(username);

//++++++++++++++++++++++++ intresting +++++++++++++++++++++
console.log(addOne(5))
function addOne(num){
      return num+1

}
//addOne(5)
//another way to write funtions 
//in js variables can hold anything like value, functions, json values etc

//console.log(addTwo(5));   //hoisting -> function kis tarah se declare hue h kaha unko rakha jata h
//this console will give error cus we here have stored function into a variable here we are accessing before initialisation
const addTwo = function(num){
      return num + 2;
}
console.log(addTwo(5))