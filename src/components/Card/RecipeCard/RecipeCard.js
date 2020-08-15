import React from 'react';
import caloriesIcon from './img/calories-icon.png';
import categoryIcon from './img/meal-icon.png';
import durationIcon from './img/clock.svg';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function RecipeCard({
  image,
  title,
  calories,
  category,
  duration,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="lg:w-1/4 xl:w-1/3 md:w-1/3 sm:w-full overflow-hidden shadow-lg mt-4 mb-4"
    >
      <div style={{ width: '384px', height: '349px' }}>
        <img
          className="object-cover h-full w-full"
          src={image}
          alt="meal image"
        />
      </div>
      <div className="px-4 py-2 flex flex-col justify-around items-center">
        <h1 className="text-black-700 font-bold text-xl m-2 text-center">
          {title}
        </h1>

        <button
          className="bg-primary text-white active:bg-pink-600 text-sm px-3 py-2 hover:bg-pinky shadow hover:shadow-lg m-2"
          type="button"
        >
          See Recipe
        </button>
        <div className="my-2 flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center w-1/3">
            <img src={caloriesIcon} className="w-1/4 mb-1" alt="calories" />
            <span className="bg-gray-200 rounded-full text-sm text-black text-center p-1">
              {calories}
            </span>
          </div>

          <div className="flex flex-col justify-center items-center w-1/3">
            <img
              src={categoryIcon}
              alt="Meal category"
              className="w-1/4 mb-1"
            ></img>
            <span className=" bg-gray-200 rounded-full text-sm text-black p-1">
              {category}
            </span>
          </div>

          <div className=" flex flex-col justify-center items-center w-1/3">
            <img
              src={durationIcon}
              alt="Meal Preparation duration"
              className="w-1/4 mb-1"
            ></img>
            <span className="bg-gray-200 rounded-full text-sm text-black p-1">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

RecipeCard.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  calories: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  duration: propTypes.string.isRequired,
};
