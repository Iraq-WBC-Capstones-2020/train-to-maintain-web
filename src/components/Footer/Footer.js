import React from 'react';
import './Footer.css';
const footer = () => {
  return (
    <footer className=" h-64 footer text-secondary font-poppins ">
      <div className=" md:flex h-48  pt-4 mb-4">
        <div className=" md:w-8/12 flex justify-around items-center mb-4">
          <div>
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
          </div>
          <ul className="">
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
        </div>

        <div className="md:w-3/12 flex items-center justify-center">
          <div className="group inline-block text-poppins">
            <button className="outline-none focus:outline-none border px-3 py-1 bg-primary rounded-sm flex items-center min-w-32">
              <span className="pr-1 font-semibold flex-1">English</span>
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
            <ul
              className="bg-primary border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
            >
              <li className="rounded-sm px-3 py-1 hover:bg-purple-700">
                Arabic
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-secondary text-xs ">
        Copyright Train to Maintain ® 2020 all rights reserved to the respective
        owners of the content inside this website
      </p>
    </footer>
  );
};

export default footer;
