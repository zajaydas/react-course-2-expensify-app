//npm i lodash
import { compose, pipe } from "lodash/fp";

//function composing
let input = "    JavaScript     ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// const result = wrapInDiv(toLowerCase(trim(input)));
// console.log(result);

const result = compose(wrapInDiv, toLowerCase, trim);
//console.log(result);
