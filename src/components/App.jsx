// import e from 'express';
import React, { Component } from 'react';
import Search from './search'
import GameEntry from './gameEntry'
import GameList from './gameList'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData : [],
      searchText : '',
      gameEntries: [],
      searchedGame: {},
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.searchForGame = this.searchForGame.bind(this);
    this.addGame = this.addGame.bind(this);
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
    console.log(`Now attempting to add ${searchedGame.name} to the local database`);
    axios.post('http://localhost:3000/games', searchedGame)
      .then(() => {
        console.log('Game Added Successfully; Refreshing Games List')
        axios.get('http://localhost:3000/games')
          .then((result) => {
            console.log(result);
            this.setState({
              gameData: result.data,
              searchedGame: {}
            })
          })
        }
      )
      .catch((err) => {console.log('Could not post to server'), err})

  }

  render() {
    let {searchedGame, gameData} = this.state;
    return (
       <div>
         <header>Welcome to Your Games Library</header>
         <Search searchHandler={this.searchHandler} searchForGame={this.searchForGame} />
         <GameEntry item={searchedGame} addGame ={this.addGame}/>
         <GameList games={gameData} />
       </div>
    ) 
  }
}

export default App;