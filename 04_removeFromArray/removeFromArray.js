const removeFromArray = function (...list) {
  let newArray = list.splice(list);
  let splicedArray = newArray.splice(list);

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
