// var

var x = 10;
if (true) {
  var x = 20; // Same variable!
}
console.log(x); // Output: 20

// let

let y = 10;
if (true) {
  let y = 20; // Different variable!
}
console.log(y); // Output: 10

// const

const z = 10;
// z = 20; // Error: Assignment to constant variable.
const obj = { name: "Alice" };
obj.name = "Bob"; // This is allowed!
console.log(obj.name); // Output: Bob
