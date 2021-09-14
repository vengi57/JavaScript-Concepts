
//Factory Function
function circle(radius){
    return {
        radius,
        draw: function(){
            console.log("draw circle")
        }
    }
}

const drawCircle = circle(1)
drawCircle.draw()

//Constructor Function
function CircleConstructor(radius){
    this.radius = radius,
    this.draw = function(){
        console.log("draw circle",this.radius)
    }
}

const obj = new CircleConstructor(1)
obj.draw()

//Getter and Setter methods
function Circle(radius){
    this.radius = radius
    let defaultLocation = {x:0,y:0}
    this.draw = function(){
        console.log(this.radius)
    }

    Object.defineProperty(this,'defaultLocation',{
        get: function(){
             return defaultLocation;
        },
        set: function(value){
            if(typeof value=='object'){
                defaultLocation = value;
            }else{
                throw  new Error("Invalid Input")
            }

        }
    });
}

const getter_setter = new Circle(10)
console.log(getter_setter.defaultLocation)
getter_setter.defaultLocation = {x:1}
console.log(getter_setter.defaultLocation)
// getter_setter.defaultLocation = 20
// console.log(getter_setter.defaultLocation)

getter_setter.draw()





