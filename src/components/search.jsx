import React from 'react';

const Search = (props) => (
      <div className='search'>
        <input type="text" onChange={(event) => {props.searchHandler(event)}}/>
        <button onClick={() => props.searchForGame()}>
          <span>Find My Game!</span>
        </button>
      </div>

)

export default Search;