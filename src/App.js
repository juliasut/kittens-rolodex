import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: 'Frankenstein', id: 'awe1' },
        { name: 'Zombie', id: 'awe2' },
        { name: 'Dracula', id: 'awe3' },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        { this.state.monsters.map( monster => <h1 key={monster.id}>{monster.name}</h1>)}
        
      </div>
    );
  }
}

export default App;
