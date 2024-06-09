import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeContributePage = () => {
  const { id } = useParams();
  const [codeDetails, setCodeDetails] = useState({});
  const user = {
    id: "Achyut Krishna",
  };

  useEffect(() => {
    setCodeDetails({
      id: 1,
      title: "Code Title",
      author: "Achyut Krishna",
      version: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deleniti quam saepe vel iusto quasi illum quia necessitatibus, debitis dolorum.",
      code: `import React, { useEffect, useState, version } from "react";
import { useParams } from "react-router-dom";

const CodeContributePage = () => {
  const { id } = useParams();
  const [codeDetails, setCodeDetails] = useState({});`,
      language: "javascript",
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="mx-auto mb-8 mt-4 min-h-96 rounded-lg p-8 shadow-lg lg:max-w-[64rem]">
      <h1 className="my-4 text-center text-4xl font-medium">
        Code Contribution Details
      </h1>
      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Title: </span>
        <span className="w-3/4 rounded-lg border-2 p-2 text-secondary shadow">
          {codeDetails.title}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Version: </span>
        <span className="w-3/4 rounded-lg border-2 p-2 text-secondary shadow">
          {codeDetails.version}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Author: </span>
        <span className="w-3/4 rounded-lg border-2 p-2 text-secondary shadow">
          {codeDetails.author}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Description: </span>
        <span className="w-3/4 rounded-lg border-2 p-2 text-justify text-secondary shadow">
          {codeDetails.description}
        </span>
      </div>

      {user.id === codeDetails.author ? (
        <>
          <div className="my-2">
            <span className="block text-lg font-medium">Code: </span>
            <div className="my-2">
              {codeDetails.code && (
                <CopyBlock
                  text={codeDetails.code}
                  customStyle={{
                    maxHeight: "250px",
                    overflowY: "scroll",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "1rem",
                  }}
                  language={codeDetails.language}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLongLines={true}
                />
              )}
            </div>
          </div>
          <form>
            <div className="mb-4 flex items-start justify-end">
              <span className="w-1/4 text-lg font-medium">Comment:</span>
              <textarea
                placeholder="Comment"
                className="w-3/4 rounded-lg border-2 border-secondary px-4 py-2"
                required
              />
            </div>
            <div className="my-8 flex justify-between gap-4">
              <Link
                to={"#"}
                className="w-1/3 rounded border-2 border-secondary p-2 text-center shadow hover:bg-secondary hover:text-white"
              >
                Reject
              </Link>
              <button
                type="submit"
                className="w-1/3 rounded border-2 border-secondary p-2 text-center shadow hover:bg-secondary hover:text-white"
              >
                Ask for a Change
              </button>
              <Link
                to={"#"}
                className="w-1/3 rounded border-2 border-primary p-2 text-center shadow hover:bg-primary hover:text-white"
              >
                Approve
              </Link>
            </div>
          </form>
        </>
      ) : (
        <form>
          <div className="mb-4 flex items-start justify-end">
            <span className="w-1/4 text-lg font-medium">Code:</span>
            <textarea
              placeholder="Code"
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
      )}
    </div>
  );
};

export default CodeContributePage;
