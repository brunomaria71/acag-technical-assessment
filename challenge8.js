let moment = require("moment");
let momentTz = require("moment-timezone");

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
  let firstZone = moment(`${dateAndTime}`, "MM/DD/YYYY HH:mm").tz(timezone1);
  let secondZone = moment(`${dateAndTime}`, "MM/DD/YYYY HH:mm").tz(timezone2);
  let difference = firstZone.hour() - secondZone.hour();
  let rounded = Math.abs(difference);
  return rounded;
}

console.log(
  timezoneHourDifference(
    "03/02/2022 03:45pm",
    "America/Los_Angeles",
    "Asia/Shanghai"
  )
);

console.log(
  timezoneHourDifference(
    "03/22/2022 03:45pm",
    "America/Los_Angeles",
    "Asia/Shanghai"
  )
);
