import React from 'react';
import CourseCardList from './CourseCardList'; // Import the CourseCardList component

const EngineeringPage = () => {
    return (
        <div>
            <h1>Engineering Courses</h1>
            <CourseCardList stream="Engineering" />
        </div>
    );
};

export default EngineeringPage;
