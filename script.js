'use strict';
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const printMessage = message => {
  return (document.querySelector('.message').textContent = message);
};
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    printMessage('⛔ No input please enter the number!');
  } else if (guess === secretNumber) {
    printMessage('🎉correct!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      const messageStatus =
        guess > secretNumber
          ? '📈 Too high please try again!'
          : '📉 Too low please try again!';
      printMessage(messageStatus);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      printMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//console.log(score, highScore);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  printMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
