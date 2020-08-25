import React from 'react';
const Header = () => {
  return (
    <header className=" flex items-center justify-center">
      <div className=" lg:w-6/12 md:w-7/12 w-9/12 mb-32">
        <p className=" lg:text-3xl sm:text-3xl text-lg text-center font-bold text-secondary mt-10 md:mt-32">
          Your personal training assistant is here where you find exercises,
          meals and bundles that are suitable for your lifestyle!
        </p>
      </div>
    </header>
  );
};

export default Header;
