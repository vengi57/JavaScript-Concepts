'use strict';

class Square{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height;
    }
    set area(value){
        this.width = Math.sqrt(value);
        this.height = this.width;
    }
}

class Test{
    constructor(name){
        this.name = name;
    }

    get Name(){
        return this.name;
    }

    set Name(value){
        this.name= value;
    }

    printname(){
        console.log(this.name);
    }
}


const testing = new Test("Hello");

console.log(testing.name)
testing.name = 'Hi'
testing.printname()

// const square = new Square(5, 5);
// console.log(square.area)
// square.area = 81
// console.log(square.width,square.height)
// console.log(square.area)
// square.area = 36
// console.log(square.width,square.height)
// console.log(square.area)

const square1 = new Square(3, 3);
// console.log(square1.area)


const FunctionOops  = {
    name:'Hi',
    get Name() {
        return this.name
    },
    
    set latestName(value){
        this._name = value;
    },
    
    get latestName(){
        return this._name;
    }
}

// console.log(FunctionOops.name)
// FunctionOops.name = "Hello"
// console.log(FunctionOops.namSquaree)
