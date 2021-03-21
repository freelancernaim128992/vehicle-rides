import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const RegistrationPage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        success: false,
        isSigned: false
    })
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [userInfo, setUserInfo] = useContext(UserContext);
    let isInputValid;
    const handleBlur = (event) => {
        if(event.target.name === "email"){
            isInputValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if(event.target.name === "password"){
            isInputValid = event.target.value.length > 6;
        }
        if(event.target.name === "confirmPassword"){
            isInputValid = event.target.value;
        }
        if(isInputValid){
            const newUser = {...user};
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }
    }
    const handleSubmit = (event) => {
        const email = user.email;
        let matchingPassword;
        if(user.password === user.confirmPassword){
            matchingPassword =  user.password;
        }
        if(email && matchingPassword){
            console.log(email, matchingPassword)
            firebase.auth().createUserWithEmailAndPassword(email, matchingPassword)
            .then((userCredential) => {
                const newUser = {...user}
                newUser.error = '';
                newUser.success = true;
                setUser(newUser)
                setUserInfo(newUser);
                history.replace(from)
            })
            .catch((error) => {
                const newUser = {...user}
                newUser.error = error.message;
                setUser(newUser);
            });
        }
        event.preventDefault();
    }

    // Registration with google
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogle = () => {
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
        const newUser ={...user};
        newUser.name = res.additionalUserInfo.profile.name;
        newUser.email = res.user.email;
        setUserInfo(newUser)
        history.replace(from);
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
    }

    // Facebook Registration 
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebook = () => {
        firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then((res) => {
            const newUser ={...user};
            newUser.name = res.additionalUserInfo.profile.name;
            newUser.email = res.user.email;
            setUserInfo(newUser)
            history.replace(from);
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
            console.log(errorMessage)
        });
    }

    return (
        <>
        <Header></Header>
        <div className="container mt-5 pt-3">
            <form onSubmit={handleSubmit} className="p-3 mx-auto shadow" style={{width: '500px'}}>
                <h2>Create an account</h2>
                <div className="mb-3">
                    <p>Name</p>
                    <input type="text" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <p>Email address</p>
                    <input type="email" name="email" onBlur={handleBlur} className="form-control" required/>
                    <p className="text-danger">{user.error}</p>
                </div>
                <div className="mb-3">
                    <p>Password</p>
                    <input type="password" name="password" onBlur={handleBlur} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" onBlur={handleBlur} className="form-control" required/>
                </div>
                <div className="my-3">
                    <input type="submit" value="Create an account" className="btn btn-success w-100" />
                </div>
                <p className="text-center">Already have an account? <Link to="/login">Log In</Link></p>
            </form>
            {user.success && <p className="text-success text-center my-3">User Created Successfully</p>}
            <p className="text-center mt-4">OR</p>
            <div className="my-3 mx-auto bg-white border w-25">
                <button onClick={handleFacebook} className="border-0 bg-white text-center w-100 p-2">Continue With Facebook</button> 
            </div>
            <div className="text-center">
                <button onClick={handleGoogle}>Continue With Google</button>
            </div>

        </div>
        </>
    );
};

export default RegistrationPage;