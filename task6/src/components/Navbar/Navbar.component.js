import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

import './Navbar.css';

const NavbarMenu = () => {
  const theme = useTheme();

  const menuContainerStyles = {
    backgroundColor: theme.palette.primary.dark,
  };

  return (
    <div className="Navbar__Menu__Container" style={menuContainerStyles}>
      <ul className="Navbar__Menu">
        <li>
          <Link to={`/vehiculos`}>Vehiculos</Link>
        </li>
        <li>
          <Link to={`/marcas`}>Marcas</Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const className = classnames('Navbar Navbar__Container', {
    'Navbar--open': isMenuOpen,
  });

  return (
    <React.Fragment>
      <AppBar className={className} position="fixed">
        <Toolbar className="Navbar__Toolbar">
          <Link to="/" className="Navbar__Col">
            <div className="Navbar__Logo">
              <img
                src="//wazuh.com/wp-content/themes/wazuh/assets/images/wazuh_logo.svg"
                alt="Wazuh Task 6"
              />
            </div>
            <div className="Navbar__Title">
              <Typography variant="h6">Task 6</Typography>
            </div>
          </Link>
          <div className="Navbar__Col">
            <IconButton className="Navbar__Menu__Button" onClick={onMenuToggle}>
              {!isMenuOpen && <MenuIcon />}
              {isMenuOpen && <CloseIcon />}
            </IconButton>
            <NavbarMenu />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

Navbar.propTypes = {
  siteData: PropTypes.object.isRequired,
};

export default Navbar;
