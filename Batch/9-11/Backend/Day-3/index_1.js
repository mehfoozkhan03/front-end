import { createServer } from 'http';

import fs from 'fs';
console.log(fs);

const server = createServer((request, response) => {
  if (request.url === '/' && request.method === 'GET') {
    response.setHeader('Content-Type', 'text/plain');
    response.end('<h1>hello node world node</h1>');
  } else if (request.url === '/showText' && request.method === 'GET') {
    fs.readFile('./notes.txt', { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.log(err);
        response.end(err);
      }
      console.log(data);
      response.end(data);
    });
  }
});

server.listen(8080, () => {
  console.log('server start✅');
});
