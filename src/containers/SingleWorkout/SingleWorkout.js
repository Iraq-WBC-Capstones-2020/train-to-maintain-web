import React from 'react';
import timeIcon from './icons/clockicon.svg';
import dumbbellIcon from './icons/trainingicon.svg';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const SingleWorkout = () => {
  const history = useHistory();
  const workout = {
    title: 'chest workout',
    description:
      'This is an effective chest workout that targets all of the chest pecs. (upper,middle, and lower chest)',
    duration: '60 mins',
    level: 'beginner',
    imgUrl:
      'https://i2.wp.com/behungrystayhumble.com/wp-content/uploads/2018/05/brutal-caucasian-handsome-fitness-men-on-diet-training-chest-pum-95191475.jpg?w=2123&ssl=1',
    exercises: [
      'Flat Barbell Bench Press, 3 sets of 10 ',
      'Incline Dumbbell Bench Press, 3 sets of 10',
      'Machine Chest Fly: 3 sets of 10',
      '50 push-ups for time',
    ],
    videoUrls: [
      'https://www.youtube.com/embed/rT7DgCr-3pg',
      'https://www.youtube.com/embed/8iPEnn-ltC8',
      'https://www.youtube.com/embed/Z57CtFmRMxA',
      'https://www.youtube.com/embed/ihvdd0rPTiU',
    ],
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
          Go Back
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
                  {workout.level}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 w-full flex md:justify-center">
            <img
              className="md:w-7/12 w-full h-full"
              src={workout.imgUrl}
              alt="workout"
            ></img>
          </div>
        </div>
      </div>
      <div className="md:mt-16 md:pl-16 px-8 pb-8">
        <h3 className="text-primary font-bold text-2xl mb-2">Exercises</h3>

        {workout.exercises.map((exe, index) => {
          return (
            <li className="md:text-xl" key={index}>
              {exe}
            </li>
          );
        })}
      </div>
      <div className="flex flex-col  items-center my-8">
        {workout.videoUrls.map((video, index) => {
          return (
            <iframe
              key={index}
              className="lg:w-6/12 md:w-10/12 md:h-screen-50 h-64 mb-6 "
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          );
        })}
      </div>
    </>
  );
};

export default SingleWorkout;
