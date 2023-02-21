import React from "react";

const Searchbar = () => {
  return (
    <form className="mt-4 sm:mt-0 sm:mr-5">
      <div className="flex justify-start">
        
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="p-2.5 w-64 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:border-gray-500"
            placeholder="Search here..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-pink-700-700 rounded-r-lg border border-pink-400 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-200 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
