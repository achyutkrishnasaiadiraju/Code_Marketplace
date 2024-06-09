import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrArticle } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

const TopicsPage = () => {
  const [query, setQuery] = useState("");
  const [topics, setTopics] = useState([
    {
      id: 1,
      name: "Topic Name",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 2,
      name: "Topic Name",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 3,
      name: "Topic Name",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 4,
      name: "Topic Name",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
    {
      id: 5,
      name: "Topic Name",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam ratione fugiat odit. Vitae, nulla ipsam natus officia doloribus repudiandae.",
    },
  ]);

  const handleSubmit = () => {
    console.log("Topic Submit");
  };

  return (
    <>
      <form
        className="m-4 mx-auto flex max-w-sm items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <GrArticle size={24} />
          </div>
          <input
            type="text"
            id="search"
            value={query}
            className="block w-full rounded-lg border border-border bg-gray-50 p-2.5 ps-10 text-sm font-medium text-secondary focus:border-primary-dark focus:ring-primary"
            placeholder="Search Topic List"
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
      <div className="max-h-96 overflow-y-scroll">
        {topics.map((topic) => (
          <div
            className="flex flex-wrap justify-center rounded-lg"
            key={topic.id}
          >
            <div className="w-full p-4">
              <div className="flex flex-row justify-between gap-4 overflow-hidden rounded-lg bg-white shadow-md">
                <div className="flex flex-col justify-between px-4 py-2">
                  <Link to={`${topic.id}`}>
                    <h5 className="text-xl font-bold">{topic.name}</h5>
                  </Link>
                  <p className="text-justify text-gray-700">{topic.content}</p>
                </div>
                <div className="px-4 py-2">
                  <button className="rounded-lg px-4 py-2 text-lg font-medium text-secondary hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-offset-2">
                    <span className="">Follow</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopicsPage;
