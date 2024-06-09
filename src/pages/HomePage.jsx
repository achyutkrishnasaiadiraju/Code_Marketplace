import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [followingContents, setFollowingContents] = useState([]);

  useEffect(() => {
    setFollowingContents([
      {
        id: 1,
        category: "topics",
        title: "Topic 1",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
      {
        id: 2,
        category: "codes",
        title: "Code 1",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
      {
        id: 3,
        category: "topics",
        title: "Topic 2",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
      {
        id: 4,
        category: "discussions",
        title: "Discussion 1",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
      {
        id: 5,
        category: "topics",
        title: "Topic 3",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
      {
        id: 6,
        category: "codes",
        title: "Code 2",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
      {
        id: 7,
        category: "codes",
        title: "Code 3",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
      {
        id: 8,
        category: "discussions",
        title: "Discussion 2",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus esse non tenetur fugiat, voluptatibus voluptas nisi. Autem, debitis doloribus!",
      },
    ]);
  }, []);
  return (
    <div className="mx-auto mt-4 min-h-96 rounded-lg p-4 shadow-lg lg:max-w-[64rem]">
      <div className="flex w-full justify-end gap-2">
        <Link
          to={"/codes"}
          className="w-1/6 rounded border-2 border-primary px-4 py-2 font-medium hover:bg-primary hover:text-white"
        >
          Add Code
        </Link>
        <Link
          to={"/discussions"}
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
