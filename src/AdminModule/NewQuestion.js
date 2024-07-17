import React, { useRef, useState } from 'react';
import '../sass/NewQuestion.css';
import cross from '../assets/images/delete.png';
import questonImage from '../assets/images/question.jpg';
import axios from 'axios';
import {getAuthenticatedUser} from '../Helper/Storage';

export const NewQuestion = () => {
  const auth = getAuthenticatedUser();

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const [question, setQuestion] = useState({
    loading: false,
    question: '',
    priority: '',
    err: '',
    // reload: 0,
    // successMsg:''
  });
  // const [file, setFile] = useState(null);
  // const [priority, setPriority] = useState('');
  // const [status, setStatus] = useState('');

  // const handleQuestionChange = (event) => {
  //   setQuestion(event.target.value);
  // };

  const addItem = () => {
    if (!newItem) {
      alert("Enter an answer")
      return;
    }
    const item = {
      id: Date.now(),
      value: newItem
    };
    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile && selectedFile.type.startsWith('audio/')) {
  //     setFile(selectedFile);
  //   } else {
  //     alert('Please upload an audio file.');
  //     setFile(null);
  //   }
  // };

  // const handlePriorityChange = (event) => {
  //   setPriority(event.target.value);
  // };

  // const handleStatusChange = (event) => {
  //   setStatus(event.target.value);
  // };
  const audio = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('question', question.question);
    formData.append('priority', question.priority);
    if (audio.current.files && audio.current.files[0]) {
      formData.append('audio_file', audio.current.files[0]);
    }
    // formData.append('status', status);
    // items.forEach((item, index) => {
    //   formData.append(`answer_${index}`, item.value);
    // });
    axios.post('http://localhost:5000/audio', formData , {
        headers: {
          token: auth.token,
          // to post the form of audio to postman without any errors
          "Content-Type" : "multipart/form-data",
        }
      })
        .then((response) => {
          setQuestion({
            loading: false,
            question: '',
            priority: '',
            err: '',
            // reload: 0,
            // successMsg: "question created successfully! "
          });
          audio.current.files = null;
        })
        .catch((err) => {
          setQuestion({
            ...question,
            loading: false,
            // successMsg: '',
            err: 'something went wrong! please try again',
            // reload: 0,
          });
        });
  };
  
  return (
    <>

      <div className='container'>
        <div className='image-container'>
          <img src={questonImage} alt="questionimage" />
        </div>
        <div className='guidelines-div'>
          <p>Instructions for creating new question...</p>
          <ol>
            <li>write question priority</li>
            <li>upload audio file</li>
            <li>create question</li>
            <li>describe what audio is talking about</li>
            <li>you can put any number of answers</li>
            <li>and then select the correct answer for this questoin</li>
            <li>finally ,submit the question</li>
          </ol>
        </div>
      </div>


      <div className='new-question-div'>
        <form onSubmit={handleSubmit}>
          <div className='question-container'>
            <div className="drag-area">
              <label htmlFor='input-audio' className='input-audio'>
                <span className='browse-div'>upload audio file</span>
                <input type='file' id='input-audio' accept='audio/*' required ref={audio} />
              </label>
                  
            </div>
            <div>
              <div className='question-div'>
                <label>Question priority </label>
                <input
                  className='priority-text-field'
                  type='number'
                  min="1"
                  value={question.priority}
                  required
                  onChange={(e) => {
                    setQuestion({ ...question, priority: e.target.value })
                  }}
                />
              </div>
              <div className='question-details-div'>
                <label>Question </label>
                <input
                  className='question-text-field'
                  type='text'
                  value={question.question}
                  onChange={(e) => {
                    setQuestion({ ...question, question: e.target.value })
                  }}
                />
              </div>
              {/* <div className='question-details-div'>
                <input type="radio" id='active' name='status' />
                <label htmlFor='active'>active</label>

                <input type="radio" id='inactive' name='status' />
                <label htmlFor='inactive'>in-active</label>
                
              </div> */}
              {/* <div className='answers'>
                <div>
                  <input className='enter-answer-textfield'
                    type="text"
                    placeholder='enter answer...'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                  />
                  <button className='add-answer-button'
                    onClick={() => addItem()}>
                    Add
                  </button>
                </div>
                <div className='answers-list'>
                  <ul>
                    {items.map(item => {
                      return (
                        <li key={item.id}>
                          <input type="radio" name='correct-answer' />
                          {item.value}
                          <button className='delete-button' onClick={() => { deleteItem(item.id) }}>X</button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div> */}
              <input type='submit' />

            </div>
          </div>
        </form>
      </div>
    </>
  );
};
