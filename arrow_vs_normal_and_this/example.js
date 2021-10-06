this.firstName  = "vengi"
this.lastName = '57'
// The JavaScript this keyword refers to the object it belongs to.


function globalWindowScope(){
    console.log(this)
    console.log(this.firstName)
}

globalWindowScope()

let objScope = {
    firstName:"vrferfengi",
    lastName: "5srr7",
    printName(area){
        // console.log(this)
        console.log(this.firstName,this.lastName,this.area)
    }
}
console.log("--call--")
objScope.printName.call(this,"india")
console.log("--apply--")
objScope.printName.apply(this,["india"])
console.log("--bind--")
let func = objScope.printName.bind(this)
func("india")

// objScope.printName()

function ConstructorObj (name){
    this.firstName = name;
    console.log(this)
    this.printName  =  function(){
        console.log(this)
        console.log(this.firstName)
    }
}

const v = new ConstructorObj("Vengi")
v.printName()