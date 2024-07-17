import React from 'react';
import '../sass/ExamHistoryCard.css';
const ExamHistoryCard = () => {
    return (
        <div className='exam-card'>
            <div className='exam-name'>exam1</div>
            <div className='exam-details'>
                <p>Number of questions : 12</p>
                <p>Correct answers : 7</p>
                <p>Wrong answers : 5</p>
                <p>Score : 14</p>
            </div>
        </div>
    );
};

export default ExamHistoryCard;