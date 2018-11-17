import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Questions extends Component {
    renderAnswere(answer, index) {
        return(
            <li 
                key={index}
                className='c-question'>
                <span className='c-question__label'>
                    {String.fromCharCode(65 + index)}: {answer}
                </span>
            </li>
        )
    }

    render() {
        return (
            <div className='c-questions'>
                <p className='c-questions__title c-question'>Pytanie</p>
                <ul className='c-questions__list'>
                    {this.props.answers.map(this.renderAnswere)}
                </ul>
            </div>
        );
    }
}

Questions.propTypes = {
    answers: PropTypes.array,
    question: PropTypes.string
}

export default Questions;
