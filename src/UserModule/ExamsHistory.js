import React from 'react';
import ExamHistoryCard from './ExamHistoryCard';
import '../sass/ExamsHistory.scss';
const ExamsHistory = () => {
    return (
        <div className='history-container'>
            <ExamHistoryCard />
            <ExamHistoryCard />
            <ExamHistoryCard />
        </div>
    );
};

export default ExamsHistory;