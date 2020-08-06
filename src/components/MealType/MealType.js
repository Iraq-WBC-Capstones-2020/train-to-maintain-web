import React from 'react';
import './MealType.css';
import propTypes from 'prop-types';

const MealType = ({ title, imgUrl }) => {
  return (
    <div
      className="mealImage"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <button className="box">
        <h1 className="text">{title}</h1>
      </button>
    </div>
  );
};
MealType.propTypes = {
  title: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
};
export default MealType;
