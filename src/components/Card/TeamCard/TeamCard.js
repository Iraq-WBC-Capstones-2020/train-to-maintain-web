import React from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';
const TeamCard = ({ id, image, name, role }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-56 bg-red-200 h-64 flex flex-col justify-between shadow-xl m-10"
        id={id}
      >
        <div className="bg-blue-200 h-48 profile-pic">
          <img
            src={image}
            alt="profile picture"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-full flex flex-col  items-center justify-center  bg-secondary text-darkgray">
          <h1 className="font-bold">{name}</h1>
          <p className="text-xs text-center">{role} </p>
        </div>
      </motion.div>
    </>
  );
};
TeamCard.propTypes = {
  id: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
};
TeamCard.defaultProps = {
  id: 0,
  image:
    'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
  name: 'Developer Name',
  role: 'Developer Role',
};
export default TeamCard;
