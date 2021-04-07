import React from "react";
// const EditExpensePage = () => (
//   <div>This is from my edit expense components</div>
// );

const EditExpensePage = (props) => {
  //console.log(props);
  //http://localhost:8080/edit?query=rent&sort=date
  return <div>Editing the expense with id of {props.match.params.id}</div>;
};
export default EditExpensePage;
