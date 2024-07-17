import React from 'react';
import QuestionsInventory from './QuestionsInventory';
import audio from '../assets/images/112.mp3';
const ShowQuestions = () => {
  const data = [
    {
      id: 1,
      question: 'What is the capital of France?',
      audioFile: {audio},
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      audioFile: {audio},
      correctAnswer: 'Jupiter',
    },
    {
      id: 3,
      question: 'What is the smallest country in the world?',
      audioFile: {audio},
      correctAnswer: 'Vatican City',
    },
  ];

  return (
    <div>
      <QuestionsInventory data={data} />
    </div>
  );
};

export default ShowQuestions;