class Car{
    constructor(carName,currentSpeed){
        this.carName = carName;
        this.currentSpeed = currentSpeed;
    }

    // accelerate(){
    //     this.currentSpeed = this.currentSpeed + 10;
    //     // console.log(this.currentSpeed,"km/hr")
    // }
    // break(){
    //     this.currentSpeed = this.currentSpeed - 5;
    //     // console.log(this.currentSpeed,"km/hr")
    // }
}

Car.prototype.accelerate = function(){
    this.currentSpeed = this.currentSpeed + 10;
}

Car.prototype.break = function(){
    this.currentSpeed = this.currentSpeed - 5;
}

const car1 = new Car('BMW',100)
const car2 = new Car('AUDI',50)

car1.accelerate()
car1.accelerate()
console.log(car1.currentSpeed)
car1.break()
console.log(car1.currentSpeed)

car2.accelerate()
car2.accelerate()
console.log(car2.currentSpeed)
car2.break()
console.log(car2.currentSpeed)

