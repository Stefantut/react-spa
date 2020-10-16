import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <h1>Simple SPA</h1>
      <ul className="header">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/stuff">Stuff</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
