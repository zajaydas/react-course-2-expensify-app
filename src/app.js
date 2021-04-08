import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses.js";
import { setTextFilter } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase.js";
//import "./playground/promises.js";

const store = configureStore();

//checking source-map is still working
//console.log("testing");

//ReactDOM.render(<AppRouter />, document.getElementById("app"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
