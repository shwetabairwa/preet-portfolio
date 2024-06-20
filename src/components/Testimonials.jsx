import React from "react";

import star from "../assets/images/star.png";
function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-xl text-yellow-500 text-center">
          Clints Testimonial
        </p>

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What People Say
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="mt-4 text-gray-900 font-semibold">- Thomas Joe</p>
            <img src={star} alt="Star" className="h-12  sm:h-8 mx-auto" />
            <p className="text-xs text-gray-600 mt-3">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              saepe vero temporibus explicabo similique aspernatur. Excepturi
              quod enim earum nisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit."
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="mt-4 text-gray-900 font-semibold">- Thomas Joe</p>
            <img src={star} alt="Star" className="h-12 sm:h-8 mx-auto" />
            <p className="text-xs text-gray-600 mt-3">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              saepe vero temporibus explicabo similique aspernatur. Excepturi
              quod enim earum nisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit."
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="mt-4 text-gray-900 font-semibold">- Thomas Joe</p>
            <img src={star} alt="Star" className="h-12 sm:h-8 mx-auto" />
            <p className="text-xs text-gray-600 mt-3">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              saepe vero temporibus explicabo similique aspernatur. Excepturi
              quod enim earum nisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
