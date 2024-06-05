import React, { useState } from 'react';
import './CodeReview.css';

const CodeReview = ({ codeId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        // Implement code review submission here
    };

    return (
        <div className="code-review">
            <h3>Review Code</h3>
            <form onSubmit={handleReviewSubmit}>
                <label>Rating:</label>
                <input 
                    type="number" 
                    min="1" 
                    max="5" 
                    value={rating} 
                    onChange={(e) => setRating(parseInt(e.target.value))} 
                />
                <label>Comment:</label>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CodeReview;
