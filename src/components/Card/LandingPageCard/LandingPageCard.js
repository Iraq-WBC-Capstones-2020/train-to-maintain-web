import React from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';
const LandingPageCard = ({ image, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className=" m-5 relative bg-secondary max-h-lg max-w-sm sm:w-1/2 lg:w-5/6 md:w-5/6 overflow-hidden shadow-2xl"
    >
      <img
        className="h-64 w-full mx-auto object-cover"
        src={image}
        alt="Train to Maintain landing"
      />
      <div className="font-bold text-3xl text-primary text-center p-6">
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
