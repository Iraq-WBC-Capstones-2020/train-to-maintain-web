import React from 'react';

export default function RecipeCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={require('./img/breakfast3.png')}
        alt="breakfast"
      />
      <div className="px-6 py-4 flex flex-col justify-around items-center ">
        <h1 className="text-black-700 text-base font-bold text-xl mb-2 text-center">
          Kiwi, Greek yogurt <br />& blueberries
        </h1>
        <button
          className="bg-primary text-white active:bg-pink-600 font-poppins  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-4"
          type="button"
          style={{ transition: 'all .15s ease' }}
        >
          See Recipe
        </button>
        <div className="my-4 flex justify-around items-center">
          <div className=" flex flex-col justify-around items-center">
            <img
              src={require('./img/calories-icon.png')}
              className="xl:w-1/4 py-2"
            />
            <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
              <p>170 calories</p>
            </span>
          </div>

          <div className=" flex flex-col justify-around items-center">
            <img
              src={require('./img/meal-icon.png')}
              alt="Meal category"
              className="xl:w-1/4 py-2"
            ></img>
            <span className="inline-block bg-gray-200 rounded-full  text-sm font-semibold text-gray-700 mr-2">
              <p>170 calories</p>
            </span>
          </div>

          <div className=" flex flex-col justify-around items-center">
            <img
              src={require('./img/clock.svg')}
              alt="Meal Preparation time"
              className="xl:w-1/4 py-2"
            ></img>
            <span className="inline-block bg-gray-200 rounded-full  text-sm font-semibold text-gray-700 mr-2">
              <p>170 calories</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
