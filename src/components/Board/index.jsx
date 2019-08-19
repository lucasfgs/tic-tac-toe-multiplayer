import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Square from "../Square";

const Board = ({ winner, setWinner, newGame, setNewGame }) => {
  const player = ["X", "O"];
  const initialBoardState = ["", "", "", "", "", "", "", "", ""];

  const [board, setBoard] = useState(initialBoardState);
  const [actualPlayer, setActualPlayer] = useState(player[0]);

  useEffect(() => {
    if (newGame) {
      setBoard(initialBoardState);
      setNewGame(false);
    }
  }, [newGame, initialBoardState, setNewGame]);

  const switchPlayer = () => {
    player[0] === actualPlayer
      ? setActualPlayer(player[1])
      : setActualPlayer(player[0]);
  };

  const handleClick = index => {
    let updatedBoard = board;
    if (winner) return;
    if (!updatedBoard[index]) {
      updatedBoard[index] = actualPlayer;
      setBoard(updatedBoard);
      switchPlayer();
      verifyWinner();
    }
  };

  const verifyWinner = () => {
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

    possibleLines.map(line => {
      if (
        board[line[0]] === actualPlayer &&
        board[line[1]] === actualPlayer &&
        board[line[2]] === actualPlayer
      ) {
        setWinner(actualPlayer);
      }
      return line;
    });
    if (verifyTie()) setWinner("Tie");
  };

  const verifyTie = () => {
    const found = board.find(element => {
      return element === "";
    });

    if (found === undefined) return true;
  };

  return (
    <Container>
      {board.map((square, i) => {
        return (
          <Square
            key={i}
            index={i}
            handleClick={handleClick}
            value={square}
            lineWinner={winner}
          />
        );
      })}
    </Container>
  );
};

export default Board;
