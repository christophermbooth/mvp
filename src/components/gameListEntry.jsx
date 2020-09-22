import React from 'react';

const GameListEntry = (props) => (
      <div className='gameListItem'>
        <span className='gameListImage'><img src={props.item.image_url}></img></span>
        <span className='gameListTitle'><header>{props.item.name}</header></span>
        <span className='gameListDesc'>{props.item.description}</span>
      </div>

)

export default GameListEntry;