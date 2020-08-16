import React, { useState } from 'react';
import './DropDown.css';
const DropDown = (props) => {
  const [menuValue, setMenuValue] = useState('All');
  const [filterFlag, setfilterFlag] = useState();
  //const [category, setCategory] = useState('');

  //props.setCategory(menuValue);

  function handleChange(e) {
    setfilterFlag(true);
    setMenuValue(e.target.title);
    //props.setCategory(menuValue);

    if (filterFlag) {
      mealFilter();
      setfilterFlag(false);
    }
  }

  function mealFilter() {
    let result =
      menuValue === 'All'
        ? props.mealList
        : props.mealList.filter((meal) => meal.category === menuValue);

    console.log('the result' + result);
    props.setMealList(result);
  }

  return (
    <div className="group inline-block text-poppins text-secondary ">
      <button className="bg-primary text-white rounded-t-lg active:bg-pink-600 text-sm px-6 py-3 border shadow hover:shadow-lg outline-none focus:outline-none mx-4 flex items-center">
        <span className="pr-1 font-semibold flex-1">{menuValue}</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul className=" rounded-b-lg transform scale-0 group-hover:scale-100 absolute bg-primary float-left text-left text-white active:bg-pink-600 text-sm shadow hover:shadow-lg outline-none focus:outline-none mx-4">
        <li
          className={
            'text-sm py-2 px-4 pr-16 font-normal block w-full whitespace-no-wrap bg-transparent ' +
            'bg-primary hover:bg-white text-white hover:text-primary rounded-b-lg'
          }
          onClick={(e) => {
            handleChange(e);
            setfilterFlag(true);
          }}
          title="All"
        >
          All
        </li>

        <li
          className={
            'text-sm py-2 px-4 pr-16 font-normal block w-full whitespace-no-wrap bg-transparent ' +
            'bg-primary hover:bg-white text-white hover:text-primary rounded-b-lg'
          }
          onClick={(e) => {
            handleChange(e);
            setfilterFlag(true);
          }}
          title="Breakfast"
        >
          Breakfast
        </li>

        <li
          className={
            'text-sm py-2 px-4 pr-16 font-normal block w-full whitespace-no-wrap bg-transparent ' +
            'bg-primary hover:bg-white text-white hover:text-primary rounded-b-lg'
          }
          onClick={(e) => {
            handleChange(e);
            setfilterFlag(true);
          }}
          title="Lunch"
        >
          Lunch
        </li>

        <li
          className={
            'text-sm py-2 px-4 pr-16 font-normal block w-full whitespace-no-wrap bg-transparent ' +
            'bg-primary hover:bg-white text-white hover:text-primary rounded-b-lg'
          }
          onClick={(e) => {
            handleChange(e);
            setfilterFlag(true);
          }}
          title="Dinner"
        >
          Dinner
        </li>

        <li
          className={
            'text-sm py-2 px-4 pr-16 font-normal block w-full whitespace-no-wrap bg-transparent ' +
            'bg-primary hover:bg-white text-white hover:text-primary rounded-b-lg'
          }
          onClick={(e) => {
            handleChange(e);
          }}
          title="Snacks"
        >
          Snacks
        </li>
      </ul>
    </div>
  );
};
export default DropDown;
