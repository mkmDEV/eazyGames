let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');
let lizardButton = document.querySelector('.lizard');
let spockButton = document.querySelector('.spock');
let resetScoreButton = document.querySelector('.resetScore');

let computerGuess = document.querySelector('.computer-guess');
let playerGuess = document.querySelector('.player-guess');
let result = $('#result');

let computerScore = document.querySelector('.computer-score');
let playerScore = document.querySelector('.player-score');

const guess = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];

let computerShot = '';
let playerShot = '';

let computerCount = 0;
let playerCount = 0;

function setComputerShot() {
  let index = Math.floor(Math.random() * 5);
  computerShot = guess[ index ];
}

setComputerShot();

function setPlayerShot(guess) {
  playerShot = guess;
  displayResult();
  setComputerShot();
}

rockButton.addEventListener('click', function() {
  setPlayerShot('ROCK');
});

paperButton.addEventListener('click', function() {
  setPlayerShot('PAPER');
});

scissorsButton.addEventListener('click', function() {
  setPlayerShot('SCISSORS');
});

lizardButton.addEventListener('click', function() {
  setPlayerShot('LIZARD');
});

spockButton.addEventListener('click', function() {
  setPlayerShot('SPOCK');
});

resetScoreButton.addEventListener('click', function() {
  resetScore();
});

function resetScore() {
    playerCount = 0;
    computerCount = 0;
    computerScore.innerHTML = `${computerCount}`;
    playerScore.innerHTML = `${playerCount}`;
}

function draw() {
    result.html('').append('<span class="draw">Draw!</span>');
}

function win() {
    playerCount++;
    playerScore.innerHTML = `${playerCount}`;
    result.html('').append('<span class="win">You win!</span>');
}

function lose() {
    computerCount++;
    computerScore.innerHTML = `${computerCount}`;
    result.html('').append('<span class="lose">You lose!</span>');
}

function displayResult() {
  computerGuess.innerHTML = `${computerShot}`;
  playerGuess.innerHTML = `${playerShot}`;
  if (computerShot === 'ROCK') {
    if (playerShot === 'ROCK') {
      draw();
    } else if (playerShot === 'PAPER' || playerShot === 'SPOCK') {
      win();
    } else if (playerShot === 'SCISSORS' || playerShot === 'LIZARD') {
      lose();
    }
  } else if (computerShot === 'PAPER') {
    if (playerShot === 'ROCK' || playerShot === 'SPOCK') {
      lose();
    } else if (playerShot === 'PAPER') {
      draw();
    } else if (playerShot === 'SCISSORS' || playerShot === 'LIZARD') {
      win();
    }
  } else if (computerShot === 'SCISSORS') {
    if (playerShot === 'ROCK' || playerShot === 'SPOCK') {
      win();
    } else if (playerShot === 'PAPER' || playerShot === 'LIZARD') {
      lose();
    } else if (playerShot === 'SCISSORS') {
      draw();
    }
      } else if (computerShot === 'LIZARD') {
    if (playerShot === 'ROCK' || playerShot === 'SCISSORS') {
      win();
    } else if (playerShot === 'PAPER' || playerShot === 'SPOCK') {
      lose();
    } else if (playerShot === 'LIZARD') {
      draw();
    }
      } else if (computerShot === 'SPOCK') {
    if (playerShot === 'LIZARD' || playerShot === 'PAPER') {
      win();
    } else if (playerShot === 'ROCK' || playerShot === 'SCISSORS') {
      lose();
    } else if (playerShot === 'SPOCK') {
      draw();
    }
  }
}
