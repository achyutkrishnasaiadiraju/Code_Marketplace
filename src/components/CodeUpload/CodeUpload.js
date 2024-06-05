import React, { useState } from 'react';
import './CodeUpload.css';

const CodeUpload = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [codeFile, setCodeFile] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();
        // Implement code upload functionality here
    };

    return (
        <div className="code-upload">
            <h2>Upload Code</h2>
            <form onSubmit={handleUpload}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    type="file" 
                    accept=".js,.py,.java,.cpp" 
                    onChange={(e) => setCodeFile(e.target.files[0])} 
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default CodeUpload;
