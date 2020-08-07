import React from 'react';
import './MealType.css';
import propTypes from 'prop-types';

const MealType = ({ title, imgUrl }) => {
  return (
    <div
      className="mealImage flex justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <button className="bg-white opacity-50 hover:text-white hover:bg-primary p-5">
        <h1 className="lg:text-6xl text-5xl font-bold">{title}</h1>
      </button>
    </div>
  );
};
MealType.propTypes = {
  title: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
};
export default MealType;
