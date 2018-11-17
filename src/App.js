import React, { Component } from 'react';
import Setup from './Setup'



class App extends Component {
  constructor() {
    super()
  
    this.state = {
      hasStarted: false,
      name: '',
      difficulty: ''
    }
    this.setupGame = this.setupGame.bind(this)
  }

  setupGame (name, difficulty) {
    
    this.setState({
      name,
      difficulty,
      hasStarted: true
    })
  }

  render() {
    return (
      <div>
        <Setup 
          onSubmit={this.setupGame}
        />
      </div>
    );
  }
}

export default App;
