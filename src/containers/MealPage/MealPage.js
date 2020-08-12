import React from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MealPage.css';
import propTypes from 'prop-types';

const MealPage = ({
  image,
  title,
  description,
  time,
  nutritions,
  ingredients,
  method,
}) => {
  return (
    <div className="p-5">
      <div className=" shadow-lg max-w-sm w-full md:w-11/12 lg:w-full lg:h-56 md:max-w-full md:flex md:justify-center">
        <img
          src={image}
          className="h-48 md:h-auto md:w-64 w-64 mx-auto  lg:h-auto lg:w-56 flex-none bg-cover overflow-hidden"
          alt="{title}"
        />
        <div className="bg-white p-6 flex flex-col justify-between align-center md:w-9/12s leading-normal">
          <h1 className="text-2xl">{title}</h1>
          <p className="text-sm">{description}</p>
          <span>
            <FontAwesomeIcon
              className=" mr-3 mt-3 text-primary"
              icon={faClock}
            />
            {time}
          </span>
        </div>
      </div>
      <div>
        <div className="border-b-2">
          <h1 className="text-3xl pl-4 py-3">Nutritions</h1>
          <div className=" max-w-2xl pb-10 flex flex-row flex-wrap items-center md:flex-row md:justify-between md:m-2 mt-2">
            <div
              className="p-2 mt-2 mr-2 w-32 bg-primary items-center text-indigo-100 leading-none lg:rounded-sm flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-secondary text-darkgray uppercase px-2 py-1 text-xs font-bold mr-3">
                Kcal
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                {nutritions}
              </span>
            </div>
            <div
              className="p-2 mt-2 mr-2 w-32 bg-primary items-center text-indigo-100 leading-none lg:rounded-sm flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-secondary text-darkgray uppercase px-2 py-1 text-xs font-bold mr-3">
                Fat
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                {nutritions}
              </span>
            </div>
            <div
              className="p-2 mt-2 mr-2 w-32 bg-primary items-center text-secondary leading-none lg:rounded-sm flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-secondary text-darkgray uppercase px-2 py-1 text-xs font-bold mr-3">
                carbs
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                {nutritions}
              </span>
            </div>
            <div
              className="p-2 mt-2 mr-2 w-32 bg-primary items-center text-secondary leading-none lg:rounded-sm flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-secondary text-darkgray uppercase px-2 py-1 text-xs font-bold mr-3">
                sugers
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                {nutritions}
              </span>
            </div>
            <div
              className="p-2 mt-2 mr-2 w-32 bg-primary items-center text-indigo-100 leading-none lg:rounded-sm flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-secondary text-darkgray uppercase px-2 py-1 text-xs font-bold mr-3">
                protein
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                {nutritions}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center p-5">
        <div className=" m-5 neumorphism  bg-secondary max-h-lg max-w-sm sm:w-1/2 lg:w-full md:w-full overflow-hidden ">
          <h1 className="text-2xl text-darkgray font-bold text-center">
            Ingredients
          </h1>

          <div className="font-bold text-1xl text-primary p-6">
            {ingredients}
          </div>
        </div>
        <div>
          <div className=" m-5 neumorphism  bg-secondary max-h-lg max-w-sm sm:w-1/2 lg:w-full md:w-full overflow-hidden ">
            <h1 className="text-2xl text-darkgray font-bold text-center">
              Method
            </h1>

            <div className="font-bold text-1xl text-primary p-6">{method}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
MealPage.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  nutritions: propTypes.array.isRequired,
  ingredients: propTypes.string.isRequired,
  method: propTypes.string.isRequired,
};
export default MealPage;
