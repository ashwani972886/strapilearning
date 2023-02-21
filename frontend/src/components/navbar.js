import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../img";
import Searchbar from "./searchbar";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-pink-100">
      <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <nav className="flex md:w-2/5 flex-wrap items-center text-base md:ml-auto mt-2">
          <Link><a href="/" className="mr-2 hover:text-gray-900">
            Home
          </a></Link>
          <Link><a href="/" className="mr-2 hover:text-gray-900">
            About Us
          </a></Link>
          <Link><a href="/" className="mr-2 hover:text-gray-900">
            Catgories
          </a></Link>
          <Link><a href="/" className="mr-2 hover:text-gray-900">
            Favourites
          </a></Link>
          <Link><a href="/" className="hover:text-gray-900">
            Contact Us
          </a></Link>
        </nav>
        <a
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center mb-4 md:mb-0"
        >
          <div className="flex-col justify-center">
            <img src={logo} className="w-24 h-16 ml-4" alt="Logo" />
            <span className="text-xl">Cakes N More</span>
          </div>
        </a>
        <div className="lg:w-2/5 ml-4 md:ml-0 mt-2">
          <div className="flex flex-wrap md:flex-nowrap md:justify-around relative">
            <div>
              <Searchbar />
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-cart-shopping text-4xl mt-4 md:mt-1 ml-8 md:ml-4 text-pink-400 md:mr-5"></i>
              <span className="absolute right-10 top-0 md:-top-3 md:right-36 bg-white rounded-full w-auto h-auto p-0.5 text-center md:mr-5">
                <span className="text-sm font-bold text-pink-500">09</span>
              </span>
            </div>
            <div className="flex">
              <Link to="/login">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 mt-5 md:mt-0"
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 mt-5 md:mt-0"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
