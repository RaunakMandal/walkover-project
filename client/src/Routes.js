import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddTable from "./AddTable";
import Tables from "./Tables";

const Routes = () => {
  console.log("Router");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Tables} />
        <Route path="/add" exact component={AddTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
