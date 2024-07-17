import React, { useState , useEffect } from "react";
import '../sass/UpdateProfile.css';
import axios from 'axios';
import {getAuthenticatedUser} from '../Helper/Storage';
import { useParams } from "react-router-dom";
export const UpdateProfile = () => {
    let { id } = useParams();
    const auth = getAuthenticatedUser();
    const [account, setAccount] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        reload: 0,
        err: '',
        loading:false
    });
        
    const updateAccount = (event) => {
        event.preventDefault();
        setAccount({ ...account, loading: true });
        const formData = new FormData();
        formData.append('name', account.name);
        formData.append('email', account.email);
        formData.append('phone', account.phone);
        formData.append('password', account.password);
        axios
            .put('http://localhost:3000/auth/update/' + id, {
                headers: {
                token: auth.token,
                }
        })
            .then((response) => {
                setAccount({
                    ...account,
                    loading: false,
                });
            })
            .catch((err) => {
                setAccount({
                    ...account,
                    loading: false,
                    err: 'something went wrong! please try again',
                });
            });
    };

    useEffect(() => {
        axios
            .get('' + id)
            .then((response) => {
                setAccount({
                    ...account,
                    name: response.request.name,
                    email: response.request.email,
                    phone: response.request.phone,
                    password: response.request.password,
            });
            })
            .catch((err) => {
                setAccount({
                    ...account,
                    loading: false,
                    err: 'something went wrong! please try again',
                });
            });
    }, [account.reload]);

    return (
        <div className="updateprofilecontainer">
            <div className="UserProfile">
                
                <h1>User profile</h1>
                
                <form onSubmit={updateAccount}>
                    <label>
                        user name:
                    </label>
                    <input type="text" name="UserName" value={account.name} onChange={(e)=>setAccount({...account,name:e.target.value})} />
                    
                    <label>
                        e-mail:
                    </label>
                    <input type="email" name="email" value={account.email} onChange={(e)=>setAccount({...account,email:e.target.value})} />
                    <label>
                        phone number:
                    </label>
                    <input type="tel" name="phoneNumber" value={account.phone} onChange={(e)=>setAccount({...account,phone:e.target.value})} />
                    
                    <label>
                        password:
                    </label>
                    <input type="password" name="password" value={account.password} onChange={(e)=>setAccount({...account,password:e.target.value})} />
                    <input type="submit">Update</input>
                </form>
        </div>
        </div>
    );
    }