import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <React.Fragment>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-darkgray navbar-expand-lg   mb-3 font-poppins">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="lg:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-secondary"
              href="#pablo"
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
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={navbarOpen ? faTimes : faBars} />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug text-secondary lg:hover:bg-primary"
                  href="#pablo"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug text-secondary lg:hover:bg-primary"
                  href="#pablo"
                >
                  Workouts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug text-secondary lg:hover:bg-primary"
                  href="#pablo"
                >
                  Meals
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug text-secondary lg:hover:bg-primary"
                  href="#pablo"
                >
                  Bundles
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg  uppercase font-bold leading-snug text-secondary lg:hover:bg-primary"
                  href="#pablo"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
