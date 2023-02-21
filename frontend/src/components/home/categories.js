import React from 'react';
import { birthday, anniversary, custom, newYear, occassion } from '../../img';

const Category = () => {
  return (
    <div className='container mx-auto mt-10 mb-10 px-10 md:px-0'>
        <h1 className='title-font text-3xl font-bold text-black-900 mb-5 text-center'>Categories</h1>
        <h5 className='text-center mb-3 font-medium text-red-400 hover:text-red-600 hover:underline cursor-pointer'>View All <i className="fa-solid fa-arrow-right"></i> </h5>
        <div className=" flex flex-wrap lg:flex-nowrap justify-center md:justify-around lg:justify-between items-center border-2 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg">
            <div className="card mb-5 lg:mb-0 text-center hover:scale-105 cursor-pointer">
                <img className='w-48 h-40 border-2 border-gray-300 rounded-xl' src={birthday} alt="" />
                <p className='text-black font-medium  mt-2'>Birthday Cakes</p>
            </div>
            <div className="card mb-5 lg:mb-0 text-center hover:scale-105 cursor-pointer">
                <img className='w-48 h-40 border-2 border-gray-300 rounded-xl' src={anniversary} alt="" />
                <p className='text-black font-medium  mt-2'>Anniversary Cakes</p>
            </div>
            <div className="card mb-5 lg:mb-0 text-center hover:scale-105 cursor-pointer">
                <img className='w-48 h-40 border-2 border-gray-300 rounded-xl' src={custom} alt="" />
                <p className='text-black font-medium  mt-2'>Custom Cakes</p>
            </div>
            <div className="card mb-5 lg:mb-0 text-center hover:scale-105 cursor-pointer">
                <img className='w-48 h-40 border-2 border-gray-300 rounded-xl' src={newYear} alt="" />
                <p className='text-black font-medium  mt-2'>New Year Cakes</p>
            </div>
            <div className="card mb-5 lg:mb-0 text-center hover:scale-105 cursor-pointer">
                <img className='w-48 h-40 border-2 border-gray-300 rounded-xl' src={occassion} alt="" />
                <p className='text-black font-medium  mt-2'>Occassion Cakes</p>
            </div>
        </div>
    </div>
  )
};

export default Category;