import React from 'react';
import GameEntry from './gameEntry'

const GameList = (props) => (
      <div className='gameList'>
        <h2>Your Library:</h2>
        {props.games.map(game => <GameEntry item={game} />)}
      </div>

)

export default GameList;