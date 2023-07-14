// Using moment.js - refer to documentation here:
// https://momentjs.com/
// import moment from "moment";
let moment = require("moment");
let momentRandom = require("moment-random");
let momentTz = require("moment-timezone");
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
  let newYear = moment()
    .year(year)
    .month(0)
    .startOf("month")
    .tz("America/New_York");
  // .parseZone("YYYY-MM-DD HH:mm:ss", "America/New_York");
  // .format("MM/DD/YYYY h:mm:ss "); // need to put miami timezone
  let today = moment().tz("America/New_York");
  // .format("MM/DD/YYYY h:mm:ss");

  let countdown = moment.duration(newYear.diff(today));

  const months = countdown.months() + countdown.years() * 12;
  const days = countdown.days();
  const hours = countdown.hours();
  const minutes = countdown.minutes();
  const seconds = countdown.seconds();

  const result = `${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} seconds until New Year's Day ${year} in Miami, which is ${newYear}. This is ${today} time in miami rn`;
  return result;
}

console.log(countDownToMiamiNewYear(2026));

// 7. Countdown Until 2026 in Qatar
// Write a function that would return the months, days, hours, minutes, and seconds
// until the beginning of the year in Qatar

function countDownToQatarNewYear(year) {
  let newYear = moment().year(year).month(0).startOf("month").tz("Asia/Qatar");
  // .parseZone("YYYY-MM-DD HH:mm:ss");

  // .format("MM/DD/YYYY h:mm:ss "); // need to put Qatar timezone
  let today = moment();
  let todaysTimeZone = today.tz("Asia/Qatar");
  console.log(`this is today in Asia ${todaysTimeZone}`);
  // .format("MM/DD/YYYY h:mm:ss");

  let countdown = moment.duration(newYear.diff(today));

  const months = countdown.months() + countdown.years() * 12;
  const days = countdown.days();
  const hours = countdown.hours();
  const minutes = countdown.minutes();
  const seconds = countdown.seconds();

  const result = `${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} seconds until New Year's Day ${year} in Qatar, which is ${newYear}, today is ${today}`;
  return result;
}

console.log(countDownToQatarNewYear(2026));

// 8) Time Zone Difference
// Given a date and two timezones write a function to return the hour difference between the
// timezones
// Example #1:
// timezoneHourDifference("03/02/2022 03:45pm","America/Los_Angeles","Asia/Shanghai")
// Result:: 8
// Example #2:
// timezoneHourDifference("03/22/2022 03:45pm","America/Los_Angeles","Asia/Shanghai")
// Result:: 9
function timezoneHourDifference(dateAndTime, timezone1, timezone2) {
  // let today = moment().parseZone("YYYY-MM-DD HH:mm:ss", "America/New_York");
  // return today;
  // let diff = moment().parseZone(dateAndTime, timezone1);
}

// console.log(
//   timezoneHourDifference(
//     "03/02/2022 03:45pm",
//     "America/Los_Angeles",
//     "Asia/Shanghai"
//   )
// );

// 9) All Days Of The Week of the Month
// Given a year, month, and day-of-week, write a function to return all day-of-week of that month.
// For example, if the input is 2022, 3, "Tuesday", then the result should be:
// ['3/1/2022', '3/8/2022', '3/15/2022', '3/22/2022', '3/29/2022']
function getAllSpecificDays(year, month, dayOfWeek) {}

// 10) Imaginary World
// Imagine that the world was different and the first day of the year is March 1st.
// Given a date, write a function to return which week of the year it is.
function getWeekOfYear(date) {}
