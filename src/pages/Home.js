import React, { useState } from 'react';
import CodeListings from '../components/CodeUpload/CodeListings';
import CodeUploadForm from '../components/CodeUpload/CodeUploadForm';
import './Home.css';

const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };
    return (
        <div className="home-page">
            <h1>Welcome to Code Marketplace</h1>
            <CodeListings />
            <button className="add-code-button" onClick={openForm}>+</button>
            {isFormOpen && <CodeUploadForm onClose={closeForm} />}
        </div>
    );
};

export default Home;
