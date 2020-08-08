import React from 'react';
import './SocialMedia.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  const tweets = [
    { id: '1291554671321067523' },
    { id: '1292037842722525184' },
    { id: '1117802268127113216' },
    { id: '1291981504868950018' },
    { id: '1289718054159388673' },
    { id: '1291796278360367107' },
  ];
  return (
    <section className="social-media   lg:h-xxxl md:h-xxl flex flex-col items-center py-8 ">
      <h1 className="md:text-3xl text-lg text-center font-bold text-secondary lg:mb-32 w-10/12">
        Get the most out of socail media content creators
      </h1>
      <div className="flex  items-center w-screen   overflow-x-scroll disable-scrollbar lg:mb-8">
        {tweets.map((tweet, index) => {
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="mx-8"
            >
              <TwitterTweetEmbed tweetId={tweet.id} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SocialMedia;
