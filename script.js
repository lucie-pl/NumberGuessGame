'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').innerText = message;
};
const displayScore = function (score) {
  document.querySelector('.score').innerText = score;
};
const displayBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayNumber = function (number) {
  document.querySelector('.number').innerText = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no number
  if (!guess) {
    displayMessage('😞 No number !');

    // When you win
  } else if (guess === secretNumber) {
    displayMessage('🏆 You win ! Congrats !');
    displayNumber(secretNumber);
    displayBackgroundColor('#60b347');
    document.querySelector('.check').style.display = 'none';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerText = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    score -= 1;
    if (score >= 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Too high! Try again'
          : '📉 Too low! Try again'
      );
      displayScore(score);
    } else {
      displayScore(score);
      displayMessage('❌ You lost the game!');
      displayBackgroundColor('#d94545');
      document.querySelector('.check').style.display = 'none';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  displayBackgroundColor('#222222');
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = '';
});
