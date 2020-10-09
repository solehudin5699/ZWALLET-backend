const express = require("express");
const http = require("http").createServer(express());
const io = require("socket.io")(http);
const socketConnectionHandler = (io) => {
  io.on("connection", (socket) => {
    const id = socket.handshake.query.id;
    socket.join(id);
    console.log("user connected with id: ", id);
    socket.on("disconnect", () => {
      console.log(`user with id: ${id} disconnected`);
    });
  });
};
module.exports = { express, http, io, socketConnectionHandler };
