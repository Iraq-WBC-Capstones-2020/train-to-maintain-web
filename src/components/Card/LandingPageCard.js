import React from 'react';
import propTypes from 'prop-types';
const LandingPageCard = ({ image, title }) => {
  return (
    <>
      <div className=" max-h-lg max-w-sm sm:w-1/2 lg:w-1/4  overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded">
        <img className="w-full" src={image} />
        <div className="font-bold text-xl text-purple-600 text-center p-10">
          {title}
        </div>
      </div>
    </>
  );
};
LandingPageCard.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
export default LandingPageCard;
