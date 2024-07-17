import React, { useState } from 'react';
import '../sass/Login.css';
import registerimage from '../assets/images/user.png';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { setAuthenticatedUser } from '../Helper/Storage';
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email:'',
        password:'',
        loading:false,
        err:[],
    });
    const loginFunction = (e) => {
        e.preventDefault();
        setLogin({ ...login, loading: true, err: [] })
        axios
            .post("http://localhost:5000/auth/login", {
                email: login.email,
                password: login.password
            })
            .then((response) => {
                setLogin({ ...login, loading: false, err: [] });
                setAuthenticatedUser(response.data);
                navigate("/");
            })
            .catch((error) => {
                setLogin({ ...login, loading: false, err: error.response.data.errors })
            })
        // console.log(login);
    }
    return (
        <>
        <form className="signup-form" onSubmit={loginFunction} >
            <div className="register-image2">
                <img src={registerimage} alt="registerationimage" />
                </div>
                {login.err.length > 0 && (
                    <Alert variant="danger" className='alert-msg'>
                        {login.err.map((error, index) => (
                            <p key={index}>{error.msg}</p>
                        ))}
                    </Alert>
                    )}
            <div className="input email-div">
                <label htmlFor="email">E-mail</label>
                <input
                    value={login.email}
                    onChange={(e)=>setLogin({...login,email:e.target.value})}
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="input password-div">
                <label htmlFor="password">Password</label>
                <input
                    value={login.password}
                    onChange={(e)=>setLogin({...login,password:e.target.value})}
                    type="password"
                    id="password"
                    name="password"
                />
            </div>
            <input type="submit" className='login-submit-button' disabled={login.loading===true} value={"Login"}
            />
        </form>
        </>
    );
};