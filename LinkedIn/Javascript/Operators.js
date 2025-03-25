// Mathematical Operations

let a = 10,
  b = 3;
console.log(`Sum: ${a + b}`); // Sum: 13
console.log(`Difference: ${a - b}`); // Difference: 7
console.log(`Product: ${a * b}`); // Product: 30
console.log(`Quotient: ${a / b}`); // Quotient: 3.333
console.log(`Remainder: ${a % b}`); // Remainder: 1
console.log(`Exponent: ${a ** b}`); // Exponent: 1000 (10^3)

// Assignment Operators

let c = 5;
c += 3; // c = c + 3 → 8
console.log(`c += 3: ${c}`); // c += 3: 8
c -= 2; // c = c - 2 → 6
console.log(`c -= 2: ${c}`); // c -= 2: 6
c *= 2; // c = c * 2 → 12
console.log(`c *= 2: ${c}`); // c *= 2: 12
c /= 3; // c = c / 3 → 4
console.log(`c /= 3: ${c}`); // c /= 3: 4
c %= 3; // c = c % 3 → 1
console.log(`c %= 3: ${c}`); // c %= 3: 1

// Comparison Operators

console.log(`a > b: ${a > b}`); // a > b: true
console.log(`a < b: ${a < b}`); // a < b: false
console.log(`a == b: ${a == b}`); // a == b: false
console.log(`a != b: ${a != b}`); // a != b: true
console.log(`a >= b: ${a >= b}`); // a >= b: true
console.log(`a <= b: ${a <= b}`); // a <= b: false
console.log(`a === b: ${a === b}`); // a === b: false (strict equality)
console.log(`a !== b: ${a !== b}`); // a !== b: true (strict inequality)

// Logical Operators

let x = true,
  y = false;
console.log(`x && y: ${x && y}`); // x && y: false (AND)
console.log(`x || y: ${x || y}`); // x || y: true  (OR)
console.log(`!x: ${!x}`); // !x: false (NOT)

// Unary Operators

let d = 5;
console.log(`d++: ${d++}`); // d++: 5 (post-increment)
console.log(`++d: ${++d}`); // ++d: 7 (pre-increment)
console.log(`d--: ${d--}`); // d--: 7 (post-decrement)
console.log(`--d: ${--d}`); // --d: 5 (pre-decrement)
console.log(`-d: ${-d}`); // -d: -5 (negation)

// Ternary Operator

let g = 10,
  h = 20;
let result = g > h ? g : h; // 20
console.log(`Result: ${result}`); // Result: 20

// Bitwise Operators

let e = 5,
  f = 3; // 5 = 0101, 3 = 0011
console.log(`e & f: ${e & f}`); // e & f: 1 (AND)
console.log(`e | f: ${e | f}`); // e | f: 7 (OR)
console.log(`e ^ f: ${e ^ f}`); // e ^ f: 6 (XOR)
console.log(`~e: ${~e}`); // ~e: -6 (NOT)
console.log(`e << 1: ${e << 1}`); // e << 1: 10 (Left Shift)
console.log(`e >> 1: ${e >> 1}`); // e >> 1: 2 (Right Shift)

// Type Operators

console.log(`typeof a: ${typeof a}`); // typeof a: number
console.log(`a instanceof Number: ${a instanceof Number}`); // false (a is a primitive)

// String Operators

let str1 = "Hello",
  str2 = "World";
console.log(`Concatenation: ${str1 + " " + str2}`); // Concatenation: Hello World
