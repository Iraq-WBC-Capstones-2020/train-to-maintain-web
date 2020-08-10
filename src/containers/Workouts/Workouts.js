import React from 'react';
import WorkoutCard from '../../components/Card/WorkoutCard/WorkoutCard';
const workout = [
  {
    title: 'CHEST WORKOUTS',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
    duration: '60min',
    type: 'Beginner',
  },
  {
    title: 'TRICEPS WORKOUTS',
    image: 'https://i.ibb.co/zm9bPvC/Guy-Back-Arm-Pose-Tricep.jpg',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'BICEPS WORKOUTS',
    image: 'https://i.ytimg.com/vi/aPBIw30HQnU/maxresdefault.jpg',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'CARDIO WORKOUTS',
    image: 'https://i.ibb.co/f4qcWfh/Mia-Ria-Fitness-2019-151.jpg',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'ABS WORKOUTS',
    image:
      'https://i.ibb.co/WK135X6/d-better-fit-Chris-Powell-Abs-190118-989476-5.jpg',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'FAT LOSE WORKOUTS',
    image:
      'https://i.ibb.co/WgMB7zr/12-week-womens-bikini-prep-workout-1-0.webp',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'BACK WORKOUTS',
    image:
      'https://cdn.mos.cms.futurecdn.net/nhrgrnDTfrfsAPDiZWsDk6-768-80.jpg',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'SHOULDER WORKOUTS',
    image: 'https://i.ibb.co/r2SpLbm/Jeremy-Buendia-Lateral-Dumbbell-Raise.jpg',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'LEG WORKOUTS',
    image: 'https://i.ibb.co/7K89mqN/Leg-Extension-1109.jpg',
    duration: '60min',
    type: 'Beginner',
  },
];
const Workouts = () => {
  return (
    <div className=" flex flex-row flex-wrap justify-evenly  ">
      {workout.map((workout) => {
        return <WorkoutCard workout={workout} />;
      })}
    </div>
  );
};

export default Workouts;
