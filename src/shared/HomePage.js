import React from 'react';
import { getAuthenticatedUser} from '../Helper/Storage';
import '../sass/HomePage.css';
import ears from '../assets/images/24122337_bwink_ppl_10_single_12.jpg'
export const HomePage = () => {
    const auth = getAuthenticatedUser();
    return (
        <>
            <div className='admin-container'>
                <div className='circle-div'>
                    {
                        auth && auth.role === 1 && (
                            <>
                                <div className='admin-instructions'>
                                    <p>what can you do as an admin?</p>
                                    <div className='paragraphs-container'>
                                        
                                            <ul>
                                                <li>you can create new questions to be shown to users.</li>
                                                <li>you can show your questions you made before.</li>
                                                <li>you can accept and refuse users' sign up requests.</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    
                    {
                        auth && auth.role === 0 && (
                            <>
                                <div className='admin-instructions'>
                                    <p>Welcome to our Free Online Hearing Test....</p>
                                    <div className='paragraphs-container'>
                                        <div>
                                            <p>
                                                the online hearing test is a quick way to gauge
                                                how well you're hearing. In only some minutes, you can test
                                                your ability to distinguish certain words and numbers in
                                                a noisy environment. We recommend taking the hearing test
                                                in a quiet area without interruptions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                                )
                        }
                    
                </div>
                <div className='right-background'>
                    <img src={ears} alt="earsbackground" />
                </div>
            </div>
        </>
    );
};

