import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { breakfast } from './img/breakfast3.png'
//import { format } from 'prettier';

export default function RecipeCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex-1">
      <img
        className="w-full"
        src={require('./img/breakfast3.png')}
        alt="breakfast"
      />
      <div className="px-6 py-4 flex flex-col justify-around items-center">
        <h1 className="text-gray-700 text-base font-bold text-xl mb-2">
          Kiwi, Greek yogurt <br />& blueberries
        </h1>

        <hr />
        <br />
        <button
          className="bg-primary text-white active:bg-pink-600 font-poppins font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: 'all .15s ease' }}
        >
          See Recipe
        </button>

        <br />
        <hr />
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <img src="/calories-icon.png" alt="calories"></img>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <img src="/meal-icon.png" alt="Meal category"></img>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            <img src="/clock.svg" alt="Meal Preparation time"></img>
          </span>
        </div>

        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <p>170 calories</p>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <p>Breakfast</p>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            <p>15 min.</p>
          </span>
        </div>
      </div>
    </div>
  );
}

/*<button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                See Recipe
      </button>*/
