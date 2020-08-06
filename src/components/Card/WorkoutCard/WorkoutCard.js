import React from 'react';
import clockicon from './icons/clockicon.svg';
import trainingicon from './icons/trainingicon.svg';

function WorkoutCard({ image, title, duration, type, id }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg font-poppins ">
      <img class="w-full" src={image} alt={title} id={id} />
      <div class="px-6 py-4">
        <div class="flex justify-center items-center font-bold text-xl  text-center m-10 text-darkgray">
          {title}
        </div>
      </div>
      <div class="flex justify-around m-5">
        <div>
          <img src={trainingicon} alt="trainingicon" class="h-10 w-10" />
          <span class="-m-5 text-darkgray">{type}</span>
        </div>
        <div class="absolute h-10 border-l-2 border-darkgray"></div>
        <div class="flex-col">
          <img class="h-10 w-10" src={clockicon} alt="clockicon" />
          <span class="-m-2 text-darkgray">{duration}</span>
        </div>
      </div>
    </div>
  );
}

export default WorkoutCard;
