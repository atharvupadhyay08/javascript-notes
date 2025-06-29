// Immediately Invoked Function Expression (IIFE)

(function chai(){ // this one is a named IIFE6
      console.log(`DB CONNECTED`);

})();
// to avoid pollution due to global scope
//semicolon is neceassary to end context 
// iife is ()();
(()=>{
      console.log(`DB CONNECTED 2`)
})();

((name)=>{//ye parameter dala h 
      console.log(`my name is ${name}`)
})("athrv");// this nothing but=> chai("atharv")