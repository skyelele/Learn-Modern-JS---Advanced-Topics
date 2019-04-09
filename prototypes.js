// Prototypes

// Almost every object is linked to another
// object. That linked object is called
// the prototype.

// Objects inherit properties and methods from its prototype ancestry.

// A prototype is automatically assigned to any object.

// You can define an objects prototype

// You can change properties and methods of a prototype.

var user1 = {
  firstName: "John",
  lastName: "Anderson",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var user2 = {
  firstName: "Sarah",
  lastName: "West",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var greeting = function(term) {
  console.log(term + " " + this.firstName);
};

// METHOD   | object  | argument passed to
//                    | method parameter
greeting.call(user1, "Good Morning");

// Logs "Good Morning John"

greeting.call(user2, "Good Afternoon");

// Logs "Good Afternoon Sarah"

var user1 = {
  firstName: "John",
  lastName: "Anderson",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var greeting = function(term, punct) {
  console.log(term + " " + this.firstName + punct);
};

greeting.call(user2, "Good Morning", "!");
greeting.apply(user2, ["Good Morning", "!"]);

console.log(user1.fullName.call(user2));
// Logs Sarah West

// USING BIND()

var func = function.bind(this, arg1, arg2);
// bind returns a new function

// The 1st argument is an object that will become of the value of this for that new function.

// One or more arguments can be included that will be bound to the new function, meaning you will not need to pass in those arguments.

var user1 = {
  firstName: "John",
  lastName: "Anderson",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var greeting = function(term, punct) {
  console.log(term + " " + this.firstName + punct);
};

// First string is set to the 'term'
// parameter of the greeting function.

var morningGreet = greeting.bind(user1, "Good Morning");

var afternoonGreet = greeting.bind(user1, "Good Afternoon");

morningGreet("!");
afternoonGreet(".");

// UNderstanding this (this binding)

// Established at runtime, when a function is invoked.
// Determined by how a function is invoked, not where the function is defined.
// A reference to the object.

// It is NOT:
//// THe function. Though it is established when the function is invoked, it is not the function.