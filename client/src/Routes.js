import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Tables from "./Tables";

const Routes = () => {
  console.log("Router");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Tables} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
