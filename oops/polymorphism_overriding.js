class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log("Generic Animal Sound",this.name);
    }

    sum(a1,a2){
        console.log(a1+a2)
    }

    sum(a1,a2,a3){
        console.log(a1+a2+a3)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound(){
        super.makeSound();
        console.log("Woff ! Woff!",this.name);
    }
}

const s1 = new Animal('Pig')
s1.makeSound()
const s2 = new Dog('Dog')
s2.makeSound()
//Function overloading not support by js
s1.sum(1,2,3)
s1.sum(1,2)
