const repeatString = function(string, num) {
    let counter = 1;
    let repeatedString = "";

    if (num < 0) return "ERROR";
    while (counter <= num) {
        repeatedString = repeatedString.concat(string);
        counter++;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
