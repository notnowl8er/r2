import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SideMenu } from "./sideMenu/SideMenu";

export const Home = () => {
  const [selected, setSelected] = useState("all");
  const [feed, setFeed] = useState("");
  const [sort, setSort] = useState("best");

  return (
    <Router>
      <a id="skip" href="#main">
        Skip to main content
      </a>
      <div className="home" id="home">
        <SideMenu
          selected={selected}
          setSelected={setSelected}
          feed={feed}
          setFeed={setFeed}
        />
      </div>
      <Switch>
        <Route path="/link"></Route>
      </Switch>
    </Router>
  );
};
