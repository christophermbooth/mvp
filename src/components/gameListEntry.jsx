import React from 'react';

const GameEntry = ({item, changeCounter, deleteGame}) => (
      <div className='gameListItem' data-game={item}>
        <span className='gameListImage'><img className="gameListImage" src={item.image_url ? item.image_url : "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"}></img></span><br/>
        <span className='gameListTitle'>{item.name}</span><br/>
        <span className='gameListRating'>Average Rating:{item.average_user_rating}</span><br/>
        <span className='gameListDesc'>{item.description}</span><br/>
        <span className='gameListMinPlayers'>Minimum Play Time: {item.min_playtime}</span><br/>
        <span className='gameListMaxPlayers'>Maximum Play Time: {item.max_playtime}</span><br/>
        <span className='gameListMinPlayers'>Minimum Players: {item.min_players}</span><br/>
        <span className='gameListMaxPlayers'>Maximum Players: {item.max_players}</span><br/>
        <span className='playCounter'>Times Played: {item.userVotes}</span>
        <span className='playButtons'> <br/>
          <button className='increasePlayBtn' onClick={()=> changeCounter(item.name, 1)}>+1 Plays</button>
          <button className='decreasePlaysBtn' onClick={()=> changeCounter(item.name, -1)}>-1 Plays</button>
        </span>
        <span>
          <button className='deleteGameEntry' onClick={() => deleteGame(item.name)}>DELETE GAME</button>
        </span>
      </div>

)

export default GameEntry;