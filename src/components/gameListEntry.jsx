import React from 'react';

const GameEntry = (props) => (
      <div className='gameListItem' data-game={props.item}>
        <span className='gameListImage'><img src={props.item.image_url}></img></span><br/>
        <span className='gameListTitle'>{props.item.name}</span><br/>
        <span className='gameListRating'>Average Rating:{props.item.average_user_rating}</span><br/>
        <span className='gameListDesc'>{props.item.description}</span><br/>
        <span className='gameListMinPlayers'>Minimum Play Time: {props.item.min_playtime}</span><br/>
        <span className='gameListMaxPlayers'>Maximum Play Time: {props.item.max_playtime}</span><br/>
        <span className='gameListMinPlayers'>Minimum Players: {props.item.min_players}</span><br/>
        <span className='gameListMaxPlayers'>Minimum Players: {props.item.max_players}</span><br/>
        <span className='playButtons'> <br/>
          <button className='increasePlayBtn' onClick={()=> console.log(event.currentTarget)}>+1 Plays</button>
          <button className='decreasePlaysBtn' onClick={()=> console.log(event.currentTarget)}>-1 Plays</button>
        </span>
      </div>

)

export default GameEntry;