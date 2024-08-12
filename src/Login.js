// Login.js
import React, { useState, useContext } from 'react';
import './Login.css';
import pic from './Photos/Login.jpg';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { UserContext } from './UserContext';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const saveEmail = (e) => {
        setEmail(e.target.value);
    };

    const savePassword = (e) => {
        setPassword(e.target.value);
    };

    const saveDetails = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/CourseCraft/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });

            if (response.ok) {
                const userData = { email }; // Assume you get user data from the response
                setUser(userData);
                localStorage.setItem('authToken', userData.token); // Store token if needed
                if (email === 'bharath@craft.in' && password === 'bhbh') {
                    navigate('/AdminDashboard');
                } else {
                    navigate("/Home");
                }
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
            }
        } catch (error) {
            console.log(error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <Header />
            <div className='login-page'>
                <div className='login-visual'>
                    <img src={pic} alt='Study visual' />
                </div>
                <div className='login-form'>
                    <p>Login</p>
                    <form className='form' onSubmit={saveDetails}>
                        <label>
                            UserName or Email
                            <span>*</span>
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={saveEmail}
                            placeholder='Enter your email'
                        />
                        <label>
                            Password
                            <span>*</span>
                        </label>
                        <input
                            type='password'
                            value={password}
                            onChange={savePassword}
                            placeholder='Enter your password'
                        />
                        {error && <p className='error-message'>{error}</p>}

                        <button type='submit' className='submitButton'>Submit</button>
                        <div className='form-footer'>
                            <a href='#forgot-password'>Forgot Password?</a>
                            <Link to='Signup'>Don't have an account? Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
