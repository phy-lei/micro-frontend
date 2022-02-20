import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';

export default function Root(props) {
  return (
    // <div>
    //   <Home></Home>
    //   <About></About>
    // </div>
    <BrowserRouter basename="/todos">
      <div>{props.name}</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
