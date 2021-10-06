// // this keyword -> where we declare oit in local or global scope
// // objects creatio with es5 and es 6
// //oops in js
// console.log("this keywoprd")
// console.log(this)

this.firstname = "John"
this.lastname = '57'

// // any function which is writtern outside the object (which has global wuindow scope)
// function globalScopeWindow(){
//     // let x = 10;
//     console.log("this inside function")
//     console.log(this)
//     console.log(this.firstname,this.lastname)
// }

// //  any function which is writtern inside the object has local scope
// let objScope={
//     firstname:"Vengi",
//     lastname:"57",
//     printName(){
//         console.log(this)
//         console.log(this.firstname,this.lastname)
//     }
// };

// objScope.printName.call(this)
// // objScope.printName.apply(this)
// // var bindFunc = objScope.printName.bind(this)
// // bindFunc()

// // call,apply and bind ///borrow function from another object

// // objScope.printName()

// // console.log(x)

// // globalScopeWindow()


// let printFullNameArg = function(town,country) {
//     console.log(this.firstname+" "+this.lastname+" "+town+" "+country)
// }

// printFullNameArg.call(this,"Chennai","India")
// printFullNameArg.apply(this,["Chennai","India"])

// Constructor function - es5
// function CircleConstructor(radius){
//     this.radius = radius;
//     this.drawCircle = function(){
//         console.log(this.radius)
//     }
// }

// const newObj = new CircleConstructor(5)

// newObj.drawCircle()



//ES6
//getter and setter  get & set 
// class Getteretter{
//     constructor(name){
//         this.name = name;
//     }

//     get getName(){
//         return this.name
//     }

//     set setName(value){
//         this.name =  value
//     }

//     printName(){
//         console.log(this.name)
//     }

// }

// const obj = new Getteretter("Vengi")

// console.log(obj.name)
// obj.name  = "test"
// console.log(obj.name)

// class Parent{
//     constructor(){

//     }
//     printParent(){
//         console.log("This is Parent");
//     }
// }



// class Child extends Parent{
//     constructor(){
//         super();
//     }

//     printParent(){
//         super.printParent();
//         console.log("This is Child");
//     }
// }

// const childObj = new Child()
// childObj.printParent()