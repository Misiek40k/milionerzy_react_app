import React, { Component } from 'react';
import { questionsList } from './helpers';
import PropTypes from 'prop-types';

class SidePanel extends Component {

    get lastQuestionIndex () {
        return questionsList.length -1
    }

    renderItem = ({price, isGuaranteened}, index) => {
        const {
            questionNumber
        } = this.props

        const isCurrent = questionNumber === (this.lastQuestionIndex - index)
        const isAnswered = questionNumber > (this.lastQuestionIndex - index)

        
        const className = `c-status__item ${isCurrent ? 'is-active' : ''} ${isAnswered ? 'is-done' : ''} ${isGuaranteened ? 'is-special': ''}`
    
        return (
            <li 
                key={price}
                className={className}
            >
                <span className='c-status__indicator'>
                    {this.lastQuestionIndex - index}
                </span>

                <span className='c-value'>
                    {price}
                </span>
            </li>
        )
    }
    
    render() {
        return (
            <div className='c-side'>
                <ul>
                    {questionsList.map(this.renderItem)}
                </ul>
            </div>
        );
    }
}

SidePanel.propTypes = {
    questionNumber: PropTypes.number
}

export default SidePanel;
