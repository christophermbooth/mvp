const dotenv = require('dotenv').config();
const path = require('path');
const e = require('express');
const express = require('express');
const app = express();
const {PORT} = process.env || 3000;
const mongoose = require('mongoose')
const {Game} = require('./db')
const bodyParser = require('body-parser');


const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR))
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(PORT, () => console.log(`Server now listening on port: ${PORT}`));

app.get('/', (req, res) => {
  res.send(HTML_FILE);
})


app.post('/games', (req, res) => {
  console.log(req.body, '<======= REQ BODY')
  res.status(200)
  res.end();
  // let testGame = {
  //   id: 451512,
  //   name: 'TEST GAME 9000'
  // }
  // Game.find(testGame)
  //   .then(result => {
  //     if(!result.length) {
  //       console.log('Now saving new entry')
  //       new Game(testGame).save()
  //         .then((savedGame) => {
  //           res.status(200)
  //           res.send(savedGame);
  //           return;
  //         })
  //     }else{
  //       console.log('Entry already exists for game, skipping')
  //       res.status(302)
  //       res.send();
  //     }
  //   })
  //   .catch((err)=> {
  //     console.log('Something went wrong querying the server: ', err)
  //   })
})


app.get('/games', (req, res) => {
  Game.find({})
    .then(games => {
      res.status(200).send(games);
    })
});

