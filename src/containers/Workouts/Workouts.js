import React from 'react';
import WorkoutCard from '../../components/Card/WorkoutCard/WorkoutCard';
const workout = [
  {
    title: 'CHEST WORKOUTS',
    image: 'https://i.ibb.co/VQzz7fh/chest.webp',
    duration: '60min',
    type: 'Beginner',
  },
  {
    title: 'TRICEPS WORKOUTS',
    image:
      'https://lh3.googleusercontent.com/proxy/x1-eHC1ChVol6adT820pmwlYAXsMKHmgWRUAaNonBG13INWBkqN8XRqHsiCoPXBfLJYLCTXaB8UFpRfMgopgSnuujJXgXm9aSWu3ShKU2qQ7tqBvLByOJYz2MO7in4XkeIrf5J5zTTdYh6s',
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
    image: 'https://i.ibb.co/N3gGG7z/hiit-fat-loss-workouts.webp',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'ABS WORKOUTS',
    image:
      'https://i.ibb.co/nBwttNv/d-better-fit-Chris-Powell-Abs-190118-989476.jpg',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'FAT LOSE WORKOUTS',
    image:
      'https://i.ibb.co/LgfX965/12-week-womens-bikini-prep-workout-1-0.webp',
    duration: '60min',
    type: 'Beginner',
  },

  {
    title: 'BACK WORKOUTS',
    image: 'https://i.ibb.co/XxHwqrP/image.jpg',
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
    <div className=" flex flex-row">
      {workout.map((workout) => {
        return <WorkoutCard workout={workout} />;
      })}
    </div>
  );
};

export default Workouts;
