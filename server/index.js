const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const {PORT} = process.env;

app.listen(PORT, () => console.log(`Server now listening on port: ${PORT}`));

app.get('/', (req, res) => {
  res.send('WELCOME SHITHEAD THIS IS GOING TO BE PAINFUL');
})