import React from 'react';
import './Profession.css';
import Header from './Header';
import Footer from './Footer';

const Profession = () => {
    return (
        <div>
            <Header />
            <div className="background-image-container">
                <div className="SystemEnrolled">
                    <h1>Get Enrolled in CourseCraft</h1>
                </div>
                <div className="enrollment-section">
                    <div className="enrollment-options">
                        <a href="/courses/engineering" className="enrollment-button">Engineering</a>
                        <a href="/Arts&ScienceCourses" className="enrollment-button">Arts and Science</a>
                        <a href="/courses/medical" className="enrollment-button">Medical</a>
                        <a href="/courses/agriculture" className="enrollment-button">Agriculture</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profession;
