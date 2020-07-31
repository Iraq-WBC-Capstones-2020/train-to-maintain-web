import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const SideBar = (props) => {
  return (
    <nav
      className={`bg-darkgray h-screen w-3/4 md:w-2/4  fixed top-0 right-0 z-10 text-white lg:hidden `}
    >
      <button className="m-3" onClick={() => props.handleHamClick()}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <ul className="h-full flex flex-col justify-around items-center  ">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">WORKOUTS</a>
        </li>
        <li>
          <a href="#">MEALS</a>
        </li>
        <li>
          <a href="#">BUNDLES</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
