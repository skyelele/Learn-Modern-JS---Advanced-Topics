// Invoking functions as constructors
// The Magic of NEW

// A constructor is just a function that is invoked using new.
// A constructor returns an object.
// Constructors are used to create multiple similar objects.
// THe returned objects share teh same prototype which comes from the constructor.

var Greeting = function() {};

var greet1 = new Greeting();

var greet2 = new Greeting();

// Constructor invocation and the value of this

function Greeting() {
  console.log(this);
}

Greeting();

new Greeting();

///

function Users(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

var user1 = new Users("James", "Johnson");

var user2 = new Users("Mary", "Smith");

user2.fullName();
