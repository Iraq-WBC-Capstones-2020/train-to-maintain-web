import React, { useState } from 'react';
import './Home.css';
import Header from './header/Header';
import QuoteSection from './quoteSection/QuoteSection';
import bgvideo from './assets/bggif.mp4';
import overlay from './assets/overlay.png';
import { motion } from 'framer-motion';
import Newsletter from './newsletter/Newsletter';
import BlogPosts from './blogposts/BlogPosts';
import SocialMedia from './soical media/SocialMedia';
import { ScrollTo } from 'react-scroll-to';
const Home = () => {
  const [scrollAmount, setScrollAmount] = useState(window.scrollY);
  window.addEventListener('scroll', () => {
    setScrollAmount(window.scrollY);
  });
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
        alt="overlay"
      />
      {scrollAmount !== 0 ? (
        <ScrollTo>
          {({ scroll }) => (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll({ y: 0, smooth: true })}
              className="go-up bg-darkgray  text-sm text-secondary rounded-full p-3 z-10  shadow-xl hover:bg-primary focus:outline-none"
            >
              {' '}
              Back to top ⬆
            </motion.button>
          )}
        </ScrollTo>
      ) : (
        ''
      )}
      <Header />
      <BlogPosts />
      <QuoteSection />
      <Newsletter />
      <SocialMedia />
    </>
  );
};

export default Home;
