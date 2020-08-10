import React from 'react';
const Header = () => {
  return (
    <header className=" flex items-center justify-center  header h-xl">
      <div className=" lg:w-6/12 md:w-7/12 w-9/12">
        <h1 className=" lg:text-6xl md:text-5xl text-3xl font-bold uppercase text-secondary lg:mb-10 mb-8">
          Today is a good day to start
        </h1>
        <p className="lg:text-2xl text-lg text-secondary font-bold">
          Not satsfied with the way your body looks ? Don’t know where and how
          to start ? You have come to the right place !!
        </p>
      </div>
    </header>
  );
};

export default Header;
