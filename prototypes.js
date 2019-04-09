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
