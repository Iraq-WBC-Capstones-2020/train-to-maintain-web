import React from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';
const BlogCard = ({ title, overview, imgUrl, authorName, publishDate }) => {
  return (
    <motion.div
      data-testid="blogcard"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="max-w-sm w-full md:w-11/12 lg:w-10/12 md:max-w-full md:flex md:justify-center  my-3"
    >
      <div
        className="h-56 md:h-auto md:w-64 flex-none bg-cover  text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className=" bg-primary  p-4 flex flex-col justify-between leading-normal shadow-2xl font-bold">
        <div className="mb-8">
          <div className=" text-secondary font-bold text-xl   ">{title}</div>
          <div className="flex align-center  justify-between w-56 mb-2 ">
            <p>
              <small className="text-xs   text-pinky font-bold opacity-75">
                By {authorName}
              </small>
            </p>
            <p>
              <small className="text-xs   text-pinky font-bold opacity-75">
                Published on {publishDate}
              </small>
            </p>
          </div>
          <p className="text-secondary  text-base md:w-9/12s mb-2">
            {overview}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
BlogCard.propTypes = {
  title: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  authorName: propTypes.string.isRequired,
  publishDate: propTypes.string.isRequired,
};
BlogCard.defaultProps = {
  title: 'Blog titles',
  overview: 'the overview of the blog post',
  imgUrl: "https://tailwindcss.com/img/card-top.jpg'",
  authorName: 'Evan Hameed',
  publishDate: 'jul 19',
};
export default BlogCard;
