import React from 'react';

const GameEntry = (props) => (
      <div className='gameListItem'>
        <span className='gameListImage'><img src={props.item.image_url}></img></span>
        <span className='gameListTitle'><header>{props.item.name}</header></span>
        <span className='gameListDesc'>{props.item.description}</span>
        <span className='playButtons'>
          <button className='increasePlayBtn'>+1 Plays</button>
          <button className='decreasePlaysBtn'>-1 Plays</button>
        </span>
      </div>

)

export default GameEntry;