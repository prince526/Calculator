// JavaScript to make the calculator interactive and perform calculations

// Get references to the display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const historyDisplay = document.getElementById('history');

// Initialize the history array
let history = [];

// Function to update and display the history
function updateHistory() {
  historyDisplay.innerHTML = history.join('<br>');
}

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Handle the button click
    const value = button.textContent;
    if (value === 'Enter') {
      // Perform the calculation
      calculate();
    } else if (value === 'Clear') {
      // Clear the display
      display.value = '0';
    } else {
      // Append the button value to the display
      if (display.value === '0') {
        // If the display is currently '0', replace it with the button value
        display.value = value;
      } else {
        // Otherwise, append the button value
        display.value += value;
      }
    }
  });
});

// Function to perform the calculation
function calculate() {
  // Get the expression from the display
  let expression = display.value;

  // Replace % with /100 for calculation
  expression = expression.replace(/%/g, '/100');

  // Handle square root (sqrt)
  if (expression.includes('√')) {
    const rootValue = parseFloat(expression.slice(expression.indexOf('√') + 1));
    const result = Math.sqrt(rootValue);
    display.value = result;
  } else {
    // Evaluate the expression using JavaScript's eval() function
    const result = eval(expression);

    // Display the result
    display.value = result;

    // Add the calculation and result to the history array
    history.push(expression + ' = ' + result);
    updateHistory();
  }
}

const historyContainer = document.getElementById('history-container');
const historyIcon = document.getElementById('history-icon');

historyIcon.addEventListener('click', () => {
    historyContainer.style.display = 'block';
});

// Function to hide the history container
function hideHistory() {
    historyContainer.style.display = 'none';
}

// Add this function to your existing 'calculate' function to show history
function showHistory() {
    historyContainer.style.display = 'block';
    updateHistory();
}

// Call showHistory() in your 'calculate' function
// const historyIcon = document.getElementById('history-icon');

// Function to toggle the visibility of the history icon
function toggleHistoryIcon() {
    historyIcon.style.display = (historyIcon.style.display === 'block') ? 'none' : 'block';
}

// Add a click event listener to the "+" button
const plusButton = document.getElementById('btnplus');
plusButton.addEventListener('click', toggleHistoryIcon);
