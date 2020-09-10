import React from 'react';
import { useTheme } from '@material-ui/core';
import LandingLayout from '../../layouts/LandingLayout';

import './Home.css';

const HomePage = () => {
  const theme = useTheme();
  const bannerStyles = {
    backgroundColor: theme.palette.primary.dark,
  };

  return (
    <LandingLayout>
      <div className="HomePage__Banner" style={bannerStyles}>
        <div className="HomePage__Banner__Text">Task 6</div>
      </div>
    </LandingLayout>
  );
};

export default HomePage;
