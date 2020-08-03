import React from 'react';

const MealType = ({ title, imgUrl }) => {
  return (
    <div
      className="h-64 w-screen md:h-screen md:w-1/2 flex items-center justify-center"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <button className="bg-black bg-opacity-75 hover:bg-primary hover:bg-opacity-75 px-12 py-6 sm:px-16 sm:py-9 xl:px-20 xl:py-12">
        <h1 className="font-bold font-poppins text-secondary text-3xl sm:text-5xl xl:text-6xl">
          {title}
        </h1>
      </button>
    </div>
  );
};

export default MealType;
