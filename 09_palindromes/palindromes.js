const palindromes = function (input) {
  let array = Array.from(input);
  let newArray = "";
  for (i = 1; i <= array.length; i++) {
    newArray += array[array.length - i];
  }
  if (newArray === input) {
    return newArray.reverse();
  } else {
    return newArray.reverse();
  }
};

// Do not edit below this line
module.exports = palindromes;
