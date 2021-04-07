// import { createStore } from "redux";

// // console.log("hello sir");

// //Store is a thing that track the changing data over time
// const store = createStore((state = { count: 0 }, action) => {
//   //   console.log("running");
//   //   return state;

//   //   if (action.type === "INCREMENT") {
//   //     return {
//   //       count: state.count + 1,
//   //     };
//   //   } else {
//   //     return state;
//   //   }

//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// });
// console.log(store.getState());

// //Actions - is an object that gets sent to the store

// //I'd like to increment the count
// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "RESET",
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// //I'd like to reset the count to zero

// console.log(store.getState());
//-----------------------------------------------------------------

////Subscribing and Dynamic actions
// import { createStore } from "redux";

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       const incrementBy =
//         typeof action.incrementBy === "number" ? action.incrementBy : 1;
//       return {
//         // count: state.count + 1,
//         count: state.count + incrementBy,
//       };
//     case "DECREMENT":
//       const decrementBy =
//         typeof action.decrementBy === "number" ? action.decrementBy : 1;
//       return {
//         count: state.count - decrementBy,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     case "SET":
//       return {
//         //count: action.count,
//         count: 102,
//       };
//     default:
//       return state;
//   }
// });

// // store.subscribe(() => {
// //   console.log(store.getState());
// // });

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

// //unsubscribe();

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "RESET",
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });

// store.dispatch({
//   type: "SET",
//   //count: 101,
// });
//------------------------------------------------------------

// //Refactoring and Organising
// import { createStore } from "redux";

// // const add = (data) => {
// //   return data.a + data.b;
// // };
// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 2, b: 3 }, 100));

// //Action generators - function that return action objects
// // const incrementCount = (payload = {}) => ({
// //   type: "INCREMENT",
// //   incrementBy:
// //     typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
// // });

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: "INCREMENT",
//   incrementBy,
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//   type: "DECREMENT",
//   decrementBy,
// });

// const resetCount = () => ({
//   type: "RESET",
// });

// const setCount = ({ count }) => ({
//   type: "SET",
//   count,
// });

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         // count: state.count + 1,
//         count: state.count + action.incrementBy,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - action.decrementBy,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     case "SET":
//       return {
//         count: action.count,
//       };
//     default:
//       return state;
//   }
// });

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch(incrementCount());

// store.dispatch(resetCount());

// store.dispatch(decrementCount());

// store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch(setCount({ count: 101 }));
//---------------------------------------------------------------------

//Reducers
import { createStore } from "redux";

const add = ({ a, b }, c) => {
  return a + b + c;
};
console.log(add({ a: 2, b: 3 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

//Reducers
//1. Reducers are pure function
//2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        // count: state.count + 1,
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
