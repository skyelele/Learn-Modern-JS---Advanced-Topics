const objProto = {
  greet: function() {
    console.log(this.greeting + " World");
  }
};

const Greeting = function(term) {
  this.greeting = term;
};

Greeting.prototype = objProto;

const obj1a = new Greeting("Hi");

const obj2 = Object.create(objProto);
obj2.greeting = "Hello";
obj2.greet(); // --> Hello World

const obj3 = {
  greeting: "Hi"
};

Object.setPrototypeOf(obj3, objProto);
