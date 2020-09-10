import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import Navbar from '../../components/Navbar';

import './DefaultLayout.css';

const DefaultLayout = ({ children }) => (
  <div className="DefaultLayout DefaultLayout__Container">
    <Navbar />
    <Paper className="DefaultLayout__Main" component="main">
      {children}
    </Paper>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
