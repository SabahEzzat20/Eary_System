import React, { useState } from 'react';
import '../sass/Modal.css';
import { Link } from 'react-router-dom';

export const Modal = ({ onClose }) => {
const [inputValue, setInputValue] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [movement, setMovement] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
        setErrorMessage('Please enter a name for your exam.');
        setMovement(false);
    } else {
        setMovement(true);
    }
};

const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorMessage('');
};

return (
    <div className='modal-overlay'>
    <div className='modal-message'>
        <button onClick={onClose}>X</button>
        <form >
        <label htmlFor='exam-name'>Name your exam </label>
        <input
            type='text'
            id='exam-name'
            value={inputValue}
            onChange={handleInputChange}
        />
        {/* {errorMessage && <p className='error-message'>{errorMessage}</p>} */}
                <div className='submit-div'>
                    <Link to={'/exam'}>
                            <input type='submit' className='submit-button' value={"next"} />
                        </Link>
        </div>
        </form>
    </div>
    </div>
);
};