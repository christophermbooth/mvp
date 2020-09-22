import React from 'react';

const Search = (props) => (
      <div className='search'>
        <input type="text" onChange={(event) => {
          console.log(event)
          props.searchHandler(event)
        }}/>
        <button onClick={() => props.searchForGame()}>
          <span>Find My Game!!</span>
        </button>
      </div>

)
//   render() {
//     return (
//     )
//   }
// }

export default Search;