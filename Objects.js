// Working with Objects

if ("name" in person1) {
}

if (person1.hasOwnProperty("name")) {
}

var person1 = {
  firstName: "Steven",
  lastName: "Hancock",
  email: "shancock@allthingsjavascript.com",
  type: "admin",
  active: true,
  address: {
    street: "100 N. Main",
    zip: "10001"
  }
};

for (var prop in person1) {
  console.log("Name: " + prop);
  console.log("Value: " + person1[prop]);
}

// An enumeration is a complete, ordered listing of all the items in a collection. It refers to a listing of all the elements in a set.

person1.propertyIsEnumerable("firstName");
// true
person1.propertyIsEnumerable("toString");
// false

var properties = Object.keys(person1);

// properties; logs the following -->
// ["firstName", "lastName", "email", "type", "active", "address"]

var obj = {
  firstName: "Steven",
  lastName: "Smith",
  startDate: "January 10, 2015",
  type: "admin"
};

Object.defineProperty(obj, "startDate", {
  writable: false
});

obj.firstName = "Steve";

obj.startDate = "January 5, 2016";

// Using seal() method to make an
// object immutable :)

Object.seal(obj);

// Cannot create new property
obj.newProp = true;

// Cannot delete existing property
delete obj.type;

// CAN modify a value of an existing property
obj.firstName = "Steve";

Object.freeze(obj);

// Cannot create new property
// Cannot delete existing property
// Cannot modify a value of an existing property
