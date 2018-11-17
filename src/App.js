import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Setup from './Setup'
import Game from './Game'



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

  setupGame (name, difficulty, callback) {
    
    this.setState({
      name,
      difficulty,
      hasStarted: true
    },callback)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='https://misiek40k.github.io/millionaires_react_workshop/'
            // Component={Setup}
            render={ ({history}) => <Setup 
              onSubmit={this.setupGame}
              history={history}
              />}
          />
          <Route 
            exact
            path = '/game'
            render={({history}) => (
              <Game
                hasStarted = {this.state.hasStarted}
                history={history}
                username={this.state.name}
                difficulty={this.state.difficulty}
              />
            )}
          />
          <Route 
            render={() => <p>404 Page Not Found</p>}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
