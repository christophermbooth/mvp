import React from 'react';

const SearchEntry = (props) => (
      <div className='gameItem'>
        <span className='gameImage'><img src={props.item.image_url}></img></span>
        <span className='gameTitle'><header>{props.item.name}</header></span>
        <span className='gameDesc'>{props.item.description}</span>
        <span className='addGameButton'>
          <button onClick={()=> props.addGame()}>Add Game To Library</button>
        </span>
      </div>
)

export default SearchEntry;