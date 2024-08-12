// CourseCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ title, description, instructor, image }) => {
    const navigate = useNavigate();

    const handleViewCourse = () => {
        const routeMap = {
            'History of Art': '/HistoryOfArts',
            'Modern Physics': '/ModernPhysics',
            'Introduction to Literature': '/IntroductionToLiterature',
            'Biology for Beginners': '/BiologyForBeginners',
            'Chemistry Essentials': '/ChemistryEssentials',
            'Philosophy: An Overview': '/PhilosophyOverview',
            'Classical Music Appreciation': '/ClassicalMusicAppreciation',
            'Environmental Science': '/EnvironmentalScience',
            'Psychology Fundamentals': '/PsychologyFundamentals'
        };

        const route = routeMap[title];
        if (route) {
            navigate(route);
        }
    };

    return (
        <div className='course-card'>
            <img src={image} alt={title} className='course-image' />
            <div className='course-details'>
                <h2 className='course-title'>{title}</h2>
                <p className='course-description'>{description}</p>
                <p className='course-instructor'>Instructor: {instructor}</p>
                <button className='enroll-button' onClick={handleViewCourse}>
                    View Course
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
