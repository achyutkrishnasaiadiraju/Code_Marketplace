import React from 'react';
import CodeCard from './CodeCard';
import './CodeListings.css';

const CodeListings = () => {
    const codeSnippets = [
        // Sample code snippets, replace with real data
        { id: 1, title: "React Component", description: "A simple React component." },
        { id: 2, title: "Node.js API", description: "A basic Node.js API." }
    ];

    return (
        <div className="code-listings">
            {codeSnippets.map(code => (
                <CodeCard key={code.id} code={code} />
            ))}
        </div>
    );
};

export default CodeListings;
