var multiple = 5;

var obj1 = {
  start: 1,
  end: 100,
  multiple: multiple
};

var obj2 = {
  start: 1,
  end: 1000,
  multiple
};

var obj1 = {
  firstName: "Steven",
  lastName: "Smith",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

var obj2 = {
  firstName: "Steven",
  lastName: "Smith",
  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }
};

// setPrototypeOf

var objProto = {
  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }
};

var obj = {
  firstName: "Steven",
  lastName: "Smith"
};

Object.setPrototypeOf(obj, objProto);

// Object {firstName: "Steven", lastName: "Smith"}

obj.fullName();
// Logs "Steven Smith"
// because you're using .fullName();
// as the prototype of obj, not
// a method defined within the obj
// itself

const obj = {
  start: 0
};

const obj1 = {
  a: 5
};

const obj2 = {
  b: 10
};

const obj3 = {
  c: 15
};

Object.assign(obj, obj1, obj2, obj3);

// Object {start: 0, a: 5, b: 10, c: 15}

let str = "The course starts in October, 2018";

let str1 = str.replace("2018", "2019");

let str2 = str1.toUpperCase();

let str3 = str2.trim();

console.log(str3);
// The course starts in October, 2019.

// OR

let str4 = str
  .replace("2018", "2019")
  .toUpperCase()
  .trim();

let fruit = ["applie", "pear", "peach"];

let fruitStr = fruit
  .concat("orange", "kiwi")
  .sort()
  .join(" - ");

// "applie - kiwi - orange - peach - pear"
