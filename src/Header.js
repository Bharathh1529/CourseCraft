// Header.js
import React, { useState, useContext, useEffect } from 'react';
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './Logoo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isProfessionDropdownOpen, setProfessionDropdownOpen] = useState(false);
    const [isAdminModalOpen, setAdminModalOpen] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleUserDropdownToggle = () => {
        setUserDropdownOpen(!isUserDropdownOpen);
    };

    const handleProfessionDropdownToggle = () => {
        setProfessionDropdownOpen(!isProfessionDropdownOpen);
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('authToken');
        navigate('/');
    };

    const handleAdminLoginOpen = () => {
        setAdminModalOpen(true);
        navigate('/UserProfile');
    };

    const getUserName = (email) => {
        return email ? email.split('@')[0] : '';
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.navbar-icon') && !event.target.closest('.user-dropdown') && !event.target.closest('.profession-dropdown')) {
                setUserDropdownOpen(false);
                setProfessionDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className='logo_left'>
                <Link to="/"><img src={logo} alt="logo" className="navbar-logo" /></Link>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li
                        className="dropdown-container"
                        onMouseEnter={handleProfessionDropdownToggle}
                        onMouseLeave={handleProfessionDropdownToggle}
                    >
                        <Link to="/Profession">Profession</Link>
                        {isProfessionDropdownOpen && (
                            <div className="profession-dropdown">
                                <a href="/courses/Engineering">Engineering</a>
                                <Link to="/Arts&ScienceCourses">Arts & Science</Link>
                                <a href="/courses/data-science">Agriculture</a>
                                <a href="/courses/data-science">Medical</a>
                            </div>
                        )}
                    </li>
                    <li><Link to="/About">About</Link></li>
                </ul>
                <div className="navbar-icon" onClick={handleUserDropdownToggle}>
                    <AccountCircleIcon />
                    {user && <span className="user-name">{getUserName(user.email)}</span>}
                    {isUserDropdownOpen && user && (
                        <div className="user-dropdown">
                            <button onClick={handleAdminLoginOpen}>profile</button>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
