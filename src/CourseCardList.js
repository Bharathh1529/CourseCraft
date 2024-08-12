// CourseCardList.js
import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import './CourseCardList.css';
import Header from './Header';
import Footer from './Footer';

const CourseCardList = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('http://localhost:8080/courses');
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter(course => {
        const title = course.title || '';
        const description = course.description || '';
        const instructor = course.instructor || '';

        return title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               description.toLowerCase().includes(searchTerm.toLowerCase()) ||
               instructor.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <Header />
            <div className='course-card-list-container'>
                <div className='search-bar'>
                    <input
                        type='text'
                        placeholder='Search for courses...'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className='course-card-list'>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
                            <CourseCard
                                key={index}
                                title={course.title || ''}
                                description={course.description || ''}
                                instructor={course.instructor || ''}
                                image={course.image || ''}
                            />
                        ))
                    ) : (
                        <p>No courses found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseCardList;
