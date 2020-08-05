import React from 'react';
import workoutImage from './assets/workoutImage.jpg';
const Footer = () => {
  return (
    <div
      className=" sm:h-auto lg:h-64 flex lg:flex-row xl:flex-row flex-col md:flex-col justify-between items-center font-poppins text-secondary"
      style={{
        backgroundImage: url(${ workoutImage }),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl p-5 select-none">
        Train to <span className="border-b-4 border-primary">Maintain</span>
      </h1>
      <ul className="text-2xl sm:p-2 p-2">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Workout</a>
        </li>
        <li>
          <a href="#">Meals</a>
        </li>
        <li>
          <a href="#">Bundles</a>
        </li>
        <li>About</li>
      </ul>
      <div className="p-5 w-56">
        <button className="bg-primary w-20 h-10 text-secondary mr-2">
          Sign Up
        </button>
        <label htmlFor="language"></label>
        <select
          className=" bg-primary text-secondary w-20 h-10 "
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