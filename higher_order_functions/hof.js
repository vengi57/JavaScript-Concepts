// function which return the another function
// function which takes functions as an arguments

const arr = [1,2,3,4,5]

const area =(radius) => {
    return Math.PI * radius *radius;
}

const circumference = (radius) => {
    return  2 * Math.PI * radius;
}

const diameter =(radius) => {
    return 2 *radius;
}

const calculateResult=(arr,logic)=>{
    const output =[];
    for(let i=0;i<arr.length;i++) {
        output.push(logic(arr[i]));
    }
    return output;
}
console.log(calculateResult(arr,area));
console.log(calculateResult(arr,circumference));
console.log(calculateResult(arr,diameter));

console.log(arr.map(diameter));


//HOP where functions are passsed as arguments
const uppercase = function(str){
    return str.toUpperCase();
}

const transformer = function(str,fn){
    console.log(fn.name)
    console.log(fn(str))
}

transformer("hello i am hof with call back",uppercase)

function printInUpperCase(str){ 
    console.log(str.toUpperCase())
}

["hello","hi","exit"].forEach(printInUpperCase) //HOF with Call Back

//HOP where it returns functions

//Normal way

const greet = function(name){
    return function(country){
        console.log(`Hey ${name} i am from ${country}`)
    }
}

//I wrote

// const greet = (name)=>{
//     const print=(country)=> console.log(`Hey ${name} i am from ${country}`)
//     return print
// }

//Expected way

// const greet = (name)=>(country)=> console.log(`Hey ${name} i am from ${country}`)

greet("Joggn")("USA")

const copyGreet  = greet("John")
copyGreet("England")
copyGreet("Aus")
