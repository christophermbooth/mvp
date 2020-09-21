const dotenv = require('dotenv').config();
const e = require('express');
const express = require('express');
const app = express();
const {PORT} = process.env;
const mongoose = require('mongoose')
const {Game} = require('./db')
// const connection = require('./db')

//API QUERIES RETURN AN OBJECT WITH GAMES ARRAY CONTAINING OBJECTS
//EACH OBJECT IS A GAME
//
app.listen(PORT, () => console.log(`Server now listening on port: ${PORT}`));

app.get('/', (req, res) => {
  res.send('WELCOME SHITHEAD THIS IS GOING TO BE PAINFUL');
})


app.post('/games', (req, res) => {
  // console.log(req,'req');
  let testGame = {
    id: 45154,
    name: 'TEST GAME 8000'
  }
  Game.find(testGame)
    .then(result => {
      if(!result.length) {
        console.log('Now saving new entry')
        new Game(testGame).save()
          .then((savedGame) => {
            res.status(200)
            res.send(savedGame);
            return;
          })
      }else{
        console.log('Entry already exists for game, skipping')
        res.status(302)
        res.send();
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

