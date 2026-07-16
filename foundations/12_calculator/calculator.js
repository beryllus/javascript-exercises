const add = function (a, b) {
  return a + b;

};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((accumulator, current) => accumulator * current, 1);

};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let total = 1;
  for (let i = number; i >= 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
