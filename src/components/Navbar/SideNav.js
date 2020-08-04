import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css';
import { Link } from 'react-router-dom';
import { useSwipeable, Swipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
const SideNav = ({
  navbarOpen,
  handleToggleMenuClick,
  handleToggleMenuNavClick,
}) => {
  let sideNavClasses = 'SideNav';
  if (navbarOpen) {
    sideNavClasses = 'SideNav open';
  }
  return (
    <Swipeable onSwiped={handleToggleMenuNavClick}>
      <nav
        className={
          `bg-darkgray h-screen w-3/4 md:w-2/4  fixed top-0 right-0 z-10 text-secondary lg:hidden flex flex-col justify-evenly ` +
          sideNavClasses
        }
      >
        <button
          className="m-3  absolute top-0 left-0"
          onClick={() => handleToggleMenuClick()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="h-64 flex flex-col justify-evenly items-center">
          <li>
            <Link
              onClick={handleToggleMenuNavClick}
              to="/home"
              className="font-bold"
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              onClick={handleToggleMenuNavClick}
              to="/workouts"
              className="font-bold"
            >
              WORKOUTS
            </Link>
          </li>

          <li>
            <Link
              onClick={handleToggleMenuNavClick}
              to="/meals"
              className="font-bold"
            >
              MEALS
            </Link>
          </li>

          <li>
            <Link
              onClick={handleToggleMenuNavClick}
              to="/about"
              className="font-bold"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </Swipeable>
  );
};
SideNav.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  handleToggleMenuClick: PropTypes.func.isRequired,
  handleToggleMenuNavClick: PropTypes.func.isRequired,
};
export default SideNav;
