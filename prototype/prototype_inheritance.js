let car = function(model){
    this.model = model
}

car.prototype.getModel = function(){
    return this.model
}

let toyoto = new car('toyoto')
console.log(toyoto.getModel())

let nissan = new car('nissan')
console.log(nissan.getModel())


let x = {
    a:1,
    b:2
}

console.log(Object.values(x))
console.log(Object.entries(x))


let string = "Vengi"

const reverseString = (string)=>{
   return string.split("").reverse().join("")
}

console.log(reverseString(string)) 



const obj=  {
    a:1,
    b:2,
    getA : function (){
        console.log(this.a)
        return this
    },
    getB:function (){
        console.log(this.b)
    }
}

obj.getA().getB()

let arr = [1,2,3]

console.log(arr.toString())




// const a = function(x){
//     this.x = x;
// }

// const b = function(x,y){
//     this.y = y;
//     console.log(this.y)
//     this.x = a.call(this,x)
//     // function getX(){
//     //     console.log(this.x);
//     // }
//     return function getY(){
//         console.log(this.y);
//     }
//     // getB:function (){
//     //     console.log(this.b)
//     // }
// };

// const newB = new b('x','y')

// console.log(newB)

// // console.log(newB.getX)
// console.log(newB.getY())


const obj1 = {
    a:1,
    b:2
}


const b =  Object.assign({},obj1)

console.log("b",b)


const deepcopy =  JSON.parse(JSON.stringify(b))

console.log("deepcopy",deepcopy)



const arr1 = [1,2,3,10]
const arr2 = [3,4,5,6,7]

const res = arr1.concat(arr2).sort((a,b) => a - b)
const res1 = arr1.concat(arr2).sort((a,b) => b - a)

console.log(res)
console.log(res1)

const users=[
    {firstName: 'John', lastName: 'test',age: 34},
    {firstName: '1', lastName: 'test',age: 10},
    {firstName: '=2', lastName: 'test',age: 20},
    {firstName: '3', lastName: 'test',age: 78},
]

// const op = users.filter(obj=>{
//     if(obj.age<30){
//         debugger;
//         return obj.firstName;
//     }
// })

const op = users.filter(obj=>obj.age<30).map(x=> x.firstName)

console.log(op)


const reduceRes = users.reduce((obj,cur)=>{
    if(cur.age<30){
        obj.push(cur.firstName)
    }
    return obj
},[])

console.log("reduceRes",reduceRes)


