const express = require('express');
require('dotenv').config();

const server = express();

const watchman = (req, res, next) => {
  console.log('A');
  next();
  console.log('end watchman');
};

const logger = (req, res, next) => {
  console.log('E');
  next();
  console.log('end logger');
};

server.use(watchman);
server.use(logger);

console.log('B');

server.get('/', (req, res) => {
  console.log('C');
  res.send('hello server ✅');
  console.log('D');
});

server.listen(process.env.Port, () => {
  console.log(`Server is running on ${process.env.Port}`);
});
