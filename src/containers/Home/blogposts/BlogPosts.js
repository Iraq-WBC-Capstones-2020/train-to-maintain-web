import React, { useState, useEffect } from 'react';
import BlogCard from '../../../components/Card/BlogCard/BlogCard';
import './BlogPosts.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import blogsfile from '../../../assets/Blogs.txt';

const BlogPosts = () => {
  const { t } = useTranslation();
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
    <section className="flex flex-col items-center bg-secondary">
      <h1 className=" md:text-3xl text-xl text-center font-bold text-darkgray my-10">
        {t('blogposts.header')}
      </h1>

      <div className=" flex flex-col  items-center overflow-y-scroll disable-scrollbar  w-screen  md:h-screen-60  h-screen-80 px-3">
        {blogs.map((post, index) => {
          return (
            <>
              <Link
                to={`blogs/${post.id}`}
                className="flex flex-col items-center"
              >
                <BlogCard
                  key={index}
                  title={post.title}
                  overview={post.overview}
                  imgUrl={post.image}
                  authorName={post.author}
                  publishDate={post.publish}
                />
              </Link>
            </>
          );
        })}
      </div>
      <Link to="/blogs">
        <button className="bg-primary text-secondary px-5 py-2 my-4">
          {t('buttons.showall')}
        </button>
      </Link>
    </section>
  );
};

export default BlogPosts;
