import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';

import './App.css';

const App = () => (
  <div className="App App__Container">
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

export default App;
