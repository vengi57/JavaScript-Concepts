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


const rectangle2 = new Rectangle(11,2,"Green")
console.log("-----------------ProtoType---------------")
rectangle2.getColor()
console.log(rectangle2.getArea())
rectangle2.printDescription()

/**
 * Classes are not hosted
 * Classes are first class citizens [we can pass them into functions and return ny functions]
 * Classes are executed in strict mode
 */