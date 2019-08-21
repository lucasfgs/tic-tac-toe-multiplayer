const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express().listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = require("socket.io"),
  server = io.listen(app);

const { switchPlayer, verifyWinner } = require("./game");

const player = ["X", "O"];

var lastPlayer = [player[0]];

// event fired every time a new client connects:
server.on("connection", socket => {
  console.info(`We have a new client :) | id: ${socket.id}`);

  socket.emit("sendPlayer", lastPlayer);
  socket.emit("yourTurn", true);
  lastPlayer = switchPlayer(player, lastPlayer);

  socket.on("playerClick", data => {
    console.log(data.board);
    socket.emit("updateBoard", data.board);
    socket.broadcast.emit("updateBoard", data.board);
    let winner = verifyWinner(data.player, data.board);
    socket.emit("winner", winner);
    socket.broadcast.emit("winner", winner);
    socket.broadcast.emit("yourTurn", true);
  });

  // when socket disconnects, remove it from the list:
  socket.on("disconnect", () => {
    console.info(`We lost a client :( | id: ${socket.id}`);
  });
});
