import React, { useState, useEffect } from "react";

import { Container, NewGame } from "./styles";
import Board from "./components/Board";
import Header from "./components/Header";
import YourTurn from "./components/YourTurn";
const App = () => {
  const [winner, setWinner] = useState("");
  const [newGame, setNewGame] = useState(false);
  const [turn, setTurn] = useState(false);

  const handleNewGame = () => {
    setNewGame(true);
    setWinner("");
  };

  return (
    <Container>
      <Header />
      <Board
        winner={winner}
        setWinner={setWinner}
        newGame={newGame}
        setNewGame={setNewGame}
        turn={turn}
        setTurn={setTurn}
      />
      {winner && !newGame && (
        <NewGame onClick={handleNewGame}>New Game!</NewGame>
      )}
      {!winner && turn && <YourTurn />}
    </Container>
  );
};

export default App;
