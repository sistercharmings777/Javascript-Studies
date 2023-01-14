'use strict';

/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊 Correct Number';
console.log(document.querySelector('.message').textContent);

console.log((document.querySelector('.score').textContent = 14));
console.log((document.querySelector('.guess').value = 56));
console.log(document.querySelector('.guess').value);

document.querySelector('.number').textContent = 12;
*/

// Generating a random number
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// set the score
let score = 20;
let highscore = 0;

// function to display messages to the UI
function displayMessage(message) {
  return (document.querySelector('.message').textContent = message);
}

// Reset the Game
document.querySelector('.again').addEventListener('click', function () {
  // reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  // reseit backgorund messages and colors
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});

// Adding event listener to the check botton
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHen there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No number!';
    displayMessage('🛑 No number!');
    // When player wins
  } else if (guess == secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        // guess > secretNumber ? '🤖 Too High' : '🤖 Too Low';
        displayMessage(guess > secretNumber ? '🤖 Too High' : '🤖 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🤖 You lost the game!';
      displayMessage('🤖 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🤖 Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤖 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🤖 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤖 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
