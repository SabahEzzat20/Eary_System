    import React, { useState, useEffect, useRef } from 'react';
    import question from '../assets/images/questionmark.jpg';
    import '../sass/Questions.css';
    import audioFile1 from '../assets/images/108.mp3';
    import audioFile2 from '../assets/images/112.mp3';
    import Score from '../UserModule/Score';

    export const Questions = () => {
    const Data = [
        {
        id: 1,
        question: 'which surah do you hear?',
        answer1: 'Al-Ekhlas',
        answer2: 'Al-Maeda',
        answer3: 'Al-Bakara',
        answer4: 'Al-kahf',
        audio: audioFile2,
        },
        {
        id: 2,
        question: 'which surah do you hear?',
        answer1: 'Al-Ekhlas',
        answer2: 'Al-Maeda',
        answer3: 'Al-Bakara',
        answer4: 'Al-adiat',
        audio: audioFile1,
        },
        {
        id: 3,
        question: 'which surah do you hear?',
        answer1: 'Al-Ekhlas',
        answer2: 'Al-Maeda',
        answer3: 'Al-Bakara',
        answer4: 'yonus',
        audio: audioFile2,
        },
        {
        id: 4,
        question: 'which surah do you hear?',
        answer1: 'Al-Ekhlas',
        answer2: 'Al-Maeda',
        answer3: 'Al-Bakara',
        answer4: 'Al-Esraa',
        audio: audioFile1,
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = Data[currentQuestionIndex];
    const audioRef = useRef(null);

    const createAudio = () => {
        audioRef.current = new Audio(currentQuestion.audio);
        audioRef.current.play();
    };

    useEffect(() => {
        createAudio();
    }, []);

    useEffect(() => {
        if (audioRef.current) {
        audioRef.current.pause();
        }
        createAudio();
        setSelectedAnswer(null);
    }, [currentQuestionIndex]);

    const handleRadioClick = (event) => {
        const selected = event.target.value;
        setSelectedAnswer(selected);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <>
        <div className='exam-page-container'>
            <>
            <div className='test-container'>
                {currentQuestionIndex === Data.length-1 ? (
                    <Score />
                ) : (
                    <>
                    <p>{currentQuestion.question}</p>
                    <ul>
                    <li>
                        <input type='radio' name={`correctAnswer${currentQuestion.id}`} value={currentQuestion.answer1} id={`answer${currentQuestion.id}-1`} checked={selectedAnswer === currentQuestion.answer1} onChange={handleRadioClick} />
                        <label htmlFor={`answer${currentQuestion.id}-1`}>{currentQuestion.answer1}</label>
                    </li>
                    <li>
                        <input type='radio' name={`correctAnswer${currentQuestion.id}`} value={currentQuestion.answer2} id={`answer${currentQuestion.id}-2`} checked={selectedAnswer === currentQuestion.answer2} onChange={handleRadioClick} />
                        <label htmlFor={`answer${currentQuestion.id}-2`}>{currentQuestion.answer2}</label>
                    </li>
                    <li>
                        <input type='radio' name={`correctAnswer${currentQuestion.id}`} value={currentQuestion.answer3} id={`answer${currentQuestion.id}-3`} checked={selectedAnswer === currentQuestion.answer3} onChange={handleRadioClick} />
                        <label htmlFor={`answer${currentQuestion.id}-3`}>{currentQuestion.answer3}</label>
                    </li>
                    <li>
                        <input type='radio' name={`correctAnswer${currentQuestion.id}`} value={currentQuestion.answer4} id={`answer${currentQuestion.id}-4`} checked={selectedAnswer === currentQuestion.answer4} onChange={handleRadioClick} />
                        <label htmlFor={`answer${currentQuestion.id}-4`}>{currentQuestion.answer4}</label>
                    </li>
                    </ul>
                    <div className='audio-container'>
                    <audio ref={audioRef} controls={false} />
                    </div>
                </>
                )}
            </div>

            <div className='question-mark-image'>
                <img src={question} alt='question' />
            </div>
            </>
        </div>
        </>
    );
    };

