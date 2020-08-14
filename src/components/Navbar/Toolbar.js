import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const Toolbar = ({ navbarOpen, handleToggleMenuClick }) => {
  const location = useLocation();
  const isDark =
    location.pathname === '/home' || location.pathname === '/about';
  const navLinksStyle = classNames(
    'px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold  leading-snug',
    {
      'text-secondary lg:hover:bg-primary': isDark,
      'text-primary lg:hover:bg-darkgray': !isDark,
    }
  );
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent navbar-expand-lg  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span
              className={classNames(
                'lg:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-secondary',
                { 'text-darkgray': !isDark }
              )}
            >
              Train to{' '}
              <div className="inline-block">
                maintain
                <hr className="border-0 h-1 bg-primary" />
              </div>
            </span>
            <button
              className={classNames(
                `text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-secondary`,
                { 'text-darkgray': !isDark }
              )}
              type="button"
              onClick={() => handleToggleMenuClick()}
            >
              <FontAwesomeIcon icon={navbarOpen ? faTimes : faBars} />
            </button>
          </div>
          <div className={' hidden lg:flex flex-grow items-center'}>
            <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/home" className={navLinksStyle}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/workouts" className={navLinksStyle}>
                  Workouts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/meals" className={navLinksStyle}>
                  Meals
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className={navLinksStyle}>
                  about
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Toolbar.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  handleToggleMenuClick: PropTypes.func.isRequired,
};
export default Toolbar;
