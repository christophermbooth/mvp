import React from 'react';

const GameEntry = (props) => (
      <div className='gameItem'>
        <span className='gameImage'><img src={props.item.image_url}></img></span>
        <span className='gameTitle'><header>{props.item.name}</header></span>
        <span className='gameDesc'><p>{props.item.description}</p></span>
      </div>

)

export default GameEntry;