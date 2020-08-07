import React, { useState, useRef } from 'react';
import './SocialMedia.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <section className="social-media  lg:h-xxl md:h-xxl flex flex-col items-center py-8 ">
      <h1 className="md:text-3xl text-lg text-center font-bold text-secondary lg:mb-8 w-10/12">
        Get the most out of socail media content creators
      </h1>
      <div className="flex  items-center w-screen   overflow-x-scroll disable-scrollbar lg:mb-8">
        <motion.div whileHover={{ scale: 1.04 }} className="mx-8">
          <TwitterTweetEmbed tweetId={'1291554671321067523'} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="mx-8">
          <TwitterTweetEmbed tweetId={'1291554671321067523'} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="mx-8">
          <TwitterTweetEmbed tweetId={'1291554671321067523'} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="mx-8">
          <TwitterTweetEmbed tweetId={'1291554671321067523'} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="mx-8">
          <TwitterTweetEmbed tweetId={'1291554671321067523'} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="mx-8">
          <TwitterTweetEmbed tweetId={'1291554671321067523'} />
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
