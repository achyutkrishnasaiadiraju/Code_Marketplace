import React from 'react';
import CodeDetail from './CodeDetail';
import CodeReview from '../components/CodeReview/CodeReview';
import './CodeReview.css';

const CodeReviewPage = ({ match }) => {
    const { id } = match.params;

    return (
        <div className="code-review-page">
            <CodeDetail codeId={id} />
            <CodeReview codeId={id} />
        </div>
    );
};

export default CodeReviewPage;
