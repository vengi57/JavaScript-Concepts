
var x = () => {
  console.log("Arrow function");
};

function y() {
  console.log("Normal function");
}

var z = function () {
    console.log("Assignment function");
}


//Hosting 
/**
 * Hosting only moves the variable declaration not the assignment
 * Be aware of console logs (See the example at line 12 and 17)
 */

x = 1
if (x === 1) {
  x = 2;
  console.log(y)
  y = 4
  console.log("x1",x);
  var y;
  console.log(y)
}
console.log("x2",x);
var x ;
