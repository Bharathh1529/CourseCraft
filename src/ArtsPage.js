import React from 'react';
import CourseCardList from './CourseCardList'; // Import the CourseCardList component

const ArtsPage = () => {
    return (
        <div>
            <h1>Arts Courses</h1>
            <CourseCardList stream="Arts" />
        </div>
    );
};

export default ArtsPage;
