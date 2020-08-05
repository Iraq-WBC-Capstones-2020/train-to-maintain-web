import React from 'react';
import { caloriesIcon } from './img/calories-icon.png';
import { categoryIcon } from './img/meal-icon.png';
import { durationIcon } from './img/clock.svg';

export default function RecipeCard({
  image,
  title,
  calories,
  category,
  duration,
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="breakfast" />
      <div className="px-6 py-4 flex flex-col justify-around items-center ">
        <h1 className="text-black-700 text-base font-bold text-xl mb-2 text-center">
          {title}
        </h1>
        <button
          className="bg-primary text-white active:bg-pink-600 font-poppins  text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mx-4"
          type="button"
          style={{ transition: 'all .15s ease' }}
        >
          See Recipe
        </button>

        <div className="my-4 flex flex-wrap justify-around items-center">
          <div className=" flex flex-col justify-center items-center w-1/3">
            <img src={caloriesIcon} className="w-1/4 py-2" />
            <span className="bg-gray-200 rounded-full text-sm font-poppins text-black text-center">
              {calories}
            </span>
          </div>

          <div className="flex flex-col justify-center items-center w-1/3">
            <img
              src={categoryIcon}
              alt="Meal category"
              className="w-1/4 py-2"
            ></img>
            <span className=" bg-gray-200 rounded-full  text-sm font-poppins text-black ">
              {category}
            </span>
          </div>

          <div className=" flex flex-col justify-center items-center w-1/3">
            <img
              src={durationIcon}
              alt="Meal Preparation duration"
              className="w-1/4 py-2"
            ></img>
            <span className="bg-gray-200 rounded-full  text-sm font-poppins text-black ">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
