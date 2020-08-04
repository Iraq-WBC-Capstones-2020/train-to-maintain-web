import React from 'react';
import Toolbar from './Toolbar';
import SideNav from './SideNav';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
