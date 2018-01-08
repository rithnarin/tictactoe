const prompt = require('prompt');

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//player turn
let player = 1;
//winner | 0 - no winner,  1 - player 1, 2 - player 2
let winner = 0;
//status | 0 - in progress, 1 - game over
let status = 0;

const showBoard = () => {
  console.log(board[0] + ' | ' + board[1] + ' | ' + board[2]);
  console.log('---------');
  console.log(board[3] + ' | ' + board[4] + ' | ' + board[5]);
  console.log('---------');
  console.log(board[6] + ' | ' + board[7] + ' | ' + board[8]);
};

prompt.start();

const play = () => {
  showBoard();
  if (player === 1) {
    console.log('Player 1 turn');
    playerOne();
  } else if (player === 2) {
    console.log('Player 2 turn');
    playerTwo();
  }
}

const playerOne = () => {
  prompt.get(['spot'], (err, result) => {
    result.spot = parseInt(result.spot);
    board[result.spot] = 'X';
    player = 2;
    results();
    if (status === 0) {
      play();
    }
  });
}

const playerTwo = () => {
  prompt.get(['spot'], (err, result) => {
    result.spot = parseInt(result.spot);
    board[result.spot] = 'O';
    player = 1;
    results();
    if (status === 0) {
      play();
    }
  });
}

const results = () => {
  let count = 0;
  for (var i = 0; i < board.length; i++) {
    if (typeof board[i] !== 'number') {
      count++;
    }
  }
  if (count === board.length) {
    console.log('Match ends in a tie');
    status = 1;
    return;
  }
  console.log(`Player ${winner} is the winner!`);
}

play();
