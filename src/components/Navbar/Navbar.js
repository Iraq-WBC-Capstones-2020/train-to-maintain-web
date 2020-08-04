import React, { useState } from 'react';
import Toolbar from './Toolbar';
import SideNav from './SideNav';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleMenuClick = () => {
    setNavbarOpen((prevState) => !prevState);
  };
  const handleToggleMenuNavClick = () => {
    setNavbarOpen(false);
  };
  return (
    <>
      <Toolbar
        navbarOpen={navbarOpen}
        handleToggleMenuClick={handleToggleMenuClick}
      />

      <SideNav
        handleToggleMenuClick={handleToggleMenuClick}
        navbarOpen={navbarOpen}
        handleToggleMenuNavClick={handleToggleMenuNavClick}
      />
    </>
  );
};

export default Navbar;
