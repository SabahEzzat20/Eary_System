import React, { useState } from 'react';
import '../sass/Requests.css';
import createImg from '../assets/images/add-user.png';
import { Link } from 'react-router-dom';
export const Requests = () => {
    const Data = [
        {
            id: 1,
            email: "sabah@gmail.com",
            username: 'sabah'
        },
        {
            id: 2,
            email: "sabah@gmail.com",
            username: 'Eman'
        },
        {
            id: 3,
            email: "sabah@gmail.com",
            username: 'shrook'
        }
        ,
        {
            id: 4,
            email: "sabah@gmail.com",
            username: 'gamilla'
        }
    ];
    const [emails, setEmails] = useState(Data);

    const handleDelete = (id) => {
        const updatedQuestions = emails.filter((email) => email.id !== id);
        setEmails(updatedQuestions);
    };

    return (
        <div className="table-container">
            <div className='create-account-div'>
                <Link to={"/login"}>
                    <img src={createImg} alt="createAccount" />
                </Link>
            </div>
            <table>
            <thead>
                <tr>
                <th>e-mail</th>
                <th>user name</th>
                <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {emails.map((email) => (
                <tr key={email.id}>
                    <td>{email.email}</td>
                    <td>{email.username}</td>
                    <td>
                    <button>Activate</button>
                    <span> / </span>
                    <button> de-activate</button>
                    <span> / </span>
                    <button onClick={() => handleDelete(email.id)}> delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
    };

