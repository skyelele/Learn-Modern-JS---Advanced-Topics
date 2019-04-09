var sum = function(arr) {
  var total = 0;

  while (arr.length > 0) {
    total += arr.pop();
  }

  return total;
};

var findMultiple = function(start, end, multiple) {
  var results = [];

  while (start <= end) {
    if (start % multple === 0) {
      results.push(start);
    }
    start++;
  }

  return results;
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("content").innerHTML =
    "The sum of all numbers divisible by 3 from 1 to 100 is: " +
    sum(findMultple(1, 100, 3));
});
