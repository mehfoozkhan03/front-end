import { createServer } from 'http';

const server = createServer((request, response) => {
  console.log(request.url);
  console.log(`🚀 ~ request.method:`, request.method);
  if (request.url === '/' && request.method === 'GET') {
    // response.write('hello node');
    // response.write(' world node');
    response.end('hello node world node');
  } else if (request.url === '/report' && request.method === 'POST') {
    response.write('all data here!');
    response.end();
  } else {
    response.write('something went wrong❌');
    response.end();
  }
});

server.listen(8080, () => {
  console.log('server start✅');
});
