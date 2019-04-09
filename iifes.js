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

// Understanding Closure

(function() {
  var cnt = 0;
  item1 = document.querySelector("#item1");
  item2 = document.querySelector("#item2");

  var print = function() {
    console.log(cnt);
  };

  item1.addEventListener("click", function() {
    cnt++;
    print();
  });

  item2.addEventListener("click", function() {
    cnt++;
    print();
  });
})();

// Avoiding Global Variables

(function() {
  var counter = 0;
  doc = this.document;
  content = doc.getElementById("content");
  quotes = content.querySelectorAll(".quote");

  window.addEventListener(
    "keydown",
    function(e) {
      switch (e.keycode) {
        case 40:
          if (counter < quotes.length) {
            quotes[counter].style.visibility = "visible";
            counter++;
          }
          break;
      }
    },
    false
  );
})();
