import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DiscussionDetailsPage = () => {
  const { id } = useParams();
  const [codeDetails, setCodeDetails] = useState({});
  const user = {
    id: "Achyut Krishna1",
  };

  useEffect(() => {
    setCodeDetails({
      id: 1,
      title: "Code Title",
      author: "Achyut Krishna",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deleniti quam saepe vel iusto quasi illum quia necessitatibus, debitis dolorum.",
      comments: [
        {
          id: 1,
          author: "Anand Adiraju",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          id: 2,
          author: "Shubham Sareliya",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente.",
        },
        {
          id: 3,
          author: "John Doe",
          content: "Lorem ipsum dolor sit amet",
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

      <div className="my-2">
        <span className="block text-lg font-medium">Comments: </span>
        <div className="my-2 flex flex-col gap-2">
          {codeDetails.comments &&
            codeDetails.comments.map((comment) => (
              <div
                className="rounded border-2 border-border px-4 py-2 shadow shadow-lg"
                key={comment.id}
              >
                <h2 className="font-medium">{comment.author}</h2>
                <p className="text-justify">{comment.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetailsPage;
