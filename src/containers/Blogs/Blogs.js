import React, { useState, useEffect } from 'react';
import BlogCard from '../../components/Card/BlogCard/BlogCard';
import blogsfile from '../../assets/Blogs.txt';
import { Link } from 'react-router-dom';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch(blogsfile)
      .then((resp) => resp.json())
      .then((data) => setBlogs(data.blogs));
  };
  return (
    <>
      <section className="flex flex-col items-center md:p-20 p-12">
        <div className=" flex flex-col items-center w-screen md:h-xl h-xxl px-3">
          {blogs.map((blog, index) => {
            return (
              <>
                <Link
                  className="flex flex-col items-center"
                  to={`/blogs/${blog.id}`}
                >
                  <BlogCard
                    key={index}
                    title={blog.title}
                    overview={blog.overview}
                    imgUrl={blog.image}
                    authorName={blog.author}
                    publishDate={blog.publish}
                  />
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blogs;
