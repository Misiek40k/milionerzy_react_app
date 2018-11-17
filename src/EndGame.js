import React from 'react';
import PropTypes from 'prop-types';
import {getGuaranteedReward} from './helpers';
import {Link} from 'react-router-dom';

const EndGame = props => {
    
        return (
            <div className='l-end'>
                <p>Game Over {props.username}</p>
                <p>You Won {getGuaranteedReward(props.questionNumber)} $</p>
                <Link
                    to={'/'}
                >
                    Restart
                </Link>
            </div>
        );
}

EndGame.propTypes = {
    questionNumber: PropTypes.number
}

export default EndGame;
