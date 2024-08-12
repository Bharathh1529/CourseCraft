import React from 'react';
import AddCourse from './AddCourse';
import Header from './Header';

const AddCoursePage = () => {
    const handleAddCourse = (newCourse) => {
        console.log('New Course Added:', newCourse);
        // Add logic to handle course addition, e.g., updating state or making API calls
    };

    return (
        <div>
            <Header />
            <div className='add-course-page-container'>
                <AddCourse onAddCourse={handleAddCourse} />
            </div>
        </div>
    );
};

export default AddCoursePage;
