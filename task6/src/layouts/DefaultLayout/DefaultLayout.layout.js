import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';

import './DefaultLayout.css';

const DefaultLayout = ({ children }) => (
  <div className="DefaultLayout DefaultLayout__Container">
    <Navbar />
    <main className="DefaultLayout__Main">{children}</main>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
