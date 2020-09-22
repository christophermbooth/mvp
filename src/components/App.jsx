// import e from 'express';
import React, { Component } from 'react';
import Search from './search'
import Game from './gameEntry'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData : ['Example Game Data'],
      searchText : '',
      gameEntries: [],
      searchedGame: {},
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.searchForGame = this.searchForGame.bind(this);
  }

  searchHandler(event){
    this.setState({
      searchText: event.target.value
    })
  }
  
  searchForGame(){
    let {searchText} = this.state;
    axios.get(`https://api.boardgameatlas.com/api/search?name=${searchText}&client_id=DtCQNjLWfm&limit=1`)
      .then(result => {
        // console.log(result)
        this.setState({
          searchedGame: result.data.games[0]
        })
      });
  }

  addGame(){
    let {searchedGame} = this.state
    axios.post('localhost:3000/games', searchedGame)
      .then(result => {
        console.log('Game Successfully Added')
      })
      .catch(err => console.log('Could not add game to database: ', err))
  }

  render() {
    return (
       <div>
         <header>Welcome to Your Games Library</header>
         <Search searchHandler={this.searchHandler} searchForGame={this.searchForGame}/>
       </div>
    ) 

  }
}

export default App;