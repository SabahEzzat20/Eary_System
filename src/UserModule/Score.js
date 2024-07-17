import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/Score.css';
const Score = () => {
    return (
        <div className='score-div'>
            <div className='parag-div'>
                <p className='score-text'>your score is : 15 out of 20</p>
            </div>
            <div className='retake-button'>
                <button>
                    <Link to={'/exam'}>retake exam</Link>
                </button>
            </div>
        </div>
    );
};

export default Score;