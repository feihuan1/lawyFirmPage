import React from "react";
import Provider from "./context/Provider";

import { AboutUs, Header, Case, Team, Contact, } from "./container";
import { Navbar, Footer } from "./components";
import "./App.css";

const App = () => (
  <Provider>
    <Navbar />
    <Header />
    <AboutUs />
    <Case />
    <Team />
    <Contact />
    <Footer />
  </Provider>
);

export default App;
