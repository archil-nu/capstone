import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
