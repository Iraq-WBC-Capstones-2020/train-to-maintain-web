import React from 'react';
import BlogCard from '../../../components/Card/BlogCard/BlogCard';
import './BlogPosts.css';
import { Link } from 'react-router-dom';

const BlogPosts = () => {
  return (
    <section className="flex flex-col items-center bg-secondary">
      <h1 className=" md:text-3xl text-xl text-center font-bold text-darkgray my-10">
        Nutrition, Health, and working out blogs
      </h1>

      <div className=" flex flex-col  items-center overflow-y-scroll  disable-scrollbar  w-screen md:h-xl h-xxl px-3">
        <BlogCard
          title="10 tips I wish I knew before I started to workout."
          overview="If you have been planning to start working out for the last couple of months but you always procrastinate about how, where, and when to start, here are 10 tips that really helped throughout my journey and I wish I knew from the beginning."
          imgUrl="https://www.google.com/search?q=placeholder+image&tbm=isch&ved=2ahUKEwiv0LXCmIbrAhUN4RoKHXyaAhAQ2-cCegQIABAA&oq=placeholder+image&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEEM6BQgAELEDOgcIIxDqAhAnOgcIABCxAxBDUKeDBViEpwVg_qcFaAJwAHgBgAH4AYgBphOSAQYwLjE2LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=h8MrX-_wKo3Ca_y0ioAB&bih=789&biw=1440&rlz=1C5CHFA_enIQ896IQ896#imgrc=fFTEG8vPy3K58M"
        />
        <BlogCard
          title="10 tips I wish I knew before I started to workout."
          overview="If you have been planning to start working out for the last couple of months but you always procrastinate about how, where, and when to start, here are 10 tips that really helped throughout my journey and I wish I knew from the beginning."
          imgUrl="https://www.google.com/search?q=placeholder+image&tbm=isch&ved=2ahUKEwiv0LXCmIbrAhUN4RoKHXyaAhAQ2-cCegQIABAA&oq=placeholder+image&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEEM6BQgAELEDOgcIIxDqAhAnOgcIABCxAxBDUKeDBViEpwVg_qcFaAJwAHgBgAH4AYgBphOSAQYwLjE2LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=h8MrX-_wKo3Ca_y0ioAB&bih=789&biw=1440&rlz=1C5CHFA_enIQ896IQ896#imgrc=fFTEG8vPy3K58M"
        />
        <BlogCard
          title="10 tips I wish I knew before I started to workout."
          overview="If you have been planning to start working out for the last couple of months but you always procrastinate about how, where, and when to start, here are 10 tips that really helped throughout my journey and I wish I knew from the beginning."
          imgUrl="https://www.google.com/search?q=placeholder+image&tbm=isch&ved=2ahUKEwiv0LXCmIbrAhUN4RoKHXyaAhAQ2-cCegQIABAA&oq=placeholder+image&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEEM6BQgAELEDOgcIIxDqAhAnOgcIABCxAxBDUKeDBViEpwVg_qcFaAJwAHgBgAH4AYgBphOSAQYwLjE2LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=h8MrX-_wKo3Ca_y0ioAB&bih=789&biw=1440&rlz=1C5CHFA_enIQ896IQ896#imgrc=fFTEG8vPy3K58M"
        />
      </div>
      <Link to="/blogs">
        <button className="bg-primary text-secondary px-5 py-2 my-4">
          Show All
        </button>
      </Link>
    </section>
  );
};

export default BlogPosts;
