const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');

const scoreBoard = {
  player: 0,
  computer: 0
};

function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// GET COMPUTERS CHOICE
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// GET GAME WINNER
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Increment player score
    scoreBoard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class='text-win>You Win</h1>
      <i class='fas fa-hand-${computerChoice} fa-10x'></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    // Increment computer score
    scoreBoard.computer++;
    // Show modal result
    result.innerHTML = `
  <h1 class='text-lose>You Lose</h1>
  <i class='fas fa-hand-${computerChoice} fa-10x'></i>
  <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
    computerChoice.slice(1)}</strong></p>
`;
  } else {
    result.innerHTML = `
  <h1>It's a draw</h1>
  <i class='fas fa-hand-${computerChoice} fa-10x'></i>
  <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
    computerChoice.slice(1)}</strong></p>
`;
  }
  score.innerHTML = `
  <p>Player: ${scoreBoard.player}</p>
  <p>Computer: ${scoreBoard.computer}</p>
  `;
  modal.style.display = 'block';
}

function restartGame() {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
}

function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

// const choices = document.querySelectorAll('.choice');
// const score = document.querySelector('#score');
// const result = document.querySelector('#result');
// const restart = document.querySelector('#restart');
// const modal = document.querySelector('.modal');

// const scoreboard = {
//   player: 0,
//   computer: 0
// };

// // Play Game
// function play(event) {
//   restart.style.display = 'inline-block';
//   const playerChoice = event.target.id;
//   const computerChoice = getComputerChoice();
//   const winner = getWinner(playerChoice, computerChoice);
//   // console.log(playerChoice, computerChoice, winner);
//   showWinner(winner, computerChoice);
// }

// // Get Computers Choice
// function getComputerChoice() {
//   const rand = Math.random();
//   if (rand < 0.34) {
//     return 'rock';
//   } else if (rand <= 0.6) {
//     return 'paper';
//   } else {
//     return 'scissors';
//   }
// }

// function getWinner(playerChoice, computerChoice) {
//   if (playerChoice === computerChoice) {
//     return 'draw';
//   } else if (playerChoice === 'rock') {
//     if (computerChoice === 'paper') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } else if (playerChoice === 'paper') {
//     if (computerChoice === 'scissors') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } else if (playerChoice === 'scissors') {
//     if (computerChoice === 'rock') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   }
// }

// const showWinner = (winner, computerChoice) => {
//   if (winner === 'player') {
//     // Increment player score
//     scoreboard.player++;
//     // Show Modal Result
//     result.innerHTML = `
//     <h1 class='text-win'>You Win</h1>
//     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//     <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//       computerChoice.slice(1)}</strong></p>
//     `;
//   } else if (winner === 'computer') {
//     // Increment player score
//     scoreboard.computer++;
//     // Show Modal Result
//     result.innerHTML = `
//     <h1 class='text-lose'>You Lose</h1>
//     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//     <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//       computerChoice.slice(1)}</strong></p>
//     `;
//   } else {
//     result.innerHTML = `
//     <h1>It's A Draw</h1>
//     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//     <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//       computerChoice.slice(1)}</strong></p>
//     `;
//   }
//   // Show Score
//   score.innerHTML = `
//   <p>Player: ${scoreboard.player}</p>
//   <p>Computer: ${scoreboard.computer}</p>
//   `;

//   modal.style.display = 'block';
// };

// // Clear Modal
// const clearModal = e => {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// };

// const restartGame = () => {
//   scoreboard.player = 0;
//   scoreboard.computer = 0;
//   score.innerHTML = `
//   <p>Player: 0</p>
//   <p>Computer: 0</p>
//   `;
// };

// // Event Listeners
// choices.forEach(choice => choice.addEventListener('click', play));
// window.addEventListener('click', clearModal);
// restart.addEventListener('click', restartGame);
