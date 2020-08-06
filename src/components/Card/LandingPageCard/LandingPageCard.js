import React from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';

const LandingPageCard = ({ image, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="max-h-lg max-w-sm sm:w-1/2 lg:w-1/4 overflow-hidden shadow-2xl"
    >
      <img
        className="h-64 w-full mx-auto object-cover"
        src={image}
        alt="Train to Maintain landing"
      />
      <div className="font-bold text-2xl text-purple-600 text-center p-5">
        {title}
      </div>
    </motion.div>
  );
};
LandingPageCard.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
export default LandingPageCard;
