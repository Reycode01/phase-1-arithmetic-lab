// Define num1 and num2
const num1 = 31;
const num2 = 2;

// Equation to multiply num1 and num2 resulting in 62
const multiply = num1 * num2;

// Function to generate a random integer greater than 0
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

// Define num3 and num4 for the mod operation
const num3 = 24;
const num4 = 5;

// Equation to calculate the remainder of num3 divided by num4 resulting in 4
const mod = num3 % num4;

// Set of numbers to find the maximum
const numbers = [5, 10, 15, 20];

// Function to find the maximum number in the set, returning 20
const max = Math.max(...numbers);

// Exporting variables and functions
module.exports = {
  multiply,
  random,
  mod,
  max,
};



