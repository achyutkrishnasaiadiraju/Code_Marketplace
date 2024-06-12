import React, { useState } from "react";
import logo from "../assets/bms-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNotifications } from "react-icons/md";
import { navbarMenus } from "../utils/constants";
 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
 
  const notifications = [
    {
      id: 1,
      title: "React State Management",
      category: "topics",
      type: "New Topic",
    },
    {
      id: 2,
      title: "Best Practices for Code Reviews",
      category: "discussions",
      type: "New Discussion",
    },
    {
      id: 3,
      title: "JWT Authentication in Node.js",
      category: "codes",
      type: "New Code Snippet",
    },
    {
      id: 4,
      title: "New Follower: Shubham Sareliya",
      category: "followers",
      type: "New Follower",
    },
    {
      id: 5,
      title: "GraphQL API with Apollo Server",
      category: "codes",
      type: "New Code Snippet",
    },
    {
      id: 6,
      title: "New Follower: Shubham Sareliya",
      category: "followers",
      type: "New Follower",
    },
  ];
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };
 
  return (
    <nav className="relative bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img className="h-6 w-auto sm:h-7" src={logo} alt="" />
              <span className="text-2xl font-bold">
                <span className="text-primary-dark">C</span>ode{" "}
                <span className="text-primary-dark">M</span>arketplace
              </span>
              {navbarMenus.map((navbarMenu) => (
                <Link
                  key={navbarMenu.href}
                  to={navbarMenu.href}
                  className={`mx-3 mt-2 transform rounded-md px-3 py-2 font-medium text-secondary transition-colors duration-300 hover:bg-gray-100 hover:text-primary lg:mt-0`}
                >
                  {navbarMenu.label}
                </Link>
              ))}
            </Link>
 
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-secondary hover:text-secondary focus:text-secondary focus:outline-none"
                aria-label="toggle menu"
              >
                {isOpen ? <IoMdClose /> : <FaBars />}
              </button>
            </div>
          </div>
 
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } absolute inset-x-0 z-20 w-full bg-white px-8 py-4 transition-all duration-300 ease-in-out md:px-24 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100`}
          >
            <div className="-mx-6 flex flex-col lg:mx-8 lg:flex-row lg:items-center">
              <div className="mx-10 hidden md:block">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <IoMdSearch />
                  </span>
 
                  <input
                    type="text"
                    className="w-full rounded-md border bg-background py-2 pl-10 pr-4 text-secondary focus:border-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
 
            <div className="relative mt-4 flex items-center lg:mt-0">
              <div className="relative">
                <button
                  className="mx-4 hidden transform text-secondary transition-colors duration-300 hover:text-secondary focus:text-secondary focus:outline-none lg:block"
                  aria-label="show notifications"
                  onClick={toggleNotificationDropdown}
                >
                  <MdOutlineNotifications size={24} />
                </button>
                {isNotificationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-96 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {notifications.map((notification) => (
                        <Link
                          key={notification.id}
                          to={`${notification.category === "followers" ? "/profile/followers" : `${notification.category}/${notification.id}`}`}
                          className="block px-4 py-2 text-justify text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span className="font-bold">{notification.type}</span>
                          {": "}
                          {notification.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
 
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <Link to={"/profile"}>
                  <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-gray-400">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="h-full w-full object-cover"
                      alt="avatar"
                    />
                  </div>
                </Link>
 
                <h3 className="mx-2 text-secondary lg:hidden">
                  Achyut Krishna Sai Adiraju
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
