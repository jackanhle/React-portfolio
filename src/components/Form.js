import React, { useState } from 'react';
// import './style.css';
import '../assets/styles/Form.css';
import { validateEmail } from '../utils/helpes';

function Form() {
 
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
  
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

   

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setComment(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
  
    e.preventDefault();

    
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
     
      return;
      
    }
    if (!comment) {
      setErrorMessage(
        `Message cant be blank`
      );
      return;
    }


    setUserName('');


    setEmail('');
   
  };

  return (
    <div>
      <p>For more information please contact me:</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
         <input
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="commet"
          placeholder="comment"
        />
      
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
