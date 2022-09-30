const leapYears = function (year) {
  let trueOrFalse = false;
  if (year % 4 === 0) {
    trueOrFalse = true;
    if (year % 100 === 0) {
      trueOrFalse = false;
      if (year % 400 === 0) {
        trueOrFalse = true;
      }
    } else if (!year % 100 === 0) {
      trueOrFalse = true;
    }
  }
  return trueOrFalse;
};

// Do not edit below this line
module.exports = leapYears;
