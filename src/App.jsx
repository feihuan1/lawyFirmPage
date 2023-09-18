import React from "react";
import Provider from "./context/Provider";

import { AboutUs, Header, Case, Team, Contact } from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <Provider>
    <Navbar />
    <Header />
    <AboutUs />
    <Case />
    <Team />
    <Contact />
  </Provider>
);

export default App;
