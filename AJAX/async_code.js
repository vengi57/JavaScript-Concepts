// console.log("hello");
// const request = new XMLHttpRequest();

// request.open("GET", "https://randomuser.me/api/");
// request.send();

// request.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   const { results, info } = data;
//   console.log(results);
//   console.log(info);
// });

const getRandomUser = () => {
  fetch("https://randomuser.me/api/")
    .then(
      (response) => response.json(),
      (error) => {
        console.log(error);
      }
    )
    .then((data) => {
      console.log(data.results);
      console.log(data.info);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Success!");
    }); // called always if its resolve or rejected
};

getRandomUser();

// Promise.resolve("I am Promise").then((response) => console.log(response));
// // Promise.reject("I a, reject").then((response)=>console.log(response))

// function callback() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log("Value", i);
//     }, i * 1000);
//   }
//   setTimeout(() => {
//     console.log("first callback");
//   }, 2000);

//   let x = "hello callback";
//   console.log(x);
// }

// callback();


