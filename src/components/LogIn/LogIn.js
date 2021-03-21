import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import Header from '../Header/Header';
import { UserContext } from '../../App';
import googleIcon from '../../images/google-icon.png'
import facebookIcon from '../../images/facebook-icon.png'

const LogIn = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [loginUser, setLoginUser] = useState({
        name: '',
        email: '',
        password: '',
        isSigned: false
    });

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
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
                const newUser = {...loginUser}
                newUser.isSigned = true;
                setUserInfo(newUser)
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
        }
        event.preventDefault();
    }
    // Facebook Registration 
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebook = () => {
        firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then((res) => {
            const newUser ={...loginUser};
            newUser.name = res.additionalUserInfo.profile.name;
            newUser.email = res.user.email;
            newUser.isSigned = true;
            setUserInfo(newUser)
            history.replace(from);
        })
        .catch((error) => {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    // Registration with google
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogle = () => {
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
        const newUser ={...loginUser};
        newUser.name = res.additionalUserInfo.profile.name;
        newUser.email = res.user.email;
        newUser.isSigned = true;
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
            <div className="my-3 mx-auto bg-white border w-25 rounded overflow-hidden">
                <img style={{width: '30px',float: 'left',marginTop: '5px'}} src={facebookIcon} alt=""/><button style={{width: '240px', float:'right'}} onClick={handleFacebook} className="border-0 bg-white text-center p-2">Continue With Facebook</button> 
            </div>
            <div className="my-3 mx-auto bg-white border w-25 rounded overflow-hidden">
                <img style={{width: '30px',float: 'left',marginTop: '5px'}} src={googleIcon} alt=""/><button style={{width: '240px', float:'right'}} onClick={handleGoogle} className="border-0 bg-white text-center p-2">Continue With Google</button> 
            </div>

        </div>
        </>
    );
};

export default LogIn;