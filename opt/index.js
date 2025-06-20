// / Create start date (today at midnight)
const now = new Date();
const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // strips time

// Create end date (Feb 6, 2026 at midnight)
const endDate = new Date(2026, 1, 6); // Feb is month 1 (0-based)

// Total difference in milliseconds
const diffTime = endDate - startDate;

// Convert to total days (including today)
const totalDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

// Now calculate months + remaining days
let tempDate = new Date(startDate.getTime());
let months = 0;

while (true) {
  const nextMonth = new Date(
    tempDate.getFullYear(),
    tempDate.getMonth() + 1,
    tempDate.getDate()
  );
  if (nextMonth <= endDate) {
    months++;
    tempDate = nextMonth;
  } else {
    break;
  }
}

const remainingDays = Math.round((endDate - tempDate) / (1000 * 60 * 60 * 24));

// Output the results
document.getElementById(
  "difference1"
).innerText = `1. ${months} months ${remainingDays} days`;
document.getElementById("difference2").innerText = `2. ${totalDays} days`;
