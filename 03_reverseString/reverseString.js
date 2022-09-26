const reverseString = function(words) {
    let wrd = ''
    for (i=0;i<words.length;i++){
        wrd += words[words.length-1-i];
    }
    return wrd
};

// Do not edit below this line
module.exports = reverseString;
