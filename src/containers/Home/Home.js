import React from 'react';
import './Home.css';
import Header from './header/Header';
import bgvideo from './assets/bgvideo.mp4';
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
      </video>
      <Header />
      <div className="mt-4">that is another div</div>
    </>
  );
};

export default Home;
