'use strict';

this.table = "window table";

const callTableExample1 = function(country){
    console.log(`This is ${this.table} in ${country}`);
}

this.garage ={
    table:"garage table",

}

let john = {
    table:"John table",
}


callTableExample1.call(this,"Window")
callTableExample1.call(this.garage,"this object")
callTableExample1.call(john,"private object")


const callTableExample2 = function(country){
    // var that = this;
    console.log(country);
    const innnerFunction = function(_country){
        // console.log(`This is ${that.table} in ${_country}`);
        console.log(`This is ${this.table} in ${_country}`);

    }

    const innnerFunctionArrow = (_country)=>{
        // console.log(`This is ${that.table} in ${_country}`);
        console.log(`This is ${this.table} in ${_country}`);

    }
    innnerFunction.call(this,"call_window")
    // innnerFunction("call_window")

    innnerFunctionArrow("arrow_window")
    const bindMethod = innnerFunction.bind(this)
    bindMethod("bind_window")
    
}

callTableExample2.call(this,"Window")


let createRoom = function(name){
    this.table = `${name} table`
}

createRoom.prototype.cleanTable = function(soap){
    console.log(`This is ${this.table} cleaning using ${soap}`)
}

const johnObj = new createRoom('John')
const jimObj =  new createRoom('Jim')
console.log(johnObj.table)
console.log(jimObj.table)
johnObj.cleanTable('soap')
jimObj.cleanTable('soap')


class Table{
    constructor(name){
        this.table = `${name} table`
    }
    cleanTable(soap){
        console.log(`This is ${this.table} cleaning using ${soap}`)
    }
}

const table = new Table('Vengi')
table.cleanTable('soap')



