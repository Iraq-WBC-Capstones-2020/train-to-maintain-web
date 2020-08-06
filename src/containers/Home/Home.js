import React from 'react';
import './Home.css';
import Header from './header/Header';
import QuoteSection from './quoteSection/QuoteSection';
import bgvideo from './assets/bggif.mp4';
import overlay from './assets/overlay.png';

import Newsletter from './newsletter/Newsletter';
import BlogPosts from './blogposts/BlogPosts';
import SocialMedia from './soical media/SocialMedia';
const Home = () => {
  return (
    <>
      <video
        id="bg-video"
        autoPlay
        muted
        loop
        className="w-screen  absolute left-0 top-0 object-cover "
      >
        <source src={bgvideo} type="video/mp4" />
      </video>{' '}
      <img
        className=" overlay w-screen  absolute left-0 top-0 "
        src={overlay}
        alt="ovey"
      />
      <Header /> <BlogPosts />
      <QuoteSection />
      <Newsletter />
      <SocialMedia />
    </>
  );
};

export default Home;
