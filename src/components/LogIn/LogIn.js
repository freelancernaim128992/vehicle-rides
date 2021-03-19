import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const LogIn = () => {
    
    return (
        <>
        <Header></Header>
        <div className="container mt-5 pt-3">
            <form className="p-3 mx-auto shadow" style={{width: '500px'}}>
                <h2>Log In</h2>
                <div className="mb-3">
                    <p>Email address</p>
                    <input type="email" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <p>Password</p>
                    <input type="password" className="form-control" required/>
                </div>
                <input type="checkbox" /> <span>Remember me</span>
                <div className="my-3">
                    <button className="btn btn-success w-100">LogIn</button>
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