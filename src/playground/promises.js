//ES6-promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Ajay",
    //   age: 26,
    // });
    //resolve("This is my resolved data");

    reject("Something went wrong!");
  }, 5000);
});

console.log("before");

promise
  .then((data) => {
    console.log(1, data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

// promise.then(
//   (data) => {
//     console.log(1, data);
//   },
//   (error) => {
//     console.log("error: ", error);
//   }
// );

console.log("after");
