// const lotteryPromise = new Promise(function(resolve,reject){
//     if(Math.random() >=0.5){
//         resolve("I won")
//     }else{
//         reject(new Error("I LOST"))
//     }
// })

// lotteryPromise.then((res)=> console.log(res)).catch((err)=>console.log(err))

//   try {
//     throw "I'm Evil";
//     console.log("You'll never reach to me", 123465);
//   } catch (e) {
//     console.log(e); // I'm Evil
//   }

//   try {
//     throw new Error("I'm Evil");
//     console.log("You'll never reach to me", 123465);
//   } catch (e) {
//     console.log(e.name, e.message); // Error I'm Evil
//   }

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I am waiting for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I am waiting for 1 seconds");
  });

console.log("1. Entered Async function");
const apiCall = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log("apiCall", data);
    return "2 . I am returning some data";
  } catch (err) {
    console.log(err);
    throw "I am throwing error";
  }
};


// apiCall();
// apiCall()
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("------------3-------------");
//   });


// (async function(){
//     try {
//         const res = await apiCall();
//         console.log(res)
//     }
//     catch{
//         console.log("3. I am throwing error");
//     }
//     console.log("3. Exiting Async Function"); 
// })()

// console.log("------------3-------------");


const getRandomUser = async(url) => {
    try{
        const response = await fetch(url)
        let  data;
        if(response.status==200 && response.ok) {
            data =  await response.json();
        }
        return data
    }
    catch (err) {
        console.log(err);
      }
  };

const parallelExecution =  async function(){
    const result = await Promise.all([
        getRandomUser("https://randomuser.me/api/"),
        getRandomUser("https://randomuser.me/api/"),
        getRandomUser("https://randomuser.me/api/"),
    ])
    console.log("result",result)
} 

parallelExecution()
