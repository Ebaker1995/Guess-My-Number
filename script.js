'use strict';
/*
/DOM MANIPULATION
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

/sets value
document.querySelector('.guess').value = 23;

/reads value
console.log(document.querySelector('.guess').value);
*/
//Random secretNumber between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When incorrect input
  if (!guess) {
    document.querySelector('.message').textContent = '😠 No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //When player is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Guess too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣You lost the game';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
    }

    //When player is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Guess too low';
      score--;
      document.querySelector('.score').textContent = score;

      //When player looses
    } else {
      document.querySelector('.message').textContent = '💣You lost the game';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
