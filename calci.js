// Get the display element
const display = document.getElementById('display');

// Initialize the display value to 0
let displayValue = '0';

// Add a function to update the display value
function updateDisplay(value) {
  // If the display value is 0, replace it with the new value
  if (displayValue === '0') {
    displayValue = value;
  } else {
    // Otherwise, append the new value to the existing value
    displayValue += value;
  }
  // Update the display with the new value
  display.value = displayValue;
}

// Add a function to handle button clicks
function addToDisplay(value) {
  // If the value is a number or decimal point, add it to the display
  if (!isNaN(value) || value === '.') {
    updateDisplay(value);
  } else {
    // Otherwise, it's an operator or special button
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        // If it's an operator, add it to the display
        updateDisplay(` ${value} `);
        break;
      case 'Del': // Corrected case name from 'Del' to 'delete'
        // If it's the delete button, remove the last character from the display
        if (displayValue.length > 0) {
          displayValue = displayValue.slice(0, -1);
        }
        display.value = displayValue;
        break;
      case 'Reset':
        // If it's the reset button, set the display value back to 0
        displayValue = '0';
        display.value = displayValue;
        break;
      case '=':
        // If it's the equals button, evaluate the expression and display the result
        try {
          displayValue = eval(displayValue);
          display.value = displayValue;
        } catch (error) {
          // If there's an error, display "Invalid Input"
          displayValue = 'Invalid Input';
          display.value = displayValue;
        }
        break;
    }
  }
}

// Add a function to handle the calculate button click
function calculate() {
  // Evaluate the expression and display the result
  try {
    displayValue = eval(displayValue);
    display.value = displayValue;
  } catch (error) {
    // If there's an error, display "Invalid Input"
    displayValue = 'Invalid Input';
    display.value = displayValue;
  }
}

// Add a function to handle the reset button click
function resetDisplay() {
  // Set the display value back to 0
  displayValue = '0';
  display.value = displayValue;
}
// Function to handle deleting from the display
function deleteFromDisplay() {
  if (displayValue.length > 0) {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
  }
}

