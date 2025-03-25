//if

let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote!"); // Output: You are eligible to vote!
}

// if-else

let marks = 45;
if (marks >= 40) {
  console.log("Passed!"); // Output: Passed!
} else {
  console.log("Failed!");
}

// if-else-if ladder

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// switch

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the workweek!"); // Output: Start of the workweek!
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("It's a regular day.");
}

// for

for (let i = 1; i <= 5; i++) {
  console.log("Iteration: " + i); // Output: Iteration: 1, 2, 3, 4, 5
}

// while
let count = 1;
while (count <= 5) {
  console.log("Count: " + count); // Output: Count: 1, 2, 3, 4, 5
  count++;
}

// do-while

let num = 1;
do {
  console.log("Number: " + num); // Output: Number: 1, 2, 3, 4, 5
  num++;
} while (num <= 5);

// break

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break; // Exit the loop when i is 5
  }
  console.log("i: " + i); // Output: i: 1, 2, 3, 4
}

// continue

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue; // Skip iteration when i is 3
  }
  console.log("i: " + i); // Output: i: 1, 2, 4, 5
}

// return

function add(a, b) {
  return a + b; // Return the sum of a and b
}
console.log("Sum: " + add(5, 3)); // Output: Sum: 8
