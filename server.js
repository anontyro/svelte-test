const express = require ('express');
const app = express ();
const http = require ('http').Server (app);
const io = require ('socket.io') (http);
const path = require ('path');

const PORT = 8080;

app.use (express.static (path.join (__dirname, 'public')));

let userCount = 0;
let activeUsers = [];

const addUser = user => {
  activeUsers.push (user);
  console.log (activeUsers);
  userCount = activeUsers.length;
};
const removeUser = currentUser => {
  activeUsers = activeUsers.filter (user => user.userId !== currentUser.userId);
  userCount = --userCount;
};

io.on ('connection', socket => {
  socket.on ('chat message', msg => {
    console.log (`New Message: ${msg.msg} \n from user ${msg.user}`);
    socket.broadcast.emit ('chat message', msg);
  });
  socket.on ('user-joins', user => {
    console.log (`${user.userName} has joined the chat`);
    socket.broadcast.emit ('user-list', activeUsers);
    addUser (user);
  });
  socket.on ('disconnect', () => {
    console.log ('user disconnected');
    removeUser ({userId: 0});
  });
});

http.listen (PORT, () => {
  console.log (`Server started on port:${PORT}`);
});
