import React from 'react';
import '../sass/Instructions.css';
import adminPhoto from '../assets/images/sideimage-1.png';
import { Link } from 'react-router-dom';
const ExamPage = () => {
    return (
        <div className='Instru-container'>
            <img src={adminPhoto} alt="Profile"/>
            <div className="text">
                <span>Instructions before starting the hearing test</span>
                <p>
                    <ul>
                        <li>Find a quiet area to complete the hearing test.</li>
                        <li>Make sure the volume is on and set at a comfortable level.</li>
                        <li>Finally, if you are using hearing aids, we recommend that you remove them while taking the test.</li>
                    </ul>
                </p>
                <p>
                    The ReSound online hearing test does not replace a visit to a hearing care professional and it does not constitute a medical diagnosis. If you think that you are experiencing hearing loss,
                    we advise you to consult a professional hearing care specialist who can conduct a more comprehensive examination.
                </p>
                <div>
                    <button className='start-exam-button'>
                        <Link to={'/startTest'}>take the hearing exam</Link>
                    </button>
            </div>
            </div>
        </div>
    );
};

export default ExamPage;