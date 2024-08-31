// Getting html elemetns
const feedback = document.getElementById('feedback');
const input = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

let randomNumber = Math.floor(Math.random() * 100) + 1;

// Handling  guess submission
submitBtn.onclick = function () {
  const guess = parseInt(input.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  if (guess === randomNumber) {
    feedback.textContent = `Congratulations, Well Done! You found the number.`;
    submitBtn.disabled = true;
  } else if (guess < randomNumber) {
    feedback.textContent = 'Too low! Please Try again.';
  } else {
    feedback.textContent = 'Too high! Please Try again.';
  }
};

// Handle game restart
restartBtn.onclick = function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  feedback.textContent = '';
  submitBtn.disabled = false;
  input.value = '';
};
