// Vendor
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

// Setup
const port = process.env.APP_PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// Simple solution, does not persist
const messages = [];
let users = [];

/**
 * Eventually you'd persist this data in a proper DB which would allow
 * for pagination. Right now we're faking it by in memory and only returning
 * the last ## records as new users join
 */
const maxMessages = 10;

io.on('connection', (socket) => {
  socket.on('messages.init', () => {
    io.emit('messages.init', messages.slice(-maxMessages));
  });

  socket.on('messages.send', (message) => {
    messages.push(message);
    io.emit('messages.new', message);
  });

  socket.on('users.init', () => {
    io.emit('users.get', users);
  });

  socket.on('user.join', (user) => {
    const isPresent = users.includes(user);

    if (isPresent) return;

    users.push(user);
    io.emit('users.update', users);
  });

  socket.on('user.leave', (user) => {
    users = users.filter((instance) => user !== instance);
    io.emit('users.update', users);
  });
});

nextApp
  .prepare()
  .then(() => {
    app.get('*', (req, res) => {
      return nextHandler(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`🚀 Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    // TODO: Rollbar or similar
    console.log(`🔴 Error creating server`, err);
  });
