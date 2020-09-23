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
  Game.find({name: req.body.name})
    .then(result => {
      if(!result.length) {
        console.log('Now saving new entry')
        new Game(req.body).save()
          .then((savedGame) => {
            res.status(200)
            res.send(savedGame);
            return;
          })
      }else{
        console.log('Entry already exists for game, skipping')
        res.status(200)
        res.send(result);
      }
    })
    .catch((err)=> {
      console.log('Something went wrong querying the server: ', err)
    })
})


app.get('/games', (req, res) => {
  Game.find({})
    .then(games => {
      res.status(200).send(games);
    })
});

app.post('/updates', (req, res) => {
  let {name, modifier} = req.body;
  Game.updateOne({name}, { $inc: { userVotes: modifier }})
    .then((result) => {
      console.log(result);
      res.status(200)
      res.end()
    })
});



app.delete('/games', (req, res) => {
  // console.log(req.query, '==== QUERY')
  let {gameName} = req.query;
  console.log(gameName);
  Game.deleteOne({name: gameName})
    .then( () => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500)
    })
})

