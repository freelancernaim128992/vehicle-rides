import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import Header from '../Header/Header';

const LogIn = () => {
    // const [userInfo, setUserInfo] = useContext(UserContext);
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    });
    const handleBlur = (event) => {
        if(event.target.name === "email"){
            const email = event.target.value
            const newUserInfo = {...loginUser}
            newUserInfo.email = email;
            setLoginUser(newUserInfo)
        }
        if(event.target.name === "password"){
            const pass = event.target.value;
            const newUserInfo = {...loginUser}
            newUserInfo.password = pass;
            setLoginUser(newUserInfo)
        }
    }
    const handleSubmit = (event) => {
        if(loginUser.email && loginUser.password){
            firebase.auth().signInWithEmailAndPassword(loginUser.email, loginUser.password)
            .then((userCredential) => {
                
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
        event.preventDefault();
    }
    return (
        <>
        <Header></Header>
        <div className="container mt-5 pt-3">
            <form onSubmit={handleSubmit} className="p-3 mx-auto shadow" style={{width: '500px'}}>
                <h2>Log In</h2>
                <div className="mb-3">
                    <p>Email address</p>
                    <input onBlur={handleBlur} type="email" name="email" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <p>Password</p>
                    <input onBlur={handleBlur} type="password" name="password" className="form-control" required/>
                </div>
                <input type="checkbox" /> <span>Remember me</span>
                <div className="my-3">
                    <input type="submit" value="LogIn" className="btn btn-success w-100" />
                </div>
                <p className="text-center">Don't you have an account? <Link to="/registration">Create an account</Link></p>
            </form>
            <p className="text-center mt-4">OR</p>
            <div className="my-3 text-center">
                <button className="border-0 bg-white">Continue With Facebook</button> 
            </div>
            <div className="text-center">
                <button>Continue With Google</button>
            </div>

        </div>
        </>
    );
};

export default LogIn;