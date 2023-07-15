let moment = require("moment");

// 3. Last Monday of Year
// Given a year, write a function to get the last Monday of the year. Display the date in
// mm/dd/yyyy format.

function getLastMondayOfYear(year) {
  let formattedDate;
  return (formattedDate = moment()
    .year(year)
    .month(11)
    .endOf("month")
    .isoWeekday(1)
    .format("MM-DD-YYYY"));
}

let lastYear = getLastMondayOfYear(2023); // should output 12/25/2023

console.log("the last monday of this year is ", lastYear);
