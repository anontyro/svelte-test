const express = require ('express');
const app = express ();
const http = require ('http').Server (app);
const io = require ('socket.io') (http);
const path = require ('path');

const PORT = 8080;

app.use (express.static (path.join (__dirname, 'public')));

io.on ('connection', socket => {
  console.log ('user connected');
  socket.on ('chat message', msg => {
    console.log (`New Message: ${msg.msg}`);
    socket.broadcast.emit ('chat message', msg);
  });
  socket.on ('disconnect', () => {
    console.log ('user disconnected');
  });
});

http.listen (PORT, () => {
  console.log (`Server started on port:${PORT}`);
});
