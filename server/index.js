// code for backend => node and express
const express = require("express");
const app = express();
const http = require("http");
// class Server from socket.io
const { Server } = require("socket.io");
const cors = require("cors");
const { log } = require("console");

// apply the middleware cors = to avoid the errors
app.use(cors());

// create http in express
const server = http.createServer(app);
// new because Server is a class => extended it
// pass http server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
// listen to the event io.on() the event is connection
io.on("connection", (socket) => {
  console.log(`User Connected Id: ${socket.id}`);
  // event from frontend => send_message
  // click send btn you will get a message
  // socket.broadcast => send to everyone but yourself

  // fancy stuff here..
  socket.on("join_room", (data) => {
    socket.join(data);
  });

  // end fancy stuff ..

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  // socket.on("send_message", (data) => {
  //   socket.broadcast.emit("receive_message", data);
  //   console.log(data);
  // });
});

server.listen(3001, () => {
  console.log("Server is running 😄👽🥇");
});
