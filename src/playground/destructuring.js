// // console.log("Destructuring");
// //Object Destructuring

// const person = {
//   name: "YoYo",
//   age: 20,
//   location: {
//     city: "Delhi",
//     temp: 92,
//   },
// };

// //console.log(`${person.name} is ${person.age}`);

// // const { name = "Anonymous", age } = person;
// // console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location; //we can also change the variable name
// console.log(`It's ${temperature} in ${city}`); //we can also set the default value

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${name} is ${age}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     //name: "Penguin"
//   },
// };
// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);
//-------------------------------------------------------

//const address = ["R-block", "East Vinod Nagar", "New Delhi", "110091"];
// const [street, city, state, pin] = address;
// console.log(`You are in ${street} ${city} in ${state}-${pin}`);

const address = [];

const [, , state = "Dubai"] = address;
console.log(`You are in ${state}`);
