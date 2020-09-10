import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';

import './LandingLayout.css';

const LandingLayout = ({ children }) => (
  <div className="LandingLayout LandingLayout__Container">
    <Navbar />
    <main className="LandingLayout__Main">{children}</main>
  </div>
);

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingLayout;
