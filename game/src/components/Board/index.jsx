import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Square from "../Square";
import {
  recievePlayer,
  updateBoard,
  sendClick,
  getWinner
} from "../../services/socket";

const Board = ({ winner, setWinner, newGame, setNewGame }) => {
  const initialBoardState = ["", "", "", "", "", "", "", "", ""];

  const [board, setBoard] = useState(initialBoardState);
  const [player, setPlayer] = useState("");

  recievePlayer(player => setPlayer(player));

  updateBoard(newBoard => {
    setBoard(newBoard);
    console.log(newBoard);
  });

  getWinner(winner => {
    console.log(winner);
    setWinner(winner);
  });

  useEffect(() => {
    if (newGame) {
      setBoard(initialBoardState);
      setNewGame(false);
    }
  }, [newGame, initialBoardState, setNewGame]);

  const handleClick = index => {
    console.log(board[index]);
    let updatedBoard = board;
    if (winner) return;
    if (!updatedBoard[index]) {
      board[index] = player;
      setBoard(updatedBoard);
      sendClick(updatedBoard, player);
    }
  };

  return (
    <Container>
      {board.map((square, i) => {
        console.log(square);
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
