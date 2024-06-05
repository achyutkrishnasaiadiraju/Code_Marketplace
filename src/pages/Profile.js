import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        bio: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [saveStatus, setSaveStatus] = useState('');

    useEffect(() => {
        // Fetch user data from an API or database
        // For this example, let's use mock data
        const mockData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            bio: 'Software Developer at XYZ Company',
        };
        setProfileData(mockData);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSave = () => {
        // Handle save functionality (e.g., send data to an API)
        console.log('Profile data saved:', profileData);

        // Show success message
        setSaveStatus('Profile data saved successfully.');
        
        // Exit edit mode
        setIsEditing(false);

        // Optionally, hide the message after a few seconds
        setTimeout(() => {
            setSaveStatus('');
        }, 3000); // 3 seconds
    };

    return (
        <div className="profile-page">
            {!isEditing ? (
                <div className="profile-view">
                    <h2>Profile</h2>
                    <p><strong>Name:</strong> {profileData.name}</p>
                    <p><strong>Email:</strong> {profileData.email}</p>
                    <p><strong>Bio:</strong> {profileData.bio}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            ) : (
                <div className="profile-edit">
                    <h2>Edit Profile</h2>
                    <form className="profile-form">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={profileData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Bio:
                            <textarea
                                name="bio"
                                value={profileData.bio}
                                onChange={handleChange}
                            />
                        </label>
                        <button type="button" onClick={handleSave}>
                            Save
                        </button>
                    </form>
                </div>
            )}
            {saveStatus && <p className="save-status">{saveStatus}</p>}
        </div>
    );
};

export default Profile;
