import React, { Component } from 'react';
import Background from './Background';
import SidePanel from './SidePanel';
import Questions from './Questions';
import { fetchQuestions } from './helpers'
import shuffle from 'lodash/shuffle'


class Game extends Component {
    constructor () {
        super()

        this.state = {
            questions: [],
            currentQuestionNumber: 0
        }
    }

    get currentQuestion () {
        return this.state.questions[this.state.currentQuestionNumber]
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

    checkAnswer (answer) {
        return (event) => {
            console.log(answer)
        }
    }
    
    render() {
        const {
            correctAnswer,
            incorrectAnswers= [],
            question 
        } = this.currentQuestion || {}

        return (
            <div className='l-game'>
                <Background>
                    <Questions
                        answers={shuffle([correctAnswer, ...incorrectAnswers])}
                        question={question}
                        onAnswerClick={this.checkAnswer}
                    />
                </Background>
                <SidePanel/>
            </div>
        );
    }
}

export default Game;
