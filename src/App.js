import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Single from "./pages/SingleP";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/products" exact component={Products}></Route>
        <Route path="/products/:slug" exact component={Single}></Route>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
