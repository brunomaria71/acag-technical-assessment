let moment = require("moment");

// 9) All Days Of The Week of the Month
// Given a year, month, and day-of-week, write a function to return all day-of-week of that month.
// For example, if the input is 2022, 3, "Tuesday", then the result should be:
// ['3/1/2022', '3/8/2022', '3/15/2022', '3/22/2022', '3/29/2022']

function getAllSpecificDays(year, month, dayOfWeek) {
  let beginningOfMonth = moment([year, month - 1]).startOf("month");
  let endOfMonth = moment(beginningOfMonth).endOf("month");

  const days = [];
  let currentDay = moment(beginningOfMonth).day(dayOfWeek);

  for (let i = currentDay; i.isSameOrBefore(endOfMonth); i.add(7, "days")) {
    days.push(i.format("M/D/YYYY"));
  }

  return days;
}

let year = 2022;
let month = 3;
let dayOfTheWeek = "Tuesday";
console.log(getAllSpecificDays(year, month, dayOfTheWeek));
