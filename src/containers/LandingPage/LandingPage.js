import React from 'react';
import landingWorkout from '../LandingPage/assets/landingWorkout.mp4';
import LandingPageCard from '../../components/Card/LandingPageCard/LandingPageCard';
import { Link } from 'react-router-dom';
import MealsPic from './assets/Meals.jpg';
import WorkoutPic from './assets/Workout.jpg';
import BundlesPic from './assets/Bundles.jpg';

const LandingPage = () => {
  return (
    <>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
<<<<<<< HEAD
        className="w-full h-full object-cover fixed"
||||||| merged common ancestors
        className="w-full h-full top-0 left-0 object-cover fixed  black-effect"
=======
        className="fixed bg-black opacity-50 w-screen h-screen"
>>>>>>> black layer issue fix
      >
        <source src={landingWorkout} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-screen h-screen w-full bg-black opacity-50"></div>
      <div>
        <h1 className="text-secondary text-center font-bold text-6xl relative">
          Train To <span className="border-b-4 border-primary">Maintain</span>
        </h1>
        <h2 className="text-secondary text-center font-bold text-2xl relative">
          YOUR PERSONAL TRAINING ASSISTANT
        </h2>
<<<<<<< HEAD
        <div className="flex flex-col items-center md:flex-row md:h-xxxl lg:h-la  justify-evenly p-2 ">
          <Link to="/meals">
||||||| merged common ancestors
        <div className=" flex flex-col items-center md:flex-row md:h-xxxl lg:h-la  justify-evenly p-2 ">
          <Link to="./meals">
=======
        <div className=" flex flex-col items-center md:flex-row justify-evenly p-2 h-full">
          <Link to="./meals">
>>>>>>> black layer issue fix
            <LandingPageCard image={MealsPic} title={'Meals'} />
          </Link>
          <Link to="/workouts">
            <LandingPageCard image={WorkoutPic} title={'Workout'} />
          </Link>
          <Link to="/home">
            <LandingPageCard image={BundlesPic} title={'Home'} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
