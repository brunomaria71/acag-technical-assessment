let moment = require("moment");

// Question 1. Parsing
// Given the following strings,
// Write a function to display each date in “standard” mm/dd/yyyy format.

function formatAnyInputToStandardDate(input) {
  let formattedDate;
  if (input.includes("Q")) {
    formattedDate = moment(input, ["Q [of] YYYY"]).format("MM/DD/YYYY");
  } else {
    formattedDate = moment(input, [
      "MM/DD/YYYY",
      "DD/MM/YYYY",
      "ddd, DD MMM YYYY",
    ]).format("MM/DD/YYYY");
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
