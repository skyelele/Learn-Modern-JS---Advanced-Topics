// Higher order functions
// Callbacks
// The problem with this

// Higher order functions are functions that operate on other functions, by either taking them as arguments or returning them. THe fact that JS supports first-class functions, makes it possible to create Higher Order functions.

document.addEventListener("DOMContentLoaded", function() {
  var logo = document.querySelector("#logo");

  logo.addEventListener("click", function() {
    console.log("Clicked!");
  });
});

////

var fullName = function() {
  setTimeout(function() {
    console.log(this.firstName + " " + this.lastName);
  }, 2000);
};

fullName.call(user1);
fullName.call(user2);

// When we use callbacks, sometimes we
// lose the instance of this, and this
// gets set to the global variable
// instead.

// How do we set this to the proper
// object when a callback automatically
// sets this to the global object?

// We can set this to a variable,
// then replace this with that
// varible.

var fullName = function() {
  var that = this;
  setTimeout(function() {
    console.log(that.firstName + " " + that.lastName);
  }, 2000);
};

// Bind creates a new func that
// can be executed, but in the process,
// it binds the value of this to some
// object that we specify

var fullName = function() {
  setTimeout(
    function() {
      console.log(this.firstName + " " + this.lastName);
    }.bind(this),
    2000
  );
};
