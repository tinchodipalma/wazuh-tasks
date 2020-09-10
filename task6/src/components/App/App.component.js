import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VehiclesPage from '../../pages/Vehicles';
import BrandsPage from '../../pages/Brands';
import ContactPage from '../../pages/Contact';

import './App.css';

const App = () => (
  <div className="App App__Container">
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/vehiculos">
        <VehiclesPage />
      </Route>
      <Route path="/marcas">
        <BrandsPage />
      </Route>
      <Route path="/contacto">
        <ContactPage />
      </Route>

      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
