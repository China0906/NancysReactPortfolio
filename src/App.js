import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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