let moment = require("moment");

// 4. Difference between two dates
// Given two dates and two time markers, write a function to find the difference between two dates in the following format: "x Years, X Months, X Days, X Hours, and X Minutes"
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
  "03/01/2022",
  "15:04"
);
console.log("the difference between these two dates is", difference);
