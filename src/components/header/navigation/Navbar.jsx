import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${showMenu ? 'bg-white text-black' : 'bg-[#181818]'}  border-b border-gray-800 relative`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src={`${showMenu ? 'public/images/pumalogo4.png' : 'public/images/puma logo white.png'}`}
                alt=""
              />
            </Link>
          </div>

          <button
            onClick={() => setShowMenu(true)}
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link
              to="/"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Home
            </Link>

            <Link
              to="/myaccount"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              My Account
            </Link>

            <Link
              to="/initiatreturn"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Initiate Return
            </Link>

            <Link
              to="/favorites"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Favorites
            </Link>

            <Link
              to="/support"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Support
            </Link>

            <div className="relative">
              <div className="absolute left-4 border-red-500 h-full flex items-center">
                <CiSearch color="#fff" size={25} />
              </div>
              <input
                className="border border-gray-500 px-[2.625rem] py-[8px] w-[13.125rem] text-white font-medium text-xs placeholder-gray-700 bg-transparent"
                placeholder="SEARCH PUMA.COM"
              />
            </div>
          </div>
        </nav>

        {showMenu ? (
          <nav className=" px-4 py-10 text-center bg-white md:hidden absolute w-full left-0 top-[64px] z-50 ">
            <button
             onClick={() => setShowMenu(false)}
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center mt-10 space-y-2">
              <Link
                to="/"
                className="py-2 font-medium text-black transition-all duration-200 focus:text-opacity-70"
              >
                Home
              </Link>

              <Link
                to="/myaccount"
                className="py-2 font-medium text-black transition-all duration-200 focus:text-opacity-70"
              >
                My Account
              </Link>

              <Link
                to="/initiatreturn"
                className="py-2 font-medium text-black transition-all duration-200 focus:text-opacity-70"
              >
                Initiate Return
              </Link>

              <Link
                to="/favorites"
                className="py-2 font-medium text-black transition-all duration-200 focus:text-opacity-70"
              >
                Favorites
              </Link>

              <Link
                to="/support"
                className="py-2 font-medium text-black transition-all duration-200 focus:text-opacity-70"
              >
                Support
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
