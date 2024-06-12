import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePeople } from "react-icons/md";
import _ from "lodash";

const ProfileFollowingPage = () => {
  const [followings, setFollowings] = useState([
      {
        id: 3,
        name: "Kumar Choudhary Nishant",
        username: "NishantKumarChoudhary",
      },
      {
        id: 7,
        name: "Harika Vemulapalli",
        username: "harikavemulapalli",
      },
      {
        id: 8,
        name: "Kiran Nanduri",
        username: "kirannanduri",
      },
      {
        id: 6,
        name: "Anand Sai Adiraju",
        username: "anandsaiadiraju",
      },
      {
        id: 2,
        name: "Tarun Viat",
        username: "tarunvait",
      },
      {
        id: 4,
        name: "Nethi Rajesh",
        username: "rajeshnethi",
      },
      {
        id: 9,
        name: "Viswanadham, Bruhathi",
        username: "bruhathiviswanadham",
      },
      {
        id: 10,
        name: "Sneha Reddy",
        username: "snehareddy",
      },
      {
        id: 11,
        name: "Rohit Kumar",
        username: "rohitkumar",
      },
      {
        id: 12,
        name: "Divya Patel",
        username: "divyapatel",
      },
      {
        id: 13,
        name: "Rakesh Singh",
        username: "rakeshsingh",
      },
      {
        id: 14,
        name: "Priya Sharma",
        username: "priyasharma",
      },
      {
        id: 15,
        name: "Manish Gupta",
        username: "manishgupta",
      },      
  ]);
  const [query, setQuery] = useState("");
  const [filteredFollowings, setFilteredFollowings] = useState(followings);

  const isMyProfile = true;

  useEffect(() => {
    console.log(followings);
    // Add logic to Fetch Followers
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const results = followings.filter(
      (following) =>
        following.name.toLowerCase().includes(lowercasedQuery) ||
        following.username.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredFollowings(results);
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
            placeholder="Search Following Name / Username"
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
      {filteredFollowings.length ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
            <tbody>
              {filteredFollowings.map((following) => (
                <tr
                  className="border-b bg-white hover:bg-gray-50"
                  key={following.id}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 hover:text-primary"
                  >
                    <Link to={"#"}>
                      {`${following.name} (${following.username})`}
                    </Link>
                  </th>
                  {isMyProfile && (
                    <td className="px-6 py-4">
                      <Link
                        to={"#"}
                        className="font-medium text-primary hover:underline"
                      >
                        Unfollow
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
              Following Person Not Found
            </h1>
            <p className="mb-4 text-gray-700">
              {followings.length === 0
                ? `It looks like you are not following anyone yet. Start engaging with people to have some followings.`
                : "No results found"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileFollowingPage;
