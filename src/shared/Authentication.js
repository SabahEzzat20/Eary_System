import React, { useState } from "react";
import Signup from "./Signup";
import { Login } from "./Login";
import '../sass/Authentication.css';
import login from '../assets/images/12085707_20944201.jpg';
export const Authentication = () => {
  const [showSignup, setShowSignup] = useState(true);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };


  return (
    <div className="register-body">
      <div className="form-container">
        <div className="photo-container">
          <img src={login} alt="login" />
        </div>
        <div className="register-container">
          <div className="authentication-part">
            {showSignup ? (
              <Signup />
            ) : (
              <Login  />
            )}
          </div>
        
        <button className="switchbetweensignupandloginbutton" onClick={toggleSignup}>
          {
            showSignup ? 'have an account?' :  'or create new account'
          }
          </button>
          </div>
      </div>
    </div>
  );
};