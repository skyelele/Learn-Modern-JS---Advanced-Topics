Object.defineProperty(obj, "type", { enumerable: false });

obj.propertyIsEnumerable("type");
// false

Object.defineProperty(obj, "type", { configurable: false });

// Object {width: 10, height: 5, type: 'rectangle'}

delete obj.width;
// true
// Object {height: 5, type: "rectangle"}

delete obj.type;
// false


//////3

var content = document.querySelector("#content");

content.innerHTML = "President " = pres.fullName() + " was president number " + pres.order + " of the United States of America.";

for (var prop in pres) {
  console.log(prop + " " + typeof pres[prop])
}

//

for (var prop in pres) {
  if (pres.hasOwnProperty(prop)) {
    console.log(prop + "  " + typeof pres[prop])
  }
}

//

const arr = Object.keys(pres);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + "  " + typeof pres[arr[i]]);
}

const arr = Object.keys(pres);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + "  " typeof pres[arr[i]]);
}