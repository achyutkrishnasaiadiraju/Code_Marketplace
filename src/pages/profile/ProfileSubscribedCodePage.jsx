import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePeople } from "react-icons/md";
import _ from "lodash";

const ProfileSubscribedCodePage = () => {
  const [subscribedCodes, setSubscribedCodes] = useState([
    {
      id: 1,
      name: "Node.js Express REST API",
    },
    {
      id: 2,
      name: "React Native Chat Application",
    },
    {
      id: 4,
      name: "RESTful API Implementation in Node.js",
    },
    {
      id: 5,
      name: "React Native Mobile App",
    },
    {
      id: 6,
      name: "Python Web Scraping Script",
    },
    {
      id: 7,
      name: "Java Spring Boot REST API",
    },
    {
      id: 8,
      name: "Angular Frontend Application",
    },
    {
      id: 9,
      name: "Dockerized Flask Application",
    },
    {
      id: 10,
      name: "GraphQL Server with Apollo",
    },
  ]);
  const [query, setQuery] = useState("");
  const [filteredSubscribedCodes, setFilteredSubscribedCodes] =
    useState(subscribedCodes);

  const isMyProfile = true;

  useEffect(() => {
    console.log(subscribedCodes);
    // Add logic to Fetch Followers
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const results = subscribedCodes.filter((subscribedCode) =>
      subscribedCode.name.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredSubscribedCodes(results);
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
            placeholder="Search Subscribed Codes"
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
      {filteredSubscribedCodes.length ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
            <tbody>
              {filteredSubscribedCodes.map((subscribedCode) => (
                <tr
                  className="border-b bg-white hover:bg-gray-50"
                  key={subscribedCode.id}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 hover:text-primary"
                  >
                    <Link to={`/codes/${subscribedCode.id}`}>
                      {`${subscribedCode.name}`}
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
              No Subscribed Code Found
            </h1>
            <p className="mb-4 text-gray-700">
              {subscribedCodes.length === 0
                ? `It looks like you have not subscribed any Code yet. Start Subscribing Codes.`
                : "No results found"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileSubscribedCodePage;
