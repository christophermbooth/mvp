import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Search from './components/search.jsx';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData : ['Example Game Data'],
      searchTest : '',
      gameEntries: []
    };
  }
  render() {
    return (
       <div>Welcome to hell MUAHAHAHHAHAH
         <Search />
       </div>
    ) 

  }
}

ReactDOM.render(<Index />, document.getElementById('root'));