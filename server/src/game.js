const switchPlayer = (player, lastPlayer) => {
  return player[0] === lastPlayer ? player[1] : player[0];
};

const verifyWinner = (player, board) => {
  let possibleLines = [
    [0, 1, 2], //Horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //Vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //Diagonal
    [2, 4, 6]
  ];
  let winner = "";

  possibleLines.map(line => {
    if (
      board[line[0]] === player &&
      board[line[1]] === player &&
      board[line[2]] === player
    ) {
      winner = player;
    }
    return line;
  });
  if (verifyTie(board)) winner = "Tie";

  return winner;
};

const verifyTie = board => {
  const found = board.find(element => {
    return element === "";
  });

  if (found === undefined) return true;
};

module.exports = {
  switchPlayer,
  verifyWinner
};
