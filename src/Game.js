import React, { Component } from 'react';
import Background from './Background';
import SidePanel from './SidePanel';
import Questions from './Questions';
import { fetchQuestions } from './helpers'


class Game extends Component {
    constructor () {
        super()

        this.state = {
            questions: []
        }
    }

    componentDidMount () {
        // if (!this.props.hasStarted) {
        //     this.props.history.replace('/')
        // }
        this.getQuestions()
    }

    getQuestions () {
        fetchQuestions().then(data => {
            this.setState({questions: data})
        })
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
