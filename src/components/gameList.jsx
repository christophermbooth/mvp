import React from 'react';
import GameEntry from './gameListEntry'

const GameList = (props) => (
      <div className='gameList'>
        <h2>Your Library:</h2>
        {props.games.map((game, index) => <GameEntry item={game} key={index} />)}
      </div>

)

export default GameList;