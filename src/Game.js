import React, { Component } from 'react';
import Background from './Background';
import SidePanel from './SidePanel';
import Questions from './Questions';

class Game extends Component {
    componentDidMount () {
        if (!this.props.hasStarted) {
            this.props.history.replace('/')
        }
    }
    
    render() {
        return (
            <div className='l-game'>
                <Background>
                    <Questions/>
                </Background>
                <SidePanel/>
            </div>
        );
    }
}

export default Game;
