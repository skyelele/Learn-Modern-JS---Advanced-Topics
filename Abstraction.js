// DRY

// Don't repeat yourself!

// ABSTRACTION

// Each significant piece of functionality should be implemented in just one place.

var findIt = function() {
  var start = 1,
    end = 100,
    multiple = 3,
    total = 0;

  while (start <= end) {
    if (start % multiple === 0) {
      total += start;
    }
    start++;
  }

  document.getElementById("content").innerHTML =
    "The sum of all numbers divisible by 3 from 1 to 100 is : " + total;
};

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
    if (start % multiple === 0) {
      results.push(start);
    }
  }

  return results;
};

document.addEventListener("DOMContentLoaded", findIt);
