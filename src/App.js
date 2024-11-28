import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/components/header.js";
import Footer from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/components/footer";
import AboutMe from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/AboutMe";
import Portfolio from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/Portfolio";
import Contact from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/Contact";
import Resume from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/pages/Resume";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;