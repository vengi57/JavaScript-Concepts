let name ={
    firstname: 'John',
    secondname: 'test',
    printFullName: function (fn) {
        console.log(this.firstname+" "+this.secondname)
    }
}
name.printFullName();

let name2 ={
    firstname: 'sachin',
    secondname: 'test',

}

//function borrowing
//borrow a function from other objects --> we are using call method 
// first argument refers to this and followed by next argument whcih we passed
//call(this,arg1.arg2)
name.printFullName.call(name2);

let printFullName =  function () {
    console.log(this.firstname+" "+this.secondname)
}

printFullName.call(name);
printFullName.call(name2);


let printFullNameArg = function(town,country) {
    console.log(this.firstname+" "+this.secondname+" "+town+" "+country)
}

console.log("-----------call-------------------")

printFullNameArg.call(name,"chennai","India");
printFullNameArg.call(name2,"mumbai","India");



//apply(this,[arg1.arg2])
console.log("-------------apply--------------")
printFullNameArg.apply(name,["chennai","India"]);
printFullNameArg.apply(name2,["mumbai","India"]);


//bind will return the copy of the method
//it will not directly call the method..but will copy and retunn a new method

//it will bind the name object and pass the arg and return the copy of the method 
// which will be called later
console.log("-------------bind--------------")
let printFullNameBind = printFullNameArg.bind(name,"chennai","India")
console.log(printFullNameBind)
printFullNameBind()



const obj = {
    simple(){
        return this
    }
}

let a = obj.simple

console.log(obj.simple()==window)
console.log(a()==window)


this.table = "window table"

const clearTable= function(soap){
    console.log(`cleaning ${this.table} using ${soap}`)
}

this.garrage={
    table:"garrage"
}


let soap={
    table:"let soap"
}


// clearTable.call(this,"soap")
// clearTable.call(this.garrage,"soap")
// clearTable.call(soap,"soap")



var cars = {
    label: 'Autos',
    subs: [
      {
        label: 'SUVs',
        subs: []
      },
      {
        label: 'Trucks',
        subs: [
          {
            label: '2 Wheel Drive',
            subs: []
          },
          {
            label: '4 Wheel Drive',
            subs: [
              {
                label: 'Ford',
                subs: []
              },
              {
                label: 'Chevrolet',
                subs: []
              }
            ]
          }
        ]
      },
      {
        label: 'Sedan',
        subs: []
      }
    ]
  }
  
  
  var findObjectByLabel = function(obj, label) {
      if(obj.label === label) { return obj; }
      for(var i in obj) {
      console.log(obj[i])
          if(obj.hasOwnProperty(i)){
              var foundLabel = findObjectByLabel(obj[i], label);
              if(foundLabel) { 
              console.log(foundLabel)
              return foundLabel; }
          }
      }
      return null;
  };

  findObjectByLabel(cars,"Chevrolet")
  
  
