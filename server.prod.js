
/* eslint-disable no-console, import/no-extraneous-dependencies */

const path = require('path');
const express = require('express');

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || 4000;

const server = express();

server.use(express.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(PORT, IP, (err) => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(`Production server is running on port ${PORT}`);
});
