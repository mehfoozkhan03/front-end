const express = require('express');

const {
  // readFileSync,
  // writeFileSync,
  writeFile,
  readFile,
} = require('fs');
// if u r using the async syntax then you should import fs/promise in this way...
const Port = 10000;

const server = express();

server.use(express.json());
server.use(express.text());

server.get('/', (req, res) => {
  readFile('./note.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.send({ status: 'error', msg: err });
    }
    res.send(data);
  });

  /*  
  // this is promis wala tareeka 
  try {
    const data = await readFile('./note.json', { encoding: 'utf-8' });
    res.send(data);
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  } */
});

server.post('/create', async (req, res) => {
  /*
 // sync way
 const createData = writeFileSync('./note.json', JSON.stringify(req?.body));
  console.log(`🚀 ~ createData:`, createData); */
  // async has 2-way

  // first

  /* writeFile('./note.json', JSON.stringify(req?.body), (err) => {
    if (err) {
      console.log(err);
      res.send({ status: 'error', msg: err });
    } else {
      res.send('data has been created..');
    }
  }); */

  // second
  try {
    const data = await writeFile(
      './note.json',
      JSON.stringify(req?.body, null, 2),
    );
    res.send('data has been created....');
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
    res.send({ status: 'error', msg: error });
  }
});

server.listen(Port, () => {
  console.log(`this server is running on ${Port}`);
});
