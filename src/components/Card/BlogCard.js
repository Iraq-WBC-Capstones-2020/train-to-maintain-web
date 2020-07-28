import React from 'react';
import { motion } from 'framer-motion';
const BlogCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="max-w-sm w-full md:w-11/12 lg:w-10/12 md:max-w-full md:flex md:justify-center  my-10"
    >
      <div
        className="h-56 md:h-auto md:w-64 flex-none bg-cover  text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage: "url('https://tailwindcss.com/img/card-top.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className=" bg-purple-project  p-4 flex flex-col justify-between leading-normal shadow-2xl font-font-project font-bold">
        <div className="mb-8">
          <div className="text-offwhite-project font-bold text-xl   ">
            10 tips I wish I knew before I started to workout.
          </div>
          <div className="flex align-center  justify-between w-56 mb-2 ">
            <p>
              <small className="text-xs   text-pink-project font-bold opacity-75">
                By Evan Hameed
              </small>
            </p>
            <p>
              <small className="text-xs   text-pink-project font-bold opacity-75">
                Published on Jul 19
              </small>
            </p>
          </div>
          <p className="text-offwhite-project  text-base md:w-9/12s mb-2">
            If you have been planning to start working out for the last couple
            of months but you always procrastinate about how, where, and when to
            start, here are 10 tips that really helped throughout my journey and
            I wish I knew from the beginning.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
