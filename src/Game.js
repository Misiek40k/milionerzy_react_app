import React, { Component } from 'react';
import Background from './Background';
import SidePanel from './SidePanel';
import Questions from './Questions';
import { fetchQuestions } from './helpers'
import shuffle from 'lodash/shuffle'
import EndGame from './EndGame';
import PropTypes from 'prop-types';


class Game extends Component {
    constructor () {
        super()

        this.state = {
            questions: [],
            currentQuestionNumber: 0,
            hasWon: false,
            isFinished: false
        }

        this.getQuestions = this.getQuestions.bind(this)
        this.checkAnswer = this.checkAnswer.bind(this)
    }

    get currentQuestion () {
        return this.state.questions[this.state.currentQuestionNumber]
    }

    componentDidMount () {
        if (!this.props.hasStarted) {
            this.props.history.replace('/')
        }
        this.getQuestions()
    }

    getQuestions () {
        fetchQuestions(this.props.difficulty).then(data => {
            this.setState({questions: data})
        })
    }

    checkAnswer (answer) {
        return (event) => {
            if (answer === this.currentQuestion.correctAnswer) {
                if (this.state.currentQuestionNumber < 11) {
                    this.setState(prevState => {
                        return {
                            currentQuestionNumber: prevState.currentQuestionNumber +1
                        }
                    })
                } else {
                    this.setState({
                        hasWon: true,
                        isFinished: true
                    })
                }
            } else {
                this.setState({
                    hasWon: false,
                    isFinished: true
                })
            }
        }
    }
    
    render() {
        const {
            correctAnswer,
            incorrectAnswers= [],
            question 
        } = this.currentQuestion || {}

        return this.state.isFinished
        ? <EndGame 
            username={this.props.username}
            questionNumber={this.state.currentQuestionNumber}

        />
        :(
            <div className='l-game'>
                <Background>
                    <Questions
                        answers={shuffle([correctAnswer, ...incorrectAnswers])}
                        question={question}
                        onAnswerClick={this.checkAnswer}
                    />
                </Background>
                <SidePanel
                    questionNumber={this.state.currentQuestionNumber}
                />
            </div>
        );
    }
}

Game.propTypes = {
    username: PropTypes.string,
    history: PropTypes.object,
    hasStarted: PropTypes.bool,
    difficulty: PropTypes.string
}

export default Game;
