import React from 'react';
import { auth, provider } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }));
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://images.macrumors.com/t/QY0KdwbObUzURWrw5C2buSSZseY=/400x0/article-new/2020/10/newgmaillogo.0.jpg?lossy" 
                    alt=""
                />
                <Button onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
