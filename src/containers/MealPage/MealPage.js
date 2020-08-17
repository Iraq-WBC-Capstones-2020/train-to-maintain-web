import React, { useState, useEffect } from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MealPage.css';
import MealData from './assets/Meals.txt';
import propTypes from 'prop-types';

const MealPage = ({ match }) => {
  const [meal, setMeal] = useState({});
  useEffect(() => {
    mealFetch();
  }, []);
  const mealFetch = () => {
    fetch(MealData)
      .then((resp) => resp.json())
      .then((mealInfo) => {
        const singleMeal = mealInfo.meals.filter(
          (meal) => meal.id === match.params.id
        );
        setMeal(singleMeal[0]);
      });
  };
  console.log(meal.ingredients);
  return (
    <div className="p-5 container">
      <div className=" shadow-lg max-w-lg w-full md:w-11/12 lg:w-full lg:h-56 md:max-w-full md:flex md:justify-center">
        <img
          src={meal.image}
          className="h-48 md:h-auto md:w-64 w-64 mx-auto  lg:h-auto lg:w-56 flex-none bg-cover overflow-hidden"
          alt={meal.title}
        />
        <div className="bg-white p-6 flex flex-col justify-between align-center md:w-9/12s w-full leading-normal">
          <h1 className="text-2xl">{meal.title} </h1>
          <p className="text-sm">{meal.description}</p>
          <span>
            <FontAwesomeIcon
              className=" mr-3 mt-3 text-primary"
              icon={faClock}
            />
            {meal.timeForPrep}
          </span>
        </div>
      </div>
      <div>
        <div className="border-b-2">
          <h1 className="text-3xl pl-4 py-3">Nutritions</h1>
          <div className=" max-w-2xl pb-10 flex flex-row flex-wrap items-center md:flex-row md:justify-between md:m-2 mt-2">
            {meal.id &&
              meal.nutritions.map((info, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-2 mt-2 mr-2 w-32 bg-primary items-center text-indigo-100 leading-none lg:rounded-sm flex lg:inline-flex"
                    role="alert"
                  >
                    <span className="flex rounded-full bg-secondary text-darkgray uppercase px-2 py-1 text-xs font-bold mr-3">
                      {info.title}
                    </span>
                    <span className="font-semibold mr-2 text-left flex-auto">
                      {info.kcal}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center p-5">
        <div className=" m-5 neumorphism  bg-secondary max-h-lg max-w-sm sm:w-1/2 lg:w-full md:w-full overflow-hidden ">
          <h1 className="text-2xl text-darkgray font-bold text-center">
            Ingredients
          </h1>

          <div className="font-bold text-1xl text-primary p-6">
            <ul className="list-disc">
              {meal.id &&
                meal.ingredients.map((ingredient, idx) => {
                  return <li key={idx}>{ingredient}</li>;
                })}
            </ul>
          </div>
        </div>
        <div>
          <div className=" m-5 neumorphism  bg-secondary max-h-lg max-w-sm sm:w-1/2 lg:w-full md:w-full overflow-hidden ">
            <h1 className="text-2xl text-darkgray font-bold text-center">
              Method
            </h1>

            <div className="font-bold text-1xl text-primary p-6">
              <ol className="list-decimal">
                {meal.id &&
                  meal.ingredients.map((ingredient, idx) => {
                    return <li key={idx}>{ingredient}</li>;
                  })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
MealPage.propTypes = {
  match: propTypes.object.isRequired,
};
export default MealPage;
