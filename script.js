let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (Math.abs(targetNumber - computerGuess) >= Math.abs(targetNumber - userGuess)) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
