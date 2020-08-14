import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen  font-poppins text-primary bg-secondary flex flex-col items-center justify-center p-4 ">
      <h1 className="font-bold  lg:text-3xl md:text-2xl text-xl">
        Unfortunately we could not find the page you are looking for..{' '}
      </h1>
      <p className="text-sm font-bold mt-4">
        {' '}
        You might have either searched for a wrong URL or the page you are
        looking for is currently unavailable.
      </p>
    </div>
  );
};

export default NotFound;
