import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Square from "../Square";
import {
  recievePlayer,
  updateBoard,
  sendClick,
  getWinner,
  myTurn
} from "../../services/socket";

const Board = ({ winner, setWinner, newGame, setNewGame }) => {
  const initialBoardState = ["", "", "", "", "", "", "", "", ""];

  const [board, setBoard] = useState(initialBoardState);
  const [player, setPlayer] = useState("");
  const [turn, setTurn] = useState(false);

  recievePlayer(player => {
    setPlayer(player);
    console.log(player);
  });

  updateBoard(newBoard => setBoard(newBoard));

  getWinner(winner => setWinner(winner));

  myTurn(turn => setTurn(turn));

  useEffect(() => {
    if (newGame) {
      setBoard(initialBoardState);
      setNewGame(false);
    }
  }, [newGame, initialBoardState, setNewGame]);

  const handleClick = index => {
    let updatedBoard = board;
    if (winner) return;
    if (!updatedBoard[index] && turn) {
      board[index] = player;
      setBoard(updatedBoard);
      sendClick(updatedBoard, player);
      setTurn(false);
    }
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
