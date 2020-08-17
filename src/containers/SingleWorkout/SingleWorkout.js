import React, { useState, useEffect } from 'react';
import timeIcon from './icons/clockicon.svg';
import dumbbellIcon from './icons/trainingicon.svg';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import WorkoutsFile from '../../assets/Workouts.txt';
import { useTranslation } from 'react-i18next';
const SingleWorkout = ({ match }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [workout, setWorkout] = useState({});
  useEffect(() => {
    fetchSingleWorkout();
  });
  const fetchSingleWorkout = () => {
    fetch(WorkoutsFile)
      .then((resp) => resp.json())
      .then((data) => {
        const singleWorkout = data.workouts.filter(
          (workout) => workout.id === match.params.id
        );
        setWorkout(singleWorkout[0]);
      });
  };
  return (
    <>
      <div className="md:mt-16 md:pl-16 p-8 md:mb-24  mb-8  bg-secondary shadow-lg">
        <motion.button
          onClick={() => {
            history.goBack();
          }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="  bg-primary md:mb-4 mb-6 py-1 px-2 focus:outline-none text-secondary"
        >
          {t('buttons.goback')}
        </motion.button>
        <div className="h-xl   md:flex">
          <div className="mb-4 md:w-7/12  md:pt-8">
            <h1 className=" md:text-2xl text-xl font-bold uppercase text-primary">
              {workout.title}
            </h1>
            <p className="text-darkgray">{workout.description}</p>
            <div className="flex mt-6 w-32   justify-between">
              <div className="flex flex-col items-center">
                <img src={timeIcon} alt="duration" className="h-8 w-8" />
                <p className="text-xs mt-1 text-darkgray">{workout.duration}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={dumbbellIcon} alt="dumbbell" className="h-8 w-8" />
                <p className="text-xs mt-1 text-darkgray capitalize">
                  {workout.type}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 w-full flex md:justify-center">
            <img
              className="md:w-7/12 w-full h-full"
              src={workout.image}
              alt="workout"
            ></img>
          </div>
        </div>
      </div>
      <div className="md:mt-16 md:pl-16 px-8 pb-8">
        <h3 className="text-primary font-bold text-2xl mb-2">Exercises</h3>

        {workout.id &&
          workout.exercises.map((exe, index) => {
            return (
              <li className="md:text-xl" key={index}>
                {exe}
              </li>
            );
          })}
      </div>
      <div className="flex flex-col  items-center my-8">
        {workout.id &&
          workout.videos.map((video, index) => {
            return (
              <iframe
                title={video.title}
                key={index}
                className="lg:w-6/12 md:w-10/12 md:h-screen-50 h-64 mb-6 "
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            );
          })}
      </div>{' '}
    </>
  );
};
SingleWorkout.propTypes = {
  match: propTypes.object.isRequired,
};
export default SingleWorkout;
