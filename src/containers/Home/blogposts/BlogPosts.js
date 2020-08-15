import React from 'react';
import BlogCard from '../../../components/Card/BlogCard/BlogCard';
import './BlogPosts.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const BlogPosts = () => {
  const { t } = useTranslation();
  const blogposts = [
    {
      title: '10 tips I wish I knew before I started to workout.',
      overview:
        'If you have been planning to start working out for the last couple of months but you always procrastinate about how, where, and when to start, here are 10 tips that really helped throughout my journey and I wish I knew from the beginning.',
      imgUrl: 'https://www.amerikainstitut.at/upload/44739210-placeholder.jpg',
    },
    {
      title: '10 tips I wish I knew before I started to workout.',
      overview:
        'If you have been planning to start working out for the last couple of months but you always procrastinate about how, where, and when to start, here are 10 tips that really helped throughout my journey and I wish I knew from the beginning.',
      imgUrl:
        'https://permobil.com.au/wp-content/uploads/2017/08/no-image-placeholder-2.jpg',
    },
    {
      title: '10 tips I wish I knew before I started to workout.',
      overview:
        'If you have been planning to start working out for the last couple of months but you always procrastinate about how, where, and when to start, here are 10 tips that really helped throughout my journey and I wish I knew from the beginning.',
      imgUrl:
        'https://permobil.com.au/wp-content/uploads/2017/08/no-image-placeholder-2.jpg',
    },
  ];
  return (
    <section className="flex flex-col items-center bg-secondary">
      <h1 className=" md:text-3xl text-xl text-center font-bold text-darkgray my-10">
        {t('blogposts.header')}
      </h1>

      <div className=" flex flex-col  items-center overflow-y-scroll  disable-scrollbar  w-screen md:h-xl h-xxl px-3">
        {blogposts.map((post, index) => {
          return (
            <BlogCard
              key={index}
              title={post.title}
              overview={post.overview}
              imgUrl={post.imgUrl}
            />
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
