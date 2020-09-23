import React from 'react';

const SearchEntry = (props) => (
      <div className='gameItem'>
        <span className='gameImage'><img className='gameImageImg' src={props.item.image_url ? props.item.image_url : "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"}></img></span><br />
        <span className='gameTitle'><header>{props.item.name}</header></span><br />
        <span className='gameDesc'>{props.item.description}</span><br />
        <span className='addGameButton'>
          <button onClick={()=> props.addGame()}>Add Game To Library</button>
        </span>
      </div>
)

export default SearchEntry;