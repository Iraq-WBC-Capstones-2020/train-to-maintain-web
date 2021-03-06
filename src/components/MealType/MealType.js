import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealType = ({ title, imgUrl, path }) => {
  return (
    <div
      className="mealImage flex justify-center items-center lg:h-screen w-screen md:h-screen-50 sm:h-screen-50"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Link to={path}>
        <button className="bg-white opacity-50 hover:text-white hover:bg-primary p-5">
          <h1 className="xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold">
            {title}
          </h1>
        </button>
      </Link>
    </div>
  );
};
MealType.propTypes = {
  title: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
};
export default MealType;
