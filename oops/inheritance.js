class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    describe(){
        console.log(`I am ${this.name} and i am ${this.age} old`);
    }
}
class Programmer extends Person{
    constructor(name,age,experience){
        super(name,age)
        this.experience = experience;
    }

    code(){
        console.log(`I am ${this.name} coding  with ${this.experience} of experience`);
    }
}

const programmer = new Programmer("Vengi",24,2)
programmer.code()

const person = new Person("John",60)
person.describe()

const Programmers =[
    new Programmer("Johny",20,4),
    new Programmer("Vijay",55,34)
]

function describeProgrammers(){
    for (let programmer of Programmers){
        programmer.code()
    }
}

describeProgrammers()
