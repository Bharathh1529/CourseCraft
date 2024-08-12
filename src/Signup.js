import React, { useState } from 'react';
import './Signup.css';
import Header from './Header';
import pic from './Photos/Signin.jpg';
import Footer from './Footer';
import { useNavigate,Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const saveUsername = (e) => {
        setUsername(e.target.value);
    };

    const saveEmail = (e) => {
        setEmail(e.target.value);
    };

    const savePassword = (e) => {
        setPassword(e.target.value);
    };

    const saveConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const saveDetails = async (e) => {
        e.preventDefault();
        console.log('Username:', username);
console.log('Email:', email);
console.log('Password:', password);
console.log('Confirm Password:', confirmPassword);
        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        console.log(username, email, password);

        try {
            const response = await fetch("http://localhost:8080/CourseCraft/signup", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
            })
            if (response.ok) {
                navigate("/");
            }
            else
            {
                const error = await response.text();
                setError(error);
            }
        }
        catch(error)
        {
            console.log(error);
        }
    };

return (
    <div>
        <Header />
        <div className='signup-page'>
            <div className='signup-visual'>
                <img src={pic} alt='Study visual' />
            </div>
            <div className='signup-form'>
                <p>Sign Up</p>
                <form className='form' onSubmit={saveDetails}>
                    <label>
                        Username <span>*</span>
                    </label>
                    <input
                        type='text'
                        value={username}
                        onChange={saveUsername}
                        placeholder='Enter your username'
                    />
                    <label>
                        Email <span>*</span>
                    </label>
                    <input
                        type='email'
                        value={email}
                        onChange={saveEmail}
                        placeholder='Enter your email'
                    />
                    <label>
                        Password <span>*</span>
                    </label>
                    <input
                        type='password'
                        value={password}
                        onChange={savePassword}
                        placeholder='Enter your password'
                    />
                    <label>
                        Confirm Password <span>*</span>
                    </label>
                    <input
                        type='password'
                        value={confirmPassword}
                        onChange={saveConfirmPassword}
                        placeholder='Confirm your password'
                    />
                    {error && <p className='error-message'>{error}</p>}
                    <button type='submit' className='Signupbutton'>Sign Up</button>
                    <div className='form-footer'>
                        <Link to='/'>Already have an account? Log in</Link>

                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
);
}

export default Signup;
