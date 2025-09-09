// ----------------------------
// Part 1: Variables & Conditionals
// ----------------------------
let workshopName = "Community Workshop";
let attendees = 15;
let isOpen = true;

if (isOpen && attendees > 10) {
  console.log(`${workshopName} is running successfully with ${attendees} attendees!`);
} else {
  console.log(`${workshopName} needs more participants.`);
}

// ----------------------------
// Part 2: Functions
// ----------------------------

// Function 1: Calculate total fee
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total fee for 3 sessions at $20 each:", calculateTotal(20, 3));

// Function 2: Format greeting message
function formatMessage(name) {
  return `Hello ${name}, welcome to the ${workshopName}!`;
}
console.log(formatMessage("Francis"));

// ----------------------------
// Part 3: Loops
// ----------------------------

// For loop: list numbers 1–5
for (let i = 1; i <= 5; i++) {
  console.log("Session number:", i);
}

// While loop: countdown from 3
let countdown = 3;
while (countdown > 0) {
  console.log("Workshop starts in:", countdown);
  countdown--;
}

// ----------------------------
// Part 4: DOM Interactions
// ----------------------------

// DOM Element References
const greetBtn = document.getElementById("greetBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const addSessionBtn = document.getElementById("addSessionBtn");
const sessionList = document.getElementById("sessionList");

// Interaction 1: Show greeting on button click
greetBtn.addEventListener("click", () => {
  alert(formatMessage("Participant"));
});

// Interaction 2: Toggle dark mode
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Interaction 3: Add a new session dynamically
addSessionBtn.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "JavaScript Fundamentals";
  sessionList.appendChild(newItem);
});
