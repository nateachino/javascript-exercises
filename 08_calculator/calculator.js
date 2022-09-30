const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (sumList) {
  let sum = 0;
  for (i = 0; i < sumList.length; i++) {
    sum += sumList[i];
  }
  return Number(sum);
};

const multiply = function (nums) {
  let number = nums[0];
  for (i = 1; i < nums.length; i++) {
    number = number * nums[i];
  }
  return number;
};

const power = function (num1, exponent) {
  return Math.pow(num1, exponent);
};

const factorial = function (num) {
  let sum = 1;
  for (i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
