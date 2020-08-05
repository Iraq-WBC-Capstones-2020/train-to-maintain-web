import React, { useState } from 'react';
import Toolbar from './Toolbar';
import SideNav from './SideNav';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleMenuClick = () => {
    setNavbarOpen((prevState) => !prevState);
  };
  const handleCloseNavbar = () => {
    setNavbarOpen(false);
  };
  return (
    <div data-testid="navbar">
      <Toolbar
        navbarOpen={navbarOpen}
        handleToggleMenuClick={handleToggleMenuClick}
      />

      <SideNav
        handleToggleMenuClick={handleToggleMenuClick}
        navbarOpen={navbarOpen}
        handleCloseNavbar={handleCloseNavbar}
      />
    </div>
  );
};

export default Navbar;
