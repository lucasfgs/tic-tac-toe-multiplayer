import openSocket from "socket.io-client";

const socket = openSocket("http://127.0.0.1:5000");

export const updateBoard = cb => {
  socket.on("updateBoard", newBoard => cb(newBoard));
};

export const recievePlayer = cb => {
  socket.on("sendPlayer", player => cb(player));
};

export const sendClick = (board, player) => {
  socket.emit("playerClick", { board, player });
};

export const getWinner = cb => {
  socket.on("winner", winner => cb(winner));
};
