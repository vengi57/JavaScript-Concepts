const profile={
    firstName:"",
    lastName:"",
    setName:function(name){
        let splitName = function (n){
            let nameArr = n.split(" ")
            this.firstName = nameArr[0]
            this.lastName = nameArr[1]
        }
        splitName(name)
    }
}

profile.setName("Joggn deep")
console.log(profile.firstName)
console.log(profile.lastName) 

profile.setName("Joggn deep")
console.log(window.firstName)
console.log(window.lastName)

// Arrow function
const profile1={
    firstName:"",
    lastName:"",
    setName:function(name){
        let splitName = (n)=>{
            let nameArr = n.split(" ")
            this.firstName = nameArr[0]
            this.lastName = nameArr[1]
        }
        splitName(name)
    }
}


profile1.setName("Joggn deep")
console.log(profile1.firstName)
console.log(profile1.lastName)


var x = function(){
    console.log(arguments[0])
}

x(1,2,3)

// var error = ()=> {
//     console.log(arguments[0])
// }

// error(1,2,3)

var x1 = (...n)=> {
    console.log(n[0])
}

x1(1,2,3)




