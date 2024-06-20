import React from "react";

function Blog() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mx-auto px-4 sm:px-6 lg:px-8 w-3/5">
        <p className="mb-5 text-xl text-yellow-500">Client's Testimonial</p>
        <h1 className="text-3xl font-bold text-gray-900">Interesting woking with me? Lets connect!</h1>
        <p className="mt-5 mb-8 sm:mb-0 text-xs sm:text-center sm:pr-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero sit soluta earum laudantium,
          quos nisi quibusdam expedita assumenda quas laboriosam ad porro, quod nobis nam? Esse commodi illum aut!
        </p>
        <div className="mt-8">
          <a href="#download" className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
