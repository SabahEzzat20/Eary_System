import React from 'react';
import "../sass/Header.css";
import earImage from "../assets/images/ear (1).png";
import profileImage from "../assets/images/account.png";
import logouticon from "../assets/images/exit.png";
import { Link } from 'react-router-dom';
import { removeAuthenticatedUser , getAuthenticatedUser} from '../Helper/Storage';
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const auth = getAuthenticatedUser();

    const navigate = useNavigate();

    const Logout = () => {
        removeAuthenticatedUser();
        navigate("/login");
    }

    return (
        <header className="mainHeader">
            <div className="header-title">
                <p>
                    <img src={earImage} alt="ears logo" />
                    | Eary System
                </p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={''}>Home</Link>
                    </li>
                    {
                        auth && auth.role === 1 && (
                            <>
                                <li>
                                    <Link to={'/questions'}>questions</Link>
                                </li>
                                <li>
                                    <Link to={'/newQuestion'}>new question</Link>
                                </li>
                                <li>
                                    <Link to={'/requests'}>users requests</Link>
                                </li>
                            </>
                        )
                    }
                        

                    {
                        auth && auth.role === 0 && (
                            <>
                                <li>
                                    <Link to={'/exam'}>take online exam</Link>
                                </li>
                                <li>
                                    <Link to={'/history'}>exams history</Link>
                                </li>
                            </>
                        )
                    }
                    <li>
                        <Link to={'/updateProfile'}>
                            <div className='profile-div'>
                                <img src={profileImage} alt="profileImage" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <img src={logouticon} onClick={Logout} alt="logout" />
                    </li>
                </ul>
            </nav>

        </header>
    );
};