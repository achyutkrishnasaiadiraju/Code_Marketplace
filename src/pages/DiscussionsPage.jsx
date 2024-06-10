import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const DiscussionsPage = () => {
  const { id } = useParams();

  const [query, setQuery] = useState("");
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Discussions Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 2,
      title: "Discussions Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 3,
      title: "Discussions Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla iLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 4,
      title: "Discussions Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 5,
      title: "Discussions Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
  ]);

  const handleSubmit = () => {
    console.log("Topic Submit");
  };

  return (
    <div className="mx-auto mt-4 min-h-96 rounded-lg p-4 shadow-lg lg:max-w-[64rem]">
      <div className="flex items-center justify-between border-b border-gray-200 p-4 align-middle">
        <form
          className="m-4 mx-auto flex max-w-sm items-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <FaCode size={18} />
            </div>
            <input
              type="text"
              id="search"
              value={query}
              className="block w-full rounded-lg border border-border bg-gray-50 p-2.5 ps-10 text-sm font-medium text-secondary focus:border-primary-dark focus:ring-primary"
              placeholder="Search Discussions"
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="ms-2 rounded-lg border border-primary bg-primary p-2.5 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary"
          >
            <IoSearch />
            <span className="sr-only">Search</span>
          </button>
        </form>
        <Link to={"#"}>
          <button className="btn rounded bg-primary px-4 py-2 font-medium text-white">
            Follow
          </button>
        </Link>
      </div>
      <div className="flex max-h-[64vh] flex-col overflow-scroll px-4 py-2">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="m-1 flex items-start justify-between gap-2 rounded border-2 border-secondary p-4 text-gray-700 shadow-lg"
          >
            <div flex flex-col gap-2 px-4>
              <h2 className="text-md font-medium">
                <Link to={`/discussions/${discussion.id}`}>
                  {discussion.title}
                </Link>
              </h2>
              <p className="max-w-[720px] text-justify">
                {discussion.description.length > 500 ? (
                  <>
                    {discussion.description.slice(0, 500) + "..."}
                    {/* Redirect to Know More Page / Discussions Details Page */}
                    <Link to={"#"}>
                      <button className="ml-2 text-primary hover:underline hover:underline-offset-2">
                        Read More
                      </button>
                    </Link>
                  </>
                ) : (
                  discussion.description
                )}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to={`/discussions/${discussion.id}`}
                className="btn rounded border-2 border-primary px-2 py-1 font-medium text-secondary hover:bg-primary hover:text-white"
              >
                More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionsPage;
