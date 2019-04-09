// Function DECLARATION
// will be hoisted
function doSomething() {
  console.log("Declare Something");
}

// Function EXPRESSION
// will NOT be hoisted
var something = function() {
  console.log("Express Something");
};

// First Class Functions

var sum = function(x, y) {
  return x + y;
};

// function expression with a for loop
var sumIt = function() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log(sum);
};

// DEFINING FUNCTIONS

// 2 Types of Objects (literal + constructor)

// Object Literal
var obj = {
  firstName: "Steven",
  lastName: "Hancock"
};

// Object Constructor
var obj = new Object();
obj.firstName = "Steven";
obj.lastName = "Hancock";

var obj1 = {
  firstName: "Steven",
  lastName: "Hancock"
};

obj1.greeting = function() {
  console.log("Hello");
  console.log(arguments);
  console.log(this);
};

obj1.hasOwnProperty("firstName"); // true
