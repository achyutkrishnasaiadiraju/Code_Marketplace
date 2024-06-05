import React from 'react';
import './CodeDetail.css';

const CodeDetail = () => {
    // Sample code data, replace with real data
    const code = {
        id: 1,
        title: "React Component",
        description: "A simple React component.",
        author: "Jane Doe",
        timestamp: "2024-06-05",
        version: "1.0",
        language: "JavaScript",
        dependencies: ["React"],
        comments: [
            { id: 1, author: "John Doe", text: "Great code!" },
            { id: 2, author: "Jane Doe", text: "Very useful." }
        ]
    };

    return (
        <div className="code-detail">
            <h2>{code.title}</h2>
            <p>{code.description}</p>
            <p><strong>Author:</strong> {code.author}</p>
            <p><strong>Timestamp:</strong> {code.timestamp}</p>
            <p><strong>Version:</strong> {code.version}</p>
            <p><strong>Language:</strong> {code.language}</p>
            <p><strong>Dependencies:</strong> {code.dependencies.join(', ')}</p>
            <h3>Comments</h3>
            <ul>
                {code.comments.map(comment => (
                    <li key={comment.id}>{comment.author}: {comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default CodeDetail;
