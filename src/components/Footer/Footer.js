import React from 'react';
import workoutImage from './assets/workoutImage.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" sm:h-auto lg:h-64 flex lg:flex-row xl:flex-row flex-col md:flex-row justify-between items-center text-secondary">
      <img
        src={workoutImage}
        className="object-cover bg-center h-auto md:h-64 sm:h-64 w-full absolute"
        alt="Two young couple workout"
      />
      <h1 className="text-4xl p-5 select-none z-0 relative">
        Train to
        <span className="border-b-4 border-primary z-40">Maintain</span>
      </h1>

      <ul className="text-2xl sm:p-2 p-2 relative">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>
        <li>
          <Link to="/meals">Meals</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="p-5 w-56 relative">
        <button className="bg-primary w-20 h-10 text-secondary mr-2">
          Sign Up
        </button>
        <label htmlFor="language"></label>
        <select
          className=" bg-primary text-secondary w-20 h-10"
          name="language"
          id="language"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
  );
};
export default Footer;
