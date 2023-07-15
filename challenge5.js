let moment = require("moment");
let momentRandom = require("moment-random");

// 5. Closest to Now
// Write a function to generate two random dates and returns the date which is closest to right
// now.

function closestToNow() {
  let randomDate1 = moment(momentRandom());
  let randomDate2 = moment(momentRandom());

  let timeDifferenceOfFirstRandomDate = moment(randomDate1).fromNow();
  let timeDifferenceOfSecondRandomDate = moment(randomDate2).fromNow();

  if (randomDate2.isBefore(randomDate1)) {
    return (result = `${timeDifferenceOfFirstRandomDate} < ${timeDifferenceOfSecondRandomDate}, the first random time is closest to the time from now, since  ${moment(
      randomDate1
    ).format("MM/DD/YYYY")} is closer to today than ${moment(
      randomDate2
    ).format("MM/DD/YYYY")}`);
  } else {
    return (result = `${timeDifferenceOfFirstRandomDate} > ${timeDifferenceOfSecondRandomDate}, the second time is closest to the time from now, since ${moment(
      randomDate2
    ).format("MM/DD/YYYY")} is closer to today than ${moment(
      randomDate1
    ).format("MM/DD/YYYY")}`);
  }
}

console.log(closestToNow());
