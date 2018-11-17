import React, { Component } from 'react';

class Game extends Component {
    componentDidMount () {
        if (!this.props.hasStarted) {
            this.props.history.replace('/')
        }
    }
    
    render() {
        return (
            <div>
                Game
            </div>
        );
    }
}

export default Game;
