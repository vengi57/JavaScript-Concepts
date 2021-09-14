'use strict';
const obj = {
    firstName:"Vengi",
    lastName:"Thiyagarajan",
    getName(){
        console.log(this.firstName,this.lastName)
    }
};

obj.getName() 

this.firstName = "Global vengi"
function getNameGlobal(){
    console.log("getNameGlobal")
    console.log(this.firstName)
}

getNameGlobal.call(this)
// getNameGlobal()


function getNames(firstName){
    this.firstName = firstName;
    console.log(this.firstName)
}

const test = new getNames("vengi new obj")


