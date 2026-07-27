const express = require('express');
require('dotenv').config();
const cors = require('cors');

const server = express();

server.use(
  cors({
    origin: ['*', 'http://localhost:5173/'],
  }),
);

const watchman = (req, res, next) => {
  console.log('A');
  const start = Date.now();
  next();
  console.log('end watchman');
  console.log('time deff', Date.now() - start);
};

const logger = (req, res, next) => {
  console.log('E');
  const isAuth = true;
  if (isAuth) {
    next();
  }
  console.log('end logger');
};

server.use(watchman, logger);

console.log('B');

server.get('/', (req, res) => {
  console.log('C');
  res.send('hello server ✅');
  console.log('D');
});

// create fs here with path /create

server.listen(process.env.Port, () => {
  console.log(`Server is running on ${process.env.Port}`);
});
