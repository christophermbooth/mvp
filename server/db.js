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
  image_url: String,
  min_players: Number,
  max_players: Number,
  min_playtime: Number,
  max_playtime: Number,
  average_user_rating: Number,
  description: String,
  userVotes: {
    type: Number,
    default: 0
  },
})

const Game = mongoose.model('Game', gameSchema);

module.exports = {
  Game
}