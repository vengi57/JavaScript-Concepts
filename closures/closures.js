var passed = 5


function add(inner){
    return  passed+inner;
}

console.log(add(2))


function z(z_variable){
    function y(y_variable){
        console.log(z_variable)
        function x(x_variable){
            console.log(z_variable,y_variable,x_variable)
        }
        console.dir(x)
        x(30)
    }
    console.dir(y)
    y(20)
}
z(10)
console.dir(z)

const increment =function(){
    let number = 0
    return function(){
        console.log(number++)
    }
}

const inc = increment()

inc()
inc()
inc()


let f;

const g = function(){
    const a = 10;
    f = function(){
        return a*10
    }
}
g()
console.dir(f)
f()


//Call stack and closures
const printAfter =  function(value,wait){
    let a = value*10
    let x = setTimeout(()=>{
        console.log(a,globalValue)
    },value*wait)
    // console.dir("qeq",x)
    // clearTimeout(x)
}

const globalValue = 100
printAfter(2,1000)