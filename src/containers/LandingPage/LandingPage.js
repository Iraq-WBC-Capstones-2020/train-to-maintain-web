import React from 'react';
import landingWorkout from '../LandingPage/assets/landingWorkout.mp4';
import LandingPageCard from '../../components/Card/LandingPageCard/LandingPageCard';
import { Link } from 'react-router-dom';
import MealsPic from './assets/Meals.jpg';
import WorkoutPic from './assets/Workout.jpg';
import BundlesPic from './assets/Bundles.jpg';
import { useTranslation } from 'react-i18next';
const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="w-full h-full object-cover fixed"
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
          {t('landingpage.header')}
        </h2>
        <div className="flex flex-col items-center md:flex-row md:h-xxxl lg:h-la  justify-evenly p-2 ">
          <Link to="/meals">
            <LandingPageCard image={MealsPic} title={t('navbar.meals')} />
          </Link>
          <Link to="/workouts">
            <LandingPageCard image={WorkoutPic} title={t('navbar.workouts')} />
          </Link>
          <Link to="/home">
            <LandingPageCard image={BundlesPic} title={t('navbar.home')} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
