import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

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