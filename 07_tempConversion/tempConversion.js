const convertToCelsius = function(temp) {
  let celcius = (temp - 32) * (5/9);
  let celRounded = Math.round(celcius * 10) / 10;
  return celRounded;
};

const convertToFahrenheit = function(temp) {
  let fahren = (temp * (9/5) + 32);
  let fahrenRounded = Math.round(fahren * 10) / 10;
  return fahrenRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
