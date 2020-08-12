import React from 'react';
import Popper from 'popper.js';

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  /*let bgColor;
  color === 'white'
    ? (bgColor = 'bg-gray-800')
    : (bgColor = 'bg-' + color + '-500');*/
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                'uppercase rounded-t-lg mr-1 mb-1 ' +
                'bg-primary hover:bg-transparent text-white hover:text-primary active:bg-pink-600 text-sm px-6 py-3 shadow hover:shadow-lg outline:none hover:border-primary  mx-4'
              }
              style={{ transition: 'all .15s ease' }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              ALL
              {color === 'white' ? 'White Dropdown' : color + ' Dropdown'}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                (color === 'white' ? 'bg-white ' : 'bg-primary' + ' ') +
                'text-base z-50 float-left py-2 list-none text-left rounded-t-lg shadow-lg mt-1'
              }
              style={{ minWidth: '12rem' }}
            >
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  'bg-primary hover:bg-white text-white hover:text-primary'
                }
                onClick={(e) => e.preventDefault()}
              >
                Breakfast
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  'bg-primary hover:bg-white text-white hover:text-primary'
                }
                onClick={(e) => e.preventDefault()}
              >
                Lunch
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  'bg-primary hover:bg-white text-white hover:text-primary'
                }
                onClick={(e) => e.preventDefault()}
              >
                Dinner
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  'bg-primary hover:bg-white text-white hover:text-primary'
                }
                onClick={(e) => e.preventDefault()}
              >
                Snacks
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="indigo" />
    </>
  );
}
