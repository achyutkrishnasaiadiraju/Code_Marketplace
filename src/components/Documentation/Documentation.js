import React from 'react';
import './Documentation.css';

const Documentation = () => {
    // Sample documentation content, replace with real data
    const content = `
        # Code Documentation
        This is a sample documentation for the code snippet.
        ## Installation
        Use npm to install the dependencies.
        \`\`\`
        npm install
        \`\`\`
        ## Usage
        Use the code as follows:
        \`\`\`javascript
        console.log("Hello, World!");
        \`\`\`
    `;

    return (
        <div className="documentation" dangerouslySetInnerHTML={{ __html: content }}></div>
    );
};

export default Documentation;
