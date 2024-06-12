import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DiscussionDetailsPage = () => {
  const { id } = useParams();
  const [codeDetails, setCodeDetails] = useState({});
  const user = {
    id: "Achuth Praneeth",
  };

  useEffect(() => {
    setCodeDetails({
      id: 1,
      title: "Optimizing Machine Learning Models",
      author: "Achyut Krishna",
      description:
        "In this discussion, we explore various techniques and best practices for optimizing machine learning models. Topics include hyperparameter tuning, model selection, feature engineering, and using ensemble methods to improve model performance.",
      comments: [
        {
          id: 1,
          author: "Achyut Krishna Sai Adiraju",
          content: "Great insights on hyperparameter tuning! I found the grid search vs. random search comparison very helpful.",
        },
        {
          id: 2,
          author: "Achuth Praneeth",
          content:
            "Thanks for the detailed explanation on feature engineering. Can you provide more examples on how to handle categorical variables?",
        },
        {
          id: 3,
          author: "Harika Vemulapalli",
          content:
            "I'm glad you found the discussion useful, Anand. Shubham, I'll definitely add more examples on handling categorical variables soon!",
        },
        {
          id: 4,
          author: "Kiran Nanduri",
          content: "The section on ensemble methods was enlightening. Can you discuss more about stacking and blending?",
        },
      ],
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="mx-auto mb-8 mt-4 min-h-96 rounded-lg p-8 shadow-lg lg:max-w-[64rem]">
      <h1 className="my-4 text-center text-4xl font-medium">
        Discussion Topic
      </h1>
      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Title: </span>
        <span className="w-3/4 rounded-lg border-2 p-2 text-secondary shadow">
          {codeDetails.title}
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

      <form onSubmit={handleSubmit}>
        <div className="my-2 flex items-start justify-end">
          <span className="w-1/4 text-lg font-medium">Add Comment:</span>
          <textarea
            placeholder="Comment"
            className="w-3/4 rounded-lg border-2 border-secondary px-4 py-2"
            required
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="w-1/6 rounded border-2 border-primary px-4 py-2 font-medium hover:bg-primary hover:text-white"
          >
            Add Comment
          </button>
          {user.id === codeDetails.author && (
            <Link
              to={"#"}
              className="w-1/6 rounded border-2 border-secondary px-4 py-2 font-medium hover:bg-secondary hover:text-white"
            >
              Close Discussion
            </Link>
          )}
        </div>
      </form>

      <div className="my-2 shadow-lg">
        <span className="block text-lg font-medium">Comments: </span>
        {/* <div className="my-2 flex max-h-72 flex-col gap-2 overflow-scroll p-4  rounded">
          {codeDetails.comments &&
            codeDetails.comments.map((comment) => (
              <div
                className={`flex ${comment.author === codeDetails.author ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="w-3/4 rounded border-2 border-border px-4 py-2 shadow shadow-lg bg-gray-200"
                  key={comment.id}
                >
                  <h2 className="font-medium underline ">{comment.author}</h2>
                  <p className="text-justify ">{comment.content}</p>
                </div>
              </div>
            ))}
        </div> */}
        <div className="my-2 shadow-lg">
          <span className="block text-lg font-medium">Comments: </span>
          <div className="my-2 flex max-h-72 flex-col gap-2 overflow-scroll p-4  rounded">
            {codeDetails.comments &&
              codeDetails.comments.map((comment) => (
                <div
                  className={`flex ${comment.author === codeDetails.author ? "justify-end" : comment.author === "Achuth Praneeth" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="w-3/4 rounded border-2 border-border px-4 py-2 shadow shadow-lg bg-gray-200"
                    key={comment.id}
                  >
                    <h2 className="font-medium underline ">{comment.author}</h2>
                    <p className="text-justify ">{comment.content}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetailsPage;
