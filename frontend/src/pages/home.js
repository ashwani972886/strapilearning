import React from 'react';
import { Carousel, Category, NewArrivals, HotPicks, Testimonials, Stats } from '../components/home';


const Home = () => {
  return (
    <div className='px-2 min-h-screen'>
        {/* Carousel Section */}
        <Carousel />

        {/* Categories Section */}
        <Category />

        {/* New Arrivals Section */}
        <NewArrivals />

        {/* Hot Picks Section */}
        <HotPicks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Stats Section */}
        <Stats /> 
        

    </div>
  )
};
export default Home;