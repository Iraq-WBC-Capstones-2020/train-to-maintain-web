import React from 'react';
import landingWorkout from '../LandingPage/assets/landingWorkout.mp4';
import LandingPageCard from '../../components/Card/LandingPageCard/LandingPageCard';
import { Link } from 'react-router-dom';
import MealsPic from './assets/Meals.jpg';
import WorkoutPic from './assets/Workout.jpg';
import BundlesPic from './assets/Bundles.jpg';
import BlackRectangle from './assets/Rectangle.png';
import './landing.css';

const LandingPage = () => {
  return (
    <>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="w-full h-full top-0 left-0 object-cover fixed  black-effect"
      >
        <source src={landingWorkout} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src={BlackRectangle}
        className="fixed top-0 left-0 h-screen w-full"
      />
      <div>
        <h1 className=" select-none text-secondary text-center font-bold text-6xl relative">
          Train To <span className="border-b-4 border-primary">Maintain</span>
        </h1>
        <h2 className=" select-none text-secondary text-center font-bold text-2xl relative">
          YOUR PERSONAL TRAINING ASSISTANT
        </h2>
        <div className=" flex flex-col items-center md:flex-row md:h-xxxl lg:h-la  justify-evenly p-2 ">
          <Link to="./meals">
            <LandingPageCard image={MealsPic} title={'Meals'} />
          </Link>
          <Link to="./workouts">
            <LandingPageCard image={WorkoutPic} title={'Workout'} />
          </Link>
          <Link to="./bundles">
            <LandingPageCard image={BundlesPic} title={'Bundles'} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
// md:flex-col md:h-xxxl lg:h-xl  justify-evenly p-2
