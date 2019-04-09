var name = "global";

var fun1 = function() {
  var name = "fun1";
  console.log("From fun1 ---");
  // this === Window
  console.log(this);
  // refers to global name
  console.log(this.name);
};

fun1();

// using strict mode
// Strict mode will not set this
// to the global object :)

var name = "global";

var obj1 = {
  name: "obj1",
  fun1: function() {
    console.log("From fun1 in obj1 --");
    console.log(this);
    console.log(this.name);
  }
};

obj1.fun1();
// "From fun1 in obj1 -- "
// Object
// "obj1"

var obj1 = {
  name: "obj1",
  fun1: function() {
    console.log("From fun1 in obj1 --");
    console.log(this);
    console.log(this.name);
  }
};

///////////

var name = "global";

var fun3 = function() {
  console.log(this.name);
};

var obj3 = {
  name: "Obj3",
  fun3: fun3
};

obj3.fun3();
