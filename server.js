const bodyParser = require("body-parser");
const express = require("express");
// const { Socket } = require("socket.io");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = "8080";

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let messages = [
  { name: "Ali", message: "Hello! Asim!" },
  { name: "Asim", message: "Hey! Ali!" },
];

app.get("/messages", (req, res) => {
  res.send(messages);
});
app.post("/messages", (req, res) => {
  messages.push(req.body);
  io.emit("message", req.body);
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("User Connected!");
});
const server = http.listen(PORT, () => {
  //   console.log(`Listening on port ${PORT}...`);
  // or
  console.log(`Listening on port ${server.address().port}...`);
});
