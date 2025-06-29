// how does js execute code+ call stack 
//javascript execution context 
//runs code in two phases 
// 1. global EC  this keyword m value hoti h browser and node m alag hoti h  browser main this ki value usme window object aati h
// js is single threaded 
//2. functional execution context 
//3.eval execution context 

// js code is executed in two phases 
//1. memory creation phase
//2. execution phase 
//example

let val1 = 10
let val2 = 5
function addNum(num1,num2){
      let total= num1+num2
      return total
}
let result1= addNum(val1,val2)
let result2= addNum(10,2)
// 1.sabse pehle global execution se run hoga phir this k andar allocate hoga 
//2.memory creation phase m saare variable ikathe store karnege  jaise val1=undefined har variable esa hi hoga or addNum m defination jaegi result1=undefined 
//3.execution phase val1=10,val2=5 or addnum pe alag execution context banaega usme new variable enviorment + execution thread  jo kaam hojane k baad delete hojaega 
// jitni baar ye function execute honge ye alag ec banega usme momory creation or execution phase phirse honge for addnum
//in sabke baad sab global ec m return kardiye jaenge


// call stacks 
//
//2.function aate jaenge execution k baad hat jaega 
//1.global execution 