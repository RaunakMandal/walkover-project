import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddTable from "./AddTable";
import Tables from "./Tables";
import TableView from "./TableView";

const Routes = () => {
  console.log("Router");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Tables} />
        <Route path="/add" component={AddTable} />
        <Route path="/view/:id" component={TableView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
