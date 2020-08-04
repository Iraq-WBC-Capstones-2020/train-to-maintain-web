import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const Toolbar = ({ navbarOpen, handleToggleMenuClick }) => {
  const location = useLocation();
  const logoColor =
    location.pathname === '/home' || location.pathname === '/about'
      ? 'text-secondary'
      : 'text-darkgray';
  const navsColor =
    location.pathname === '/home' || location.pathname === '/about'
      ? 'text-secondary'
      : 'text-primary';
  const hoverEffect =
    location.pathname === '/home' || location.pathname === '/about'
      ? 'bg-primary'
      : 'bg-darkgray';
  return (
    <React.Fragment>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent navbar-expand-lg  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={`lg:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-secondary ${logoColor}`}
            >
              Train to{' '}
              <div className="inline-block">
                maintain
                <hr
                  style={{
                    border: 'none',
                    height: '0.2em',
                    background: '#4527A0',
                  }}
                />
              </div>
            </a>
            <button
              className={`text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none ${logoColor}`}
              type="button"
              onClick={() => handleToggleMenuClick()}
            >
              <FontAwesomeIcon icon={navbarOpen ? faTimes : faBars} />
            </button>
          </div>
          <div className={' hidden lg:flex flex-grow items-center'}>
            <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/home"
                  className={`px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold  leading-snug  lg:hover:${hoverEffect} ${navsColor}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/workouts"
                  className={`px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug  lg:hover:${hoverEffect} ${navsColor}`}
                >
                  Workouts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/meals"
                  className={`px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug  lg:hover:${hoverEffect} ${navsColor}`}
                >
                  Meals
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className={`px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug  lg:hover:${hoverEffect} ${navsColor}`}
                >
                  about
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

Toolbar.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  handleToggleMenuClick: PropTypes.func.isRequired,
};
export default Toolbar;
