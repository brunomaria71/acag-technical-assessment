// Using moment.js - refer to documentation here:
// https://momentjs.com/
import moment from "moment";

// Question 1. Parsing
// Given the following strings:
// Write a function to display each date in “standard” mm/dd/yyyy format.
// function formatAnyInputToStandardDate(input) {
// }

function formatAnyInputToStandardDate(input) {
  let formattedDate;
  if (input.includes("Q")) {
    formattedDate = moment(input, ["Q [of] YYYY"]).format("MM/DD/YYYY"); // Q returns 1 ... 4. so if Q of year, format
  } else {
    formattedDate = moment(input, [
      "MM/DD/YYYY", // first i try to format in the regular format as to not disrupt case #2.
      "DD/MM/YYYY", // if the day is first, as in the #1 case, then we put that format in to parse
      "ddd, DD MMM YYYY", // if the day of the week, with day, month, and year is sent, format
    ]).format("MM/DD/YYYY"); // format everything into this way
  }
  return formattedDate;
}

let dayFirst = formatAnyInputToStandardDate("13/02/2022");
let normalDate = formatAnyInputToStandardDate("03/04/2022");
let quarterDate = formatAnyInputToStandardDate("Q3 of 2021");
let dayOfWeek = formatAnyInputToStandardDate("Tue, 22 Feb 2022");

console.log("the date that was day first is", dayFirst);
console.log("the normal date is", normalDate);
console.log("the quarter date is", quarterDate);
console.log("the date without weekday is", dayOfWeek);
