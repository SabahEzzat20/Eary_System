import React, { useState } from 'react';
import '../sass/Signup.css';
import registerimage from '../assets/images/user.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { setAuthenticatedUser } from '../Helper/Storage';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        email:'',
        password:'',
        phone:'',
        username:'',
        loading:false,
        err:[],
    });
    const signupFunction = (e) => {
        e.preventDefault();
        setSignup({ ...signup, loading: true, err: [] })
        axios
            .post("http://localhost:5000/auth/register", {
                email: signup.email,
                password: signup.password,
                phone: signup.phone,
                name:signup.username
            })
            .then((response) => {
                setSignup({ ...signup, loading: false, err: [] });
                setAuthenticatedUser(response.data);
                navigate("/");
            })
            .catch((error) => {
                setSignup({ ...signup, loading: false, err: error.response.data.errors })
            })
        // console.log(signup);
    }
    return (
        <>
        <form className="signup-form" onSubmit={signupFunction}>
            <div className="register-image">
            <img src={registerimage} alt="registerationimage" />
                </div>
                {signup.err.length > 0 && (
                    <Alert variant="danger" className='alert-msg'>
                        {signup.err.map((error, index) => (
                            <p key={index}>{error.msg}</p>
                        ))}
                    </Alert>
                    )}
            <div className="input email-div">
                <label htmlFor="userName">User name</label>
                <input
                    value={signup.username}
                    onChange={(e)=>setSignup({...signup,username:e.target.value})}
                    type="text"
                    id="userName"
                    name="userName"
                    required
                />
            </div>
            <div className="input email-div">
                <label htmlFor="email">E-mail</label>
                <input
                    value={signup.email}
                    onChange={(e)=>setSignup({...signup,email:e.target.value})}
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="input email-div">
                <label htmlFor="phone">Phone Number</label>
                <input
                    value={signup.phone}
                    onChange={(e)=>setSignup({...signup,phone:e.target.value})}
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                />
            </div>
            <div className="input password-div">
                <label htmlFor="password">Password</label>
                <input
                    value={signup.password}
                    onChange={(e)=>setSignup({...signup,password:e.target.value})}
                    type="password"
                    id="password"
                    name="password"
                />
            </div>
            <input type="submit" value={"Sign up"} disabled={signup.loading===true} 
            />
        </form>
    
        </>
    );
};

export default Signup;