import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        age: '',
        picture: null // Handle binary image data
    });
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail') || '';

        if (userEmail) {
            const fetchProfileData = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/CourseCraft/profile?email=${userEmail}`);
                    if (response.ok) {
                        const data = await response.json();
                        setProfile({
                            ...data,
                            picture: data.picture ? `data:image/jpeg;base64,${data.picture}` : null
                        });
                    }
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            };

            fetchProfileData();
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile({
                ...profile,
                picture: reader.result.split(',')[1] // Only the base64 part
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/CourseCraft/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            });
            if (response.ok) {
                setEditMode(false);
            }
        } catch (error) {
            console.error('Error saving profile data:', error);
        }
    };

    return (
        <div className="user-profile-container">
            <div className="profile-header">
                <div className="profile-image">
                    <img src={profile.picture || 'default-profile.jpg'} alt="Profile" />
                    {editMode && <input type="file" onChange={handleImageUpload} />}
                </div>
                <div className="profile-details">
                    <h2>{profile.username}</h2>
                    <p>{profile.email}</p>
                    <button onClick={() => setEditMode(!editMode)}>
                        {editMode ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>
            </div>
            {editMode ? (
                <form className="profile-form" onSubmit={handleSubmit}>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleInputChange} />

                    <label>Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleInputChange} />

                    <label>Age</label>
                    <input type="number" name="age" value={profile.age} onChange={handleInputChange} />

                    <label>Profile Picture</label>
                    <input type="file" onChange={handleImageUpload} />

                    <button type="submit">Save</button>
                </form>
            ) : (
                <div className="profile-info">
                    <p><strong>Username:</strong> {profile.username}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
                    <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
                    <p><strong>Age:</strong> {profile.age}</p>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
