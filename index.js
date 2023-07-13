// Using moment.js - refer to documentation here:
// https://momentjs.com/
// import moment from "moment";
let moment = require("moment");
const momentRandom = require("moment-random");
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

// 4. Difference between two dates
// Given two dates and two time markers, write a function to find the difference between two dates
// in the following format: "x Years, X Months, X Days, X Hours, and X Minutes"
// Example:
// differenceBetweenTwoDates("03/01/2022","13:03", "03/01/2022", "15:04")
// Result:
// 0 Years, 0 Months, 0 Days, 2 Hours, and 1 Minute
function differenceBetweenTwoDatesAndTime(date1, time1, date2, time2) {
  let start = moment(`${date1} ${time1}`, "MM/DD/YYYY HH:mm");
  let end = moment(`${date2} ${time2}`, "MM/DD/YYYY HH:mm");

  const duration = moment.duration(end.diff(start));

  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  const result = `${years} Years, ${months} Months, ${days} Days, ${hours} Hours, and ${minutes} Minutes`;
  return result;
}

let difference = differenceBetweenTwoDatesAndTime(
  "03/01/2022",
  "13:03",
  "03/04/2022",
  "15:04"
); // should result in 3 days 2 hours 1 min
console.log("the difference between these dates is", difference);

// 5. Closest to Now
// Write a function to generate two random dates and returns the date which is closest to right
// now.

function closestToNow() {
  let randomDate1 = moment(momentRandom());
  let randomDate2 = moment(momentRandom());

  let timeDifferenceOfFirstRandomDate = moment(randomDate1).fromNow();
  let timeDifferenceOfSecondRandomDate = moment(randomDate2).fromNow();

  if (randomDate2.isBefore(randomDate1)) {
    console.log(
      `${timeDifferenceOfFirstRandomDate} < ${timeDifferenceOfSecondRandomDate}, the first random time is closest to the time from now, since `,
      moment(randomDate1).format("MM/DD/YYYY"),
      `is closer to today than`,
      moment(randomDate2).format("MM/DD/YYYY")
    );
  } else {
    console.log(
      `${timeDifferenceOfFirstRandomDate} > ${timeDifferenceOfSecondRandomDate}, the second time is closest to the time from now, since`,
      moment(randomDate2).format("MM/DD/YYYY"),
      `is closer to today than`,
      moment(randomDate1).format("MM/DD/YYYY")
    );
  }
}

closestToNow();

// 6. Countdown Until 2026 in Miami
// Write a function that would return the months, days, hours, minutes, and seconds
// until the beginning of the year in Miami.

function countDownToMiamiNewYear(year) {
  let newYear = moment().year(year).month(0).startOf("month");
  // .format("MM/DD/YYYY h:mm:ss "); // need to put miami timezone
  let today = moment();
  // .format("MM/DD/YYYY h:mm:ss");

  let countdown = moment.duration(newYear.diff(today));

  const months = countdown.months();
  const days = countdown.days();
  const hours = countdown.hours();
  const minutes = countdown.minutes();
  const seconds = countdown.seconds();

  const result = `${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} seconds until New Year's Day ${year} in Miami`;
  return result;
}

console.log(countDownToMiamiNewYear(2024));
