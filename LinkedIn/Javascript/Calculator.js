while (true) {
  console.log("---------------Menu--------------");
  console.log(
    "1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit"
  );

  const choice = parseInt(prompt("Enter your choice: "));

  if (choice > 5 || choice < 1) {
    console.log("Wrong Option");
    continue;
  }

  if (choice === 5) break;

  const a = parseInt(prompt("Enter the first value: "));
  const b = parseInt(prompt("Enter the second value: "));

  switch (choice) {
    case 1:
      console.log(`Result: ${a + b}`);
      break;
    case 2:
      console.log(`Result: ${a - b}`);
      break;
    case 3:
      console.log(`Result: ${a * b}`);
      break;
    case 4:
      console.log(b === 0 ? "Cannot divide by zero" : `Result: ${a / b}`);
      break;
  }
}
