import { Component } from 'react';
import './App.css';
import Cardlist from './components/card-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => this.setState({monsters: users}))
  }
  

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <input type="search" placeholder="search monsters" onChange={e => this.setState({searchField: e.target.value})} />
        <Cardlist monsters={filteredMonsters} />
        
      </div>
    );
  }
}

export default App;
