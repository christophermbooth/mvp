// import e from 'express';
import React, { Component } from 'react';
import Search from './search'
import SearchEntry from './searchEntry'
import GameList from './gameList'
import GameEntry from './gameListEntry'
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
    this.changeCounter = this.changeCounter.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:8080/games')
    .then(result => this.setState({gameData: result.data}))
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
        this.setState({
          searchedGame: result.data.games[0]
        })
      });
  }

  addGame(){
    let {searchedGame} = this.state
    console.log(`Now attempting to add ${searchedGame.name} to the local database`);
    axios.post('http://localhost:8080/games', searchedGame)
      .then(() => {
        console.log('Game Added Successfully; Refreshing Games List')
        axios.get('http://localhost:8080/games')
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


  deleteGame(gameName){
    axios.delete(`http://localhost:8080/games?gameName=${gameName}`)
      .then(() => {
        axios.get('http://localhost:8080/games')
          .then(results => this.setState({gameData: results.data}))
      })
  }


  changeCounter(gameName, modifier){
    const options = {
      name: gameName,
      modifier: modifier
    }
    axios.post(`http://localhost:8080/updates`, options)
      .then(() => {
        axios.get('http://localhost:8080/games')
          .then((result) => {
            // console.log(result);
            this.setState({
              gameData: result.data,
            })
          })
      })
  }

  render() {
    let {searchedGame, gameData} = this.state;
    if (Object.keys(searchedGame).length) {
      return (
        <div>
          <header>Welcome to Your Games Library</header>
          <Search searchHandler={this.searchHandler} searchForGame={this.searchForGame} />
          <SearchEntry item={searchedGame} addGame ={this.addGame}/>
          <GameList games={gameData} changeCounter={this.changeCounter} deleteGame={this.deleteGame}/>
        </div>
      )
    } else {
      return (
        <div>
          <header>Welcome to Your Games Library</header>
          <Search searchHandler={this.searchHandler} searchForGame={this.searchForGame} />
          <GameList games={gameData} changeCounter={this.changeCounter} deleteGame={this.deleteGame} />
        </div>
      )
    }
  }
}

export default App;