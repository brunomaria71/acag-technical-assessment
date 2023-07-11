// Using moment.js - refer to documentation here:
// https://momentjs.com/
import moment from "moment";

// Question 1. Parsing
// Given the following strings:
// Write a function to display each date in “standard” mm/dd/yyyy format.

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

// 2. First Monday of Year
// Given a year, write a function to get the first Monday of the year. Display the date in
// mm/dd/yyyy format.

function getFirstMondayOfYear(year) {
  let formattedDate;
  return (formattedDate = moment()
    .year(year) // returns year
    .month(0) // hardcoding the january month which is 0
    .startOf("month")
    .isoWeekday(8) // we want the first monday, of the month. 1 = the monday before which was 1/26. 8 days l8er is the actual first monday of the mo
    .format("MM-DD-YYYY"));
  // given year 2023, format first monday (d(1)) month M(1)
}

let thisYear = getFirstMondayOfYear(2023); // should output jan 2 2023

console.log("the first monday of this year is ", thisYear);
