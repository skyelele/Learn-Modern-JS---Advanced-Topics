var sum = function(num1, num2) {
  return num1 + num2;
};

var sum = (num1, num2) => num1 + num2;

var func1 = num => num * num;

var func2 = () => 100;

var fullName = function() {
  setTimeout(() => {
    console.log(this.firstName + " " + this.lastName);
  }, 4000);
};
