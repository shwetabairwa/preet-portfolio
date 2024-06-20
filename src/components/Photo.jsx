import React from 'react'
import blog from "../assets/images/blog.jpg";
function Photo() {
  return (
    <section className="bg-yellow-400 flex justify-center ">
      <img src={blog} className=' sm:h-3/5 sm:w-3/5  '/>
      
    </section>
  )
}

export default Photo
