import React from 'react';
import Provider from './context/Provider';

import { AboutUs, Header, Case, Team } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Provider>
    <Navbar />
    <Header />
    <AboutUs />
    <Case />
    <Team />

  </Provider>
);

export default App;