import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {/* {props.name} */}
    {props.filters.text}
    {props.expenses.length}
  </div>
);

// const ConnectedExpenseList = connect((state) => {
//   return {
//     // name: "Andrew",
//     expenses: state.expenses,
//   };
// })(ExpenseList);
// // export default ExpenseList;
// export default ConnectedExpenseList;

// export default connect((state) => {
//   return {
//     // name: "Andrew",
//     expenses: state.expenses,
//   };
// })(ExpenseList);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
