let moment = require("moment");
let momentTz = require("moment-timezone");
// 7. Countdown Until 2026 in Qatar
// Write a function that would return the months, days, hours, minutes, and seconds
// until the beginning of the year in Qatar

function countDownToQatarNewYear(year) {
  let newYear = moment.tz([year, 0, 1], "Asia/Qatar");

  let today = moment.tz("America/New_York");

  let countdown = moment.duration(newYear.diff(today));

  const months = countdown.months() + countdown.years() * 12;
  const days = countdown.days();
  const hours = countdown.hours();
  const minutes = countdown.minutes();
  const seconds = countdown.seconds();

  const result = `${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} seconds until New Year's Day ${year} in Qatar 🎊`;
  return result;
}

console.log(countDownToQatarNewYear(2026));
