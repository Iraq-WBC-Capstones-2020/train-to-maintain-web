import React from 'react';
import Toolbar from './Toolbar';
import SideNav from './SideNav';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleHamClick = () => {
    setNavbarOpen((prevState) => !prevState);
  };
  return (
    <>
      <Toolbar navbarOpen={navbarOpen} handleHamClick={handleHamClick} />
      {navbarOpen ? (
        <SideNav handleHamClick={handleHamClick} navbarOpen={navbarOpen} />
      ) : (
        ''
      )}
    </>
  );
};

export default Navbar;
