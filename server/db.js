// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'boredboards'
// });
 
// connection.connect((err, res) => {
//   if (err) {
//     console.log('Something went wrong connection to the database: ', err)
//     return;
//   }
//   console.log('Connected to database')

// });


// module.exports = {
//   connection
// }

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boards', {useCreateIndex: true, useNewUrlParser: true});

const gameSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    index: true
  },
  name: String,
  minPlayers: Number,
  maxPlayers: Number,
  minPlayTime: Number,
  maxPlayTime: Number,
  averageUserRating: Number,
  userVotes: {
    type: Number,
    default: 0
  }
})

const Game = mongoose.model('Game', gameSchema);

module.exports = {
  Game
}