let moment = require("moment");

// 2. First Monday of Year
// Given a year, write a function to get the first Monday of the year. Display the date in
// mm/dd/yyyy format.

function getFirstMondayOfYear(year) {
  let formattedDate;
  return (formattedDate = moment()
    .year(year)
    .month(0)
    .startOf("month")
    .isoWeekday(8)
    .format("MM-DD-YYYY"));
}

let thisYear = getFirstMondayOfYear(2023); // should output jan 2 2023

console.log("the first monday of the year is", thisYear);
