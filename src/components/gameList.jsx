import React from 'react';
import GameListEntry from './gameEntry'

const GameList = (props) => (
      <div className='gameList'>
        <h2>Your Library:</h2>
        {props.games.map((game, index) => <GameListEntry item={game} key={index} />)}
      </div>

)

export default GameList;