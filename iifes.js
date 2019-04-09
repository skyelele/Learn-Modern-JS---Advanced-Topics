// Immediately Invoked Function Expressions (IIFEs)

// Function Declaration
function powerDecl(num) {
  console.log(num * num);
}

// Function Expression
const powerExp = function(num) {
  console.log(num * num);
};

powerDecl(2);
powerExp(2);

// Add parenthesis to immediately invoke <3
// :) <3 :D
var powerExp = (function(num) {
  console.log(num * num);
})(2);

// Logs 4
(function(num) {
  console.log(num * num);
})(2);

// Logs 4
(function(num) {
  console.log(num * num);
})(2);

// Create a function that adds two numbers and assigns it to a variable by returning the sum.

var firstNum = (function(num1, num2) {
  return num1 + num2;
})(5, 10);

// Create a function that multiplies the results of the previous function by itself and stores product in a second variable.

var secondNum = (function() {
  return firstNum * firstNum;
})();

// Create a function that prints to the console the variable that contains the results of the second function you created.

(function() {
  console.log(secondNum);
})();
