import React from 'react';
function WorkoutCard(props) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg font-poppins ">
      <img
        class="w-full"
        src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/12-week-womens-bikini-prep-workout-1_0.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="flex justify-center items-center font-bold text-xl  text-center m-10 text-darkgray">
          FAT LOSE WORKOUTS
        </div>
      </div>
      <div class="flex justify-around m-5">
        <div class="">
          <svg
            class="h-8 w-8 fill-current text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.002 512.002"
          >
            <path d="M42.477 193.875L.059 236.292l42.418 42.415L.059 321.126 190.934 512l42.418-42.417L275.767 512l42.419-42.415zM278.65 169.667l-108.924 109.04 63.626 63.627 108.923-109.041zM511.942 190.875L321.067 0l-42.415 42.416L236.233 0l-42.417 42.417 275.71 275.709 42.416-42.418-42.416-42.417zM405.9 42.42L448.315.004l63.623 63.624-42.415 42.415zM.071 448.375l42.416-42.416 63.624 63.623-42.416 42.416z" />
          </svg>

          <span class="-m-5 text-darkgray">beginner</span>
        </div>
        <div
          style={{
            borderLeft: '1px solid gray',
            height: '50px',
            position: 'absolute',
            left: '14%',
          }}
        ></div>
        <div class="flex-col">
          <svg
            class="h-8 w-8 fill-current text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.002 512.002"
          >
            <path d="M512 112c0 29.938-11.906 57-31.062 77.094-27.156-73.406-89.063-129.875-165.813-149.406C335.656 15.594 365.844 0 400 0c61.875 0 112 50.125 112 112zM196.859 39.688C176.328 15.594 146.141 0 112 0 50.141 0 0 50.125 0 112c0 29.938 11.922 57 31.063 77.094 27.156-73.406 89.078-129.875 165.796-149.406zM464 272c0 50.531-18.031 96.812-48 132.875V464c0 26.5-21.5 48-48 48-24.562 0-44.594-18.531-47.438-42.344-20.345 6.656-42 10.344-64.563 10.344-22.563 0-44.234-3.688-64.563-10.344C188.594 493.469 168.563 512 144 512c-26.5 0-48-21.5-48-48v-59.125C66.047 368.812 48 322.531 48 272c0-114.875 93.125-208 208-208s208 93.125 208 208zm-32 0c0-97.063-78.969-176-176-176-97.047 0-176 78.938-176 176 0 97.031 78.953 176 176 176 97.031 0 176-78.969 176-176zM272 128h-32v144c0 2.812.734 5.562 2.141 8l64.016 110.844 27.688-16L272 267.719V128z" />
          </svg>

          <span class="-m-2 text-darkgray">60min</span>
        </div>
      </div>
    </div>
  );
}

export default WorkoutCard;
