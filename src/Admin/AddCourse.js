import React, { useState } from 'react';
import './AddCourse.css';
import Sidebar from './Sidebar';

const AddCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructor, setInstructor] = useState('');
    const [image, setImage] = useState('');
    const [stream, setStream] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title && description && instructor && image && stream) {
            const newCourse = { title, description, instructor, image, stream };
            try {
                const response = await fetch('http://localhost:8080/courses', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCourse),
                });

                if (response.ok) {
                    setTitle('');
                    setDescription('');
                    setInstructor('');
                    setImage('');
                    setStream('');
                    alert('Course added successfully!');
                } else {
                    console.error('Failed to add course:', response.statusText);
                }
            } catch (error) {
                console.error('Error adding course:', error);
            }
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="add-course-layout">
            <Sidebar />
            <div className="add-course-container">
                <h2>Add New Course</h2>
                <div className='Form'>
                    <form onSubmit={handleSubmit} className="add-course-form">
                        <div className="form-group">
                            <label htmlFor="title">Course Title:</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="instructor">Instructor:</label>
                            <input
                                type="text"
                                id="instructor"
                                value={instructor}
                                onChange={(e) => setInstructor(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL:</label>
                            <input
                                type="text"
                                id="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="stream">Stream:</label>
                            <select
                                id="stream"
                                value={stream}
                                onChange={(e) => setStream(e.target.value)}
                            >
                                <option value="">Select Stream</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Arts">Arts & Science</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-button">Add Course</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;
