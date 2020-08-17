import React, { useState, useEffect } from 'react';
import blogsfile from '../../assets/Blogs.txt';
import propTypes from 'prop-types';
const SingleBlog = ({ match }) => {
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetchSingleWorkout();
  });
  const fetchSingleWorkout = () => {
    fetch(blogsfile)
      .then((resp) => resp.json())
      .then((data) => {
        const singleBlog = data.blogs.filter(
          (blog) => blog.id === match.params.id
        );
        setBlog(singleBlog[0]);
      });
  };
  return (
    <div>
      <div className="my-10 bg-primary md:p-10 p-6  shadow-md">
        <h1 className="font-bold md:text-2xl  text-lg text-secondary  uppercase">
          {blog.title}
        </h1>
        <div className="w-64  text-xs flex justify-between mt-2 text-pinky font-bold capitalize">
          <span>By {blog.author}</span>
          <span>Published on {blog.publish}</span>
        </div>
        <p className="text-secondary md:w-5/6 mt-2 font-medium">
          {blog.overview}
        </p>
      </div>
      <div className="md:px-10 lg-py-2 md:pb-24 p-4 text-lg text-darkgray font-medium">
        {blog.body}
      </div>
    </div>
  );
};
SingleBlog.propTypes = {
  match: propTypes.object.isRequired,
};
export default SingleBlog;
