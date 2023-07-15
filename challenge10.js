let moment = require("moment");

// 10) Imaginary World
// Imagine that the world was different and the first day of the year is March 1st.
// Given a date, write a function to return which week of the year it is.
function getWeekOfYear(date) {
  let beginningOfYear = moment(date).month(2).startOf("month");

  let newDate = moment(date).subtract(beginningOfYear.month(), "months");

  return newDate.isoWeek();
}

let weekOfYear = getWeekOfYear("2022-07-10");
let message = "the week of this imaginary world is";

console.log(message, weekOfYear);
