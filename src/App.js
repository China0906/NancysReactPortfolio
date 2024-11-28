import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import header from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/components/header";
import Footer from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/components/Footer";
import AboutMe from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/AboutMe";
import Portfolio from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/Portfolio";
import Contact from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/Contact";
import Resume from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/Resume";

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/AboutMe" element={AboutMe} />
            <Route path="/portfolio" element={Portfolio} />
            <Route path="/contact" element={Contact} />
            <Route path="/resume" element={Resume} />
          </Routes>
       
    </Router>
  );
}

export default App;