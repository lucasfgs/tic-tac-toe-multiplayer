import React, { useState } from "react";

import { Container, NewGame } from "./styles";
import Board from "./components/Board";
import Header from "./components/Header";
const App = () => {
  const [winner, setWinner] = useState("");
  const [newGame, setNewGame] = useState(false);

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
      />
      {winner && !newGame && (
        <NewGame onClick={handleNewGame}>New Game!</NewGame>
      )}
    </Container>
  );
};

export default App;
