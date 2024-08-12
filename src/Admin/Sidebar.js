// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setActiveSection }) => {
    return (
        <div className="sidebar">
            <Link to="/AdminDashboard" onClick={() => setActiveSection('dashboard')}>Dashboard</Link>
            <Link to="/AddCourse" onClick={() => setActiveSection('add-courses')}>Add Courses</Link>
            <Link to="#" onClick={() => setActiveSection('add-streams')}>Add Streams</Link>
            <Link to="/AddQuiz" onClick={() => setActiveSection('add-courses')}>Add Quizes</Link>
            <Link to="#" onClick={() => setActiveSection('payment-bills')}>Payment and Bills</Link>
            <Link to="/" onClick={() => setActiveSection('logout')}>Logout</Link>
        </div>
    );
};

export default Sidebar;
