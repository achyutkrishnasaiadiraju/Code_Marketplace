import React, { useState } from 'react';
import './CodeUploadForm.css';

const CodeUploadForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        tags: [],
        description: '',
        author: 'DynamicUsername',
        version: '',
        language: '',
        dependencies: '',
        code: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRemoveTag = (index) => {
        const newTags = [...formData.tags];
        newTags.splice(index, 1);
        setFormData({ ...formData, tags: newTags });
    };

    const handleTagKeyValueChange = (index, key, value) => {
        const newTags = [...formData.tags];
        newTags[index] = { key, value };
        setFormData({ ...formData, tags: newTags });
    };

    const handleAddTag = () => {
        setFormData({ ...formData, tags: [...formData.tags, { key: '', value: '' }] });
    };

    const handleCodeChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, code: value });
    };

    const handleCodeFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            setFormData({ ...formData, code: e.target.result });
        };
        reader.readAsText(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Code data submitted:', formData);
        onClose();
    };

    return (
        <div className="code-upload-form-overlay">
            <div className="code-upload-form">
                <h2>Upload Code</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                    </label>
                    <label>
                        Author:
                        <input type="text" name="author" value={formData.author} readOnly />
                    </label>
                    <label>
                        Version:
                        <input type="text" name="version" value={formData.version} onChange={handleChange} required />
                    </label>
                    <label>
                        Language:
                        <input type="text" name="language" value={formData.language} onChange={handleChange} required />
                    </label>
                    <label>
                        Dependencies:
                        <input type="text" name="dependencies" value={formData.dependencies} onChange={handleChange} required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={formData.description} onChange={handleChange} required />
                    </label>
                    <label>
                        Tags:
                        <div className="tags-container">
                            {formData.tags.map((tag, index) => (
                                <div key={index} className="tag">
                                    <input
                                        type="text"
                                        value={tag.key}
                                        onChange={(e) => handleTagKeyValueChange(index, e.target.value, tag.value)}
                                        placeholder="Key"
                                    />
                                    <input
                                        type="text"
                                        value={tag.value}
                                        onChange={(e) => handleTagKeyValueChange(index, tag.key, e.target.value)}
                                        placeholder="Value"
                                    />
                                    <button type="button" onClick={() => handleRemoveTag(index)}>Remove</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddTag}>Add Tag</button>
                        </div>
                    </label>
                    <label>
                        Code:
                        <textarea
                            name="code"
                            value={formData.code}
                            onChange={handleCodeChange}
                            placeholder="Paste your code here"
                            rows="10"
                            required
                        />
                        <span>or</span>
                        <input type="file" onChange={handleCodeFileUpload} accept=".txt,.js,.py,.java,.cpp" />
                    </label>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default CodeUploadForm;
