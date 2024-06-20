import React from 'react';
import icon1 from '../assets/images/icon1.jpeg'; 

function About() {
  return (
    <section className="bg-gray-50 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:py-10 lg:px-8 mt-8 mb-8 flex flex-col-reverse sm:flex-row items-center sm:space-x-10">
        <div className="sm:w-3/5 mb-8 sm:mb-0 text-center sm:text-left sm:pr-6 order-1 sm:order-1">
          <p className="mb-5 text-xl text-yellow-500">About Me</p>
          <h1 className="text-4xl font-bold text-gray-900">What are my strongest</h1> 
          <h1 className="text-4xl font-bold text-gray-900">Sides and signals?</h1>
          <p className="mt-5 sm:w-4/5 mb-8 sm:mb-0 text-xs sm:text-left sm:pr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero sit soluta earum laudantium,
            quos nisi quibusdam expedita assumenda quas laboriosam ad porro, quod nobis nam? Esse commodi illum aut!
          </p>
          <div className="mt-5">
            <a href="#download" className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">See my experiences</a>
          </div>
        </div>
        <div className="sm:w-2/5 text-center mb-10 sm:mb-0 order-2 sm:order-2">
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="p-2">
              <div className="flex items-center justify-start mb-2">
                <img src={icon1} alt="Completed Projects" className="h-8 w-8 sm:h-8 sm:w-8" />
                <h3 className="text-sm font-bold ml-2">99 Completed Projects</h3>
              </div>
              <p className="text-xs text-center sm:text-left">Achieved excellence in various projects.</p>
            </div>
            <div className="p-2">
              <div className="flex items-center justify-start mb-2">
                <img src={icon1} alt="Happy Clients" className="h-8 w-8 sm:h-8 sm:w-8" />
                <h3 className="text-sm font-bold ml-2">150+ Happy Clients</h3>
              </div>
              <p className="text-xs text-center sm:text-left">Delivering satisfaction through dedicated services.</p>
            </div>
            <div className="p-2">
              <div className="flex items-center justify-start mb-2">
                <img src={icon1} alt="Hours of Work" className="h-8 w-8 sm:h-8 sm:w-8" />
                <h3 className="text-sm font-bold ml-2">200+ Hours of Work</h3>
              </div>
              <p className="text-xs text-center sm:text-left">Commitment to excellence in every project.</p>
            </div>
            <div className="p-2">
              <div className="flex items-center justify-start mb-2">
                <img src={icon1} alt="Awards Won" className="h-8 w-8 sm:h-8 sm:w-8" />
                <h3 className="text-sm font-bold ml-2">30 Awards Won</h3>
              </div>
              <p className="text-xs text-center sm:text-left">Recognition in the industry for outstanding work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
