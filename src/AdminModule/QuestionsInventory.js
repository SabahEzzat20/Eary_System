import React, { useState, useEffect ,useRef } from 'react';
import '../sass/QuestionInventory.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAuthenticatedUser } from '../Helper/Storage';

const QuestionsInventory = () => {
  const auth = getAuthenticatedUser();
  const [questions, setQuestions] = useState({
    loading: true,
    results: [],
    err: '',
    reload: 0
  });

  useEffect(() => {
    setQuestions({ ...questions, loading: true });
    axios
      .get('http://localhost:5000/audio', {
        headers: {
          token: auth.token,
        },
      })
      .then((response) => {
        // console.log(response);
        setQuestions({ ...questions, results: response.data, loading: false, err: '' });
      })
      .catch((err) => {
        setQuestions({ ...questions, loading: false, err: 'there is something wrong' });
      });
  }, [questions.reload]);

  const audioRef = useRef(null);

  // const handleDelete = (priority) => {
  //   const updatedQuestions = questions.filter((question) => question.priority !== priority);
  //   setQuestions(updatedQuestions);
  // };

  const handlePlay = (audioFile) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioFile);
    audioRef.current.play();
  };
  const deleteQuestion = (id) => {
    axios
      .delete('http://localhost:3000/audio/'+ id , {
        headers: {
          token: auth.token,
        },
      })
      .then((response) => {
        // console.log(response);
        setQuestions({ ...questions,reload: questions.reload + 1});
      })
      .catch((err) => {
        console.log(err);
        setQuestions({ ...questions, loading: false, err: 'there is something wrong' });
      });
  }

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>priority</th>
            <th>question</th>
            <th>audio File</th>
            <th>status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.results.map((question) => (
              <tr key={question.question_id}>
                <td>{question.priority}</td>
                <td>{question.question}</td>
                <td>
                  <button onClick={() => handlePlay(question.audio_file)}>Play</button>
                  {/* <audio src={question.audio_file}></audio> */}
                </td>
                <td>
                  {question.status}
                </td>
                <td>
                  <button>
                    <Link
                      to={"/newQuestion"}
                    >Update</Link>
                  </button>
                  <span> / </span>
                  <button onClick={(e)=>{deleteQuestion(question.question_id)}}>Delete</button>
                </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsInventory;