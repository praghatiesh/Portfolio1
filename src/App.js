import React from "react";
import Project from "./component/Project";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import Nav from "./component/Nav";
import About from "./component/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  document.title = "portfolio";
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Skills" component={Skills} />
          <Route path="/About" component={About}/>
          <Route path="/Project" component={Project} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
