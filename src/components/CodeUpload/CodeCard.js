import React from 'react';
import { Link } from 'react-router-dom';
import './CodeCard.css';

const CodeCard = ({ code }) => {
    return (
        <div className="code-card">
            <h3>{code.title}</h3>
            <p>{code.description}</p>
            <Link to={`/code/${code.id}`}>View Details</Link>
        </div>
    );
};

export default CodeCard;
