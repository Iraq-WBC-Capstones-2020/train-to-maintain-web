import React from 'react';
import { motion } from 'framer-motion';
const BlogCard = () => {
  return (
    <React.Fragment>
      <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.8 }}
        className="max-w-sm w-full md:w-11/12 lg:w-10/12 md:max-w-full md:flex md:justify-center  my-10"
      >
        <div
          className="h-56 md:h-auto md:w-64 flex-none bg-cover  text-center overflow-hidden shadow-xl"
          style={{
            backgroundImage: "url('https://tailwindcss.com/img/card-top.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className=" bg-purple-project  p-4 flex flex-col justify-between leading-normal shadow-xl font-font-project">
          <div className="mb-8">
            <div className="text-gray-100 font-bold text-xl mb-2 ">
              10 tips I wish I knew before I started to workout.
            </div>
            <p className="text-gray-100 text-base md:w-9/12s mb-2">
              If you have been planning to start working out for the last couple
              of months but you always procrastinate about how, where, and when
              to start, here are 10 tips that really helped throughout my
              journey and I wish I knew from the beginning.
            </p>
            <p className="mt-12">By Evan Hameed</p>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default BlogCard;
