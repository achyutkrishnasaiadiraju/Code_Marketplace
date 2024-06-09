import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePeople } from "react-icons/md";
import _ from "lodash";

const ProfileFollowingTopicPage = () => {
  const [followingTopics, setFollowingTopics] = useState([
    {
      id: 1,
      name: "Machine Learning",
    },
    {
      id: 2,
      name: "Cyber Security",
    },
    {
      id: 3,
      name: "Software Development",
    },
  ]);
  const [query, setQuery] = useState("");
  const [filteredFollowingTopic, setFilteredFollowingTopics] =
    useState(followingTopics);

  const isMyProfile = true;

  useEffect(() => {
    console.log(followingTopics);
    // Add logic to Fetch Followers
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const results = followingTopics.filter((followingTopic) =>
      followingTopic.name.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredFollowingTopics(results);
  };

  const debouncedHandleSearch = useCallback(_.debounce(handleSearch, 500), []);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    debouncedHandleSearch(value);
  };

  return (
    <>
      <form
        className="m-4 mx-auto flex max-w-sm items-center"
        onChange={handleChange}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <MdOutlinePeople size={20} />
          </div>
          <input
            type="text"
            id="search"
            value={query}
            className="block w-full rounded-lg border border-border bg-gray-50 p-2.5 ps-10 text-sm font-medium text-secondary focus:border-primary-dark focus:ring-primary"
            placeholder="Search Following Topics"
            onChange={handleChange}
            required
          />
        </div>
        {/* <button
					type='submit'
					className='p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary'
				>
					<IoSearch />
					<span className='sr-only'>Search</span>
				</button> */}
      </form>
      {filteredFollowingTopic.length ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
            <tbody>
              {filteredFollowingTopic.map((followingTopic) => (
                <tr
                  className="border-b bg-white hover:bg-gray-50"
                  key={followingTopic.id}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 hover:text-primary"
                  >
                    <Link to={`/topics/${followingTopic.id}`}>
                      {`${followingTopic.name}`}
                    </Link>
                  </th>
                  {isMyProfile && (
                    <td className="px-6 py-4">
                      <Link
                        to={"#"}
                        className="font-medium text-primary hover:underline"
                      >
                        Unsubscribe
                      </Link>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center align-middle">
          <div className="rounded-lg bg-white p-8 text-center shadow-lg">
            <h1 className="mb-4 text-2xl font-bold">
              No Following Topics Found
            </h1>
            <p className="mb-4 text-gray-700">
              {followingTopics.length === 0
                ? `It looks like you are not followingTopic anyone yet. Start engaging with people to have some followingTopics.`
                : "No results found"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileFollowingTopicPage;
