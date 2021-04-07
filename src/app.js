// import React from "react";
// import ReactDOM from "react-dom";
// //Just import BrowserRouter and Route
// import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
// import "normalize.css/normalize.css";
// import "./styles/styles.scss";

// const ExpenseDashboardPage = () => (
//   <div>This is from my dashboard components</div>
// );

// const AddExpensePage = () => <div>This is from my add expense components</div>;

// const EditExpensePage = () => (
//   <div>This is from my edit expense components</div>
// );

// const HelpPage = () => <div>This is from my Help page components</div>;

// const NotFoundPage = () => (
//   <div>
//     {/* this will refresh again the home page i.e. it will use server side routing */}
//     {/* 404!-<a href="/">Go Home</a> */}
//     {/* This will use client side routing */}
//     404-<Link to="/">Go home</Link>
//   </div>
// );

// const Header = () => (
//   <header>
//     <h1>Expensify</h1>
//     {/* <Link to="/">Dashboard</Link>
//     <Link to="/create">Create Expense</Link>
//     <Link to="/edit">Edit Expense</Link>
//     <Link to="/help">Help</Link> */}
//     <NavLink to="/" activeClassName="is-active" exact={true}>
//       Dashboard
//     </NavLink>
//     <NavLink to="/create" activeClassName="is-active">
//       Create Expense
//     </NavLink>
//     <NavLink to="/edit" activeClassName="is-active">
//       Edit Expense
//     </NavLink>
//     <NavLink to="/help" activeClassName="is-active">
//       Help
//     </NavLink>
//   </header>
// );

// const routes = (
//   <BrowserRouter>
//     {/* BrowserRouter api expects child either not exists or have a length of one*/}
//     {/* But we can create more than one child in BrowserRouter by using <div> tag */}
//     {/* <Route path="/" component={ExpenseDashboardPage} /> */}
//     {/* <div>
//       <Route path="/" component={ExpenseDashboardPage} exact={true} />
//       <Route path="/create" component={AddExpensePage} />
//       <Route path="/edit" component={EditExpensePage} />
//       <Route path="/help" component={HelpPage} />
//       <Route component={NotFoundPage} />
//     </div> */}
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/" component={ExpenseDashboardPage} exact={true} />
//         <Route path="/create" component={AddExpensePage} />
//         <Route path="/edit" component={EditExpensePage} />
//         <Route path="/help" component={HelpPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );
// ReactDOM.render(routes, document.getElementById("app"));

//-------------------------------------------------------------------------
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
import { fromPairs } from "lodash-es";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("water"));

setTimeout(() => {
  store.dispatch(setTextFilter("rent"));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//ReactDOM.render(<AppRouter />, document.getElementById("app"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
