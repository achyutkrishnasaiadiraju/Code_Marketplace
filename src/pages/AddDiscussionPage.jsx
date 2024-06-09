import React, { useState } from "react";
import { codingLanguages } from "../utils/constants";

const AddDiscussionPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="mx-auto mt-4 min-h-96 rounded-lg p-4 shadow-lg lg:max-w-[64rem]">
      <h1 className="my-4 text-center text-4xl font-medium">Add Discussion</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex items-start justify-end">
          <span className="w-1/4 px-4 text-lg font-medium">Title:</span>
          <input
            type="text"
            placeholder="Discussion Title"
            className="w-3/4 rounded-lg border-2 border-secondary px-4 py-2"
            required
          />
        </div>

        <div className="mb-4 flex items-start justify-end">
          <span className="w-1/4 px-4 text-lg font-medium">Description:</span>
          <textarea
            placeholder="Discussion Description"
            className="w-3/4 rounded-lg border-2 border-secondary px-4 py-2"
            required
          />
        </div>

        <div className="mb-4 flex items-start justify-end">
          <span className="w-1/4 px-4 text-lg font-medium">Language:</span>
          <select
            value={selectedLanguage}
            onChange={handleChange}
            className="w-3/4 rounded-lg border-2 border-secondary px-4 py-2"
            required
          >
            {Object.entries(codingLanguages).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 flex items-start justify-end">
          <div className="w-1/4 px-4">
            <span className="text-lg font-medium">Tags:</span>
            <p className="text-sm text-lightText">(Comma Separated)</p>
          </div>
          <input
            placeholder="Discussion Tags (Comma Separated)"
            className="w-3/4 rounded-lg border-2 border-secondary px-4 py-2"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-1/6 rounded border-2 border-primary px-4 py-2 font-medium hover:bg-primary hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDiscussionPage;
