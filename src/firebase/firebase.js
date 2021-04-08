// import * as firebase from "firebase";
// //for example
// // import * as expensesActions from "../actions/expenses";

// const config = {
//   apiKey: "AIzaSyDfN7RNFxcwlxSBMPMLnq8LS2zeCUWJ_Dw",
//   authDomain: "expensify-5eeac.firebaseapp.com",
//   databaseURL: "https://expensify-5eeac-default-rtdb.firebaseio.com",
//   projectId: "expensify-5eeac",
//   storageBucket: "expensify-5eeac.appspot.com",
//   messagingSenderId: "50980248052",
//   appId: "1:50980248052:web:796e8922f94f4760d081a1",
//   measurementId: "G-RX1G1BDX2F",
// };
// firebase.initializeApp(config);

// // firebase
// //   .database()
// //   .ref()
// //   .set({
// //     name: "Ajay kumar",
// //     age: 23,
// //     isSingle: false,
// //     location: {
// //       city: "New Delhi",
// //       country: "India",
// //     },
// //   });

// const database = firebase.database();
// database
//   .ref()
//   .set({
//     name: "Ajay kumar",
//     age: 23,
//     isSingle: false,
//     location: {
//       city: "New Delhi",
//       country: "India",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// // database.ref().set("This is my data");

// //In this way we can only update the age property
// // database.ref("age").set({
// //   age: 28,
// // });

// // database.ref("age").set(27);
// // database.ref("location/city").set("New York");

// //adding new data
// database
//   .ref("attributes")
//   .set({
//     height: 73,
//     weight: 150,
//   })
//   .then(() => {
//     console.log("Second set call worked");
//   })
//   .catch(() => {
//     console.log("Things didnt for the second error", e);
//   });
//-----------------------------------------------------

// //remove data from Database
// import * as firebase from "firebase";

// const config = {
//   apiKey: "AIzaSyDfN7RNFxcwlxSBMPMLnq8LS2zeCUWJ_Dw",
//   authDomain: "expensify-5eeac.firebaseapp.com",
//   databaseURL: "https://expensify-5eeac-default-rtdb.firebaseio.com",
//   projectId: "expensify-5eeac",
//   storageBucket: "expensify-5eeac.appspot.com",
//   messagingSenderId: "50980248052",
//   appId: "1:50980248052:web:796e8922f94f4760d081a1",
//   measurementId: "G-RX1G1BDX2F",
// };
// firebase.initializeApp(config);

// const database = firebase.database();

// database
//   .ref()
//   .set({
//     name: "Ajay kumar",
//     age: 23,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//       title: "Software Engineer",
//       company: "Source Soft Solutions",
//     },
//     location: {
//       city: "New Delhi",
//       country: "India",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("Data was remove");
// //   })
// //   .catch((e) => {
// //     console.log("Did not remove data", e);
// //   });

// //it will all delete as remove method
// database.ref("isSingle").set(null);

// //updating values
// // database.ref().update({
// //   job: "Manager",
// //   "location/city": "Boston",
// // });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Gurgoan",
// });
//------------------------------------------------------

//Fetching Data from firebase
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDfN7RNFxcwlxSBMPMLnq8LS2zeCUWJ_Dw",
  authDomain: "expensify-5eeac.firebaseapp.com",
  databaseURL: "https://expensify-5eeac-default-rtdb.firebaseio.com",
  projectId: "expensify-5eeac",
  storageBucket: "expensify-5eeac.appspot.com",
  messagingSenderId: "50980248052",
  appId: "1:50980248052:web:796e8922f94f4760d081a1",
  measurementId: "G-RX1G1BDX2F",
};
firebase.initializeApp(config);

const database = firebase.database();

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

database.ref().on("value", (snapshot) => {
  console.log(snapshot.val());
});

setTimeout(() => {
  database.ref("age").set(28);
}, 3500);
