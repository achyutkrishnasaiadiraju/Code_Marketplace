import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [followingContents, setFollowingContents] = useState([]);

  const [filter, setFilter] = useState('');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    setFollowingContents([
  {
    "id": 1,
    "category": "topics",
    "title": "React State Management",
    "description": "Discussion on various state management solutions in React, including Context API, Redux, MobX, and Zustand. Share your experiences and best practices!"
  },
  {
    "id": 2,
    "category": "codes",
    "title": "JWT Authentication in Node.js",
    "description": "A comprehensive guide and code snippet for implementing JWT authentication in a Node.js application. This example includes user registration, login, and token verification."
  },
  {
    "id": 3,
    "category": "discussions",
    "title": "Best Practices for Code Reviews",
    "description": "Join the discussion on the best practices for conducting code reviews. Share your strategies for providing constructive feedback and ensuring high code quality."
  },
  {
    "id": 5,
    "category": "topics",
    "title": "Microservices Architecture",
    "description": "Explore the principles of microservices architecture. Discuss the benefits and challenges, and share your experiences with different microservices frameworks and tools."
  },
  {
    "id": 6,
    "category": "codes",
    "title": "GraphQL API with Apollo Server",
    "description": "Learn how to create a GraphQL API using Apollo Server. This guide covers schema definition, resolvers, and integrating with a database."
  },
  {
    "id": 7,
    "category": "codes",
    "title": "Dockerizing a Node.js Application",
    "description": "Step-by-step instructions for containerizing a Node.js application using Docker. Includes Dockerfile creation, docker-compose setup, and running containers."
  },
  {
    "id": 8,
    "category": "discussions",
    "title": "Agile vs. Waterfall: Which is Better?",
    "description": "Debate the pros and cons of Agile and Waterfall methodologies. Share your experiences and opinions on which approach works best in different scenarios."
  }
]
);
  }, []);
  return (
    <div className="mx-auto mt-4 min-h-96 rounded-lg p-4 shadow-lg lg:max-w-[64rem]">
      <div className="flex w-full justify-start gap-2">
          <select
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
            className="w-1/8 rounded border-2 border-primary px-6 py-2 font-medium"
          >
            <option className="bg-white text-black" value="">-- Please Select --</option>
            <option className="bg-white text-black" value="topic">Topic</option>
            <option className="bg-white text-black" value="discussion">Discussion</option>
            <option className="bg-white text-black" value="code">Code</option>
          </select>
      </div>
      <div className="flex w-full justify-end gap-2">
        <Link
          to={"/codes"}
          className="w-1/6 rounded border-2 border-primary px-4 py-2 font-medium hover:bg-primary hover:text-white"
        >
          Add Code
        </Link>
        <Link
          to={"/discussions/add"}
          className="w-1/6 rounded border-2 border-primary px-4 py-2 font-medium hover:bg-primary hover:text-white"
        >
          Add Discussion
        </Link>
      </div>

      <div className="my-4 max-h-[64vh] overflow-y-auto">
        {followingContents.map((content) => (
          <div
            className="flex flex-wrap justify-center rounded-lg"
            key={content.id}
          >
            <div className="w-full p-4">
              <div className="flex flex-row justify-between gap-4 overflow-hidden rounded-lg bg-white shadow-md">
                <div className="flex flex-col justify-between px-4 py-2">
                  <Link to={`/${content.category}/${content.id}`}>
                    <h5 className="text-xl font-bold">{content.title}</h5>
                  </Link>
                  <p className="text-justify text-gray-700">
                    {content.description}
                  </p>
                </div>
                {/* <div className="px-4 py-2">
                  <button className="rounded-lg px-4 py-2 text-lg font-medium text-secondary hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-offset-2">
                    <span className="">Follow</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
