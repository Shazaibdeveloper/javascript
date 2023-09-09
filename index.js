// Function to append characters to the display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Function to append operators to the display
function appendOperator(operator) {
  const display = document.getElementById("display");
  const currentValue = display.value;

  // Check if the last character is an operator, and replace it with the new operator
  if (
    currentValue.charAt(currentValue.length - 1) === "+" ||
    currentValue.charAt(currentValue.length - 1) === "-" ||
    currentValue.charAt(currentValue.length - 1) === "*" ||
    currentValue.charAt(currentValue.length - 1) === "/"
  ) {
    display.value = currentValue.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to calculate the result
function calculate() {
  const display = document.getElementById("display");
  const expression = display.value;

  try {
    const result = eval(expression); // Using eval for simplicity (not recommended for production)
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
