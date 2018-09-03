import React, { Component } from 'react';
import Header from '../common/Header'
import JokesList from '../jokes/JokesList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        refreshCounter:0
    };
  }

  render() {
    return (
      <div className="App">
       <Header/>
       <div class="container mainContent">
        <JokesList name={this.state.refreshCounter}/>
       </div>
    </div>
    );
  }
}

export default App;
