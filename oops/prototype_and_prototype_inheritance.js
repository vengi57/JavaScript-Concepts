class Rectangle {
    constructor(width,height,color,) {

        this.width = width;
        this.height = height;
        this.color = color;

    }

    getArea(){
        return this.width * this.height
    }

    printDescription(){
        console.log(`I am ${this.color} Rectangle`)
    }
}

Rectangle.prototype.getColor = function(){
    console.log(`I am ${this.color}`)
}


const rectangle1 = new Rectangle(10,5,"Red")

console.log(rectangle1.getArea())
rectangle1.printDescription()
console.log("-----------------ProtoType---------------")
rectangle1.getColor()

//ProtoType Chaining

console.log(rectangle1.__proto__) // gives Rectangle prototype
console.log(rectangle1.__proto__.__proto__) //gives Object prototype [ has many build in property]
console.log(rectangle1.__proto__.__proto__.__proto__) // gives null

console.dir(Rectangle.prototype.constructor)
console.dir(Rectangle)

console.log(Rectangle.prototype.constructor===Rectangle)

console.log("-----------------ProtoType Arrays---------------")

let arr = [1,2,2,5,6,6,7,7,8,9,0] // new Array ===[]

console.log(arr.__proto__) // gives Array prototype
console.log(Array.prototype) // gives Array prototype

console.log(arr.__proto__.__proto__) // gives Object prototype [ has many build in property]


Array.prototype.unique = function(){
    console.log("this",this)
    return [...new Set(this)]
}

console.log(arr.unique())