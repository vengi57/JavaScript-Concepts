 a();
// b(); //Diff b/w function statement and function expression is hosting 

//! Function statement aka function Declaration
function a() {
  console.log("This is function statement");
}

//function expression which implemented in Anonymous function

var b = function () {
  console.log("This is function expression");
};

a();
b();
  

//! Anonymous Function

// function () {

// }

//! Named Function Expression

var namedFunction = function xyz() {
    console.log(xyz);//we can access xyx inside the function
};
// !Below code is not possible it gives Reference Error
// xyx();   

namedFunction(); 

// Diff b/w parameters and arguments

function diff(param1,param2){
console.log("🚀 ~ file: index.js ~ line 38 ~ diff ~ param1,param2", param1,param2)
}

diff("arg1","arg2")

//! First Class function aka First class Citizions
/**
 * Abilty to use functions to pass as an arguments
 * Ability to return a function
 * Ability to use functions as a values
*/

//! Arrow Function



// (function(){
//   console.log("Immediatelty invoked Function Expression /Statement")
//   const isPrivate = 20 //Data encapsulated
// })()

// console.log(isPrivate) // throws error

// (()=>console.log("Immediatelty invoked Function Expression /Statement"))();



const obj = {
  monday:{
    open:10,
    close:10
  },
  tuesday:{
    open:10,
    close:10
  },
  wednesday:{
    open:10,
    close:10
  }
}


console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


for(let i of Object.keys(obj)){
  console.log(i)
}

for(let i of Object.values(obj)){
  console.log(i)
}


for(let [key,value] of Object.entries(obj)){
  console.log(key,value)
}


for(let [key,{open,close}] of Object.entries(obj)){
  console.log(key,open,close)
}

