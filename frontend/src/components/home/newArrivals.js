import React from "react";
import { image } from "../../img";

const NewArrivals = () => {
  return (
    <div className="container mx-auto mt-10 mb-10 px-10 md:px-0">
      <h1 className="title-font text-3xl font-bold text-black-900 mb-5 text-center">
        New Arrivals
      </h1>
      <h5 className="text-center mb-3 font-medium text-red-400 hover:text-red-600 hover:underline cursor-pointer">
        View All <i className="fa-solid fa-arrow-right"></i>{" "}
      </h5>
      <div className=" flex flex-wrap lg:flex-nowrap justify-center md:justify-around lg:justify-between items-center border-2 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg">
        <div className="card mb-5 lg:mb-0 hover:scale-105 text-center cursor-pointer">
          <img
            className="w-48 h-40 border-2 border-gray-300 rounded-xl"
            src={image}
            alt=""
          />
          <p className="text-black font-medium mt-2">Pineapple Cake</p>
          <p className="text-red-600 text-[10px]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
          </p>
          <p className="font-semibold text-gray-500 text-sm">1 kg</p>
          <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 mt-2">
            Add to Cart
          </button>
        </div>

        <div className="card mb-5 lg:mb-0 hover:scale-105 text-center cursor-pointer">
          <img
            className="w-48 h-40 border-2 border-gray-300 rounded-xl"
            src={image}
            alt=""
          />
          <p className="text-black font-medium mt-2">Pineapple Cake</p>
          <p className="text-red-600 text-[10px]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
          </p>
          <p className="font-semibold text-gray-500 text-sm">1 kg</p>
          <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 mt-2">
            Add to Cart
          </button>
        </div>

        <div className="card mb-5 lg:mb-0 hover:scale-105 text-center cursor-pointer">
          <img
            className="w-48 h-40 border-2 border-gray-300 rounded-xl"
            src={image}
            alt=""
          />
          <p className="text-black font-medium mt-2">Pineapple Cake</p>
          <p className="text-red-600 text-[10px]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
          </p>
          <p className="font-semibold text-gray-500 text-sm">1 kg</p>
          <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 mt-2">
            Add to Cart
          </button>
        </div>

        <div className="card mb-5 lg:mb-0 hover:scale-105 text-center cursor-pointer">
          <img
            className="w-48 h-40 border-2 border-gray-300 rounded-xl"
            src={image}
            alt=""
          />
          <p className="text-black font-medium mt-2">Pineapple Cake</p>
          <p className="text-red-600 text-[10px]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
          </p>
          <p className="font-semibold text-gray-500 text-sm">1 kg</p>
          <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 mt-2">
            Add to Cart
          </button>
        </div>

        <div className="card mb-5 lg:mb-0 hover:scale-105 text-center cursor-pointer">
          <img
            className="w-48 h-40 border-2 border-gray-300 rounded-xl"
            src={image}
            alt=""
          />
          <p className="text-black font-medium mt-2">Pineapple Cake</p>
          <p className="text-red-600 text-[10px]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
          </p>
          <p className="font-semibold text-gray-500 text-sm">1 kg</p>
          <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 mt-2">
            Add to Cart
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default NewArrivals;
