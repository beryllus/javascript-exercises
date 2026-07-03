const convertToCelsius = function(fahrenheit) {
  return  roundOneDecimal((fahrenheit - 32) * 5/9);
};

const convertToFahrenheit = function(celsius) {
  return roundOneDecimal((celsius * 9/5) + 32);
};

const roundOneDecimal = (number) => Math.round(number * 10) / 10;

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
