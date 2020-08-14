import React from 'react';
import clockicon from './icons/clockicon.svg';
import propTypes from 'prop-types';
import trainingicon from './icons/trainingicon.svg';
import { motion } from 'framer-motion';

function WorkoutCard({ workout }, { key }) {
  return (
    <motion.div
      className="max-h-lg max-w-sm sm:w-1/2 lg:w-5/6 md:w-5/6 overflow-hidden shadow-lg m-4"
      whileHover={{ scale: 1.02 }}
    >
      <img
        className="w-full"
        src={workout.image}
        alt={workout.title}
        key={key}
        id={key}
      />
      <div className="p-3">
        <div className="flex justify-center items-center font-bold text-xl text-center text-darkgray">
          {workout.title}
        </div>
      </div>
      <br></br>
      <div className="flex justify-around pb-3 items-center">
        <div className="flex items-center flex-col">
          <img src={trainingicon} alt="trainingicon" className="h-8 w-8" />
          <span className="text-darkgray pt-1">{workout.type}</span>
        </div>
        <div className="absolute h-12 border-l-2 border-darkgray py-8 "></div>
        <div className="flex items-center flex-col">
          <img src={clockicon} alt="clockicon" className="h-8 w-8" />
          <span className="text-darkgray pt-1">{workout.duration}</span>
        </div>
      </div>
    </motion.div>
  );
}

WorkoutCard.propTypes = {
  workout: propTypes.object,
};

export default WorkoutCard;
