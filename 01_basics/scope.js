//scope  
// let a= 10
// const b= 20
// var c = 30

//var c=300 //this is global scope
let a=300

if(true){
   let a= 10   //if k andar is block scope 
   console.log("INNER:",a);
   const b= 20
   //c = 30  // ye block k bahr nai jana chaiye tha but yejata h coz v is writtern in var
}

//node m scope alag h and console m jake scope alg hota h

 console.log(a);
//console.log(b);
//console.log(c);//this prints c i.e. 30 which should not happen here c is var