import React from 'react';
import Provider from './context/Provider';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Case } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Provider>
    <Navbar />
    <Header />
    <AboutUs />
    <Case />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </Provider>
);

export default App;