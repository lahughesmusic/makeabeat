import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "./components/grid";
import Play from './components/track';

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Grid} />
        <Route exact path="/" component={Play} />
      </Fragment>
    </Router>
  )


}

export default App;
