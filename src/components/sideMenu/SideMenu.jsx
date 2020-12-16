import React from "react";
import { Logo } from "../Logo";
import { ToggleSwitch } from "../ToggleSwitch";
import { Feed } from "./Feed";
import { SearchBar } from "./SearchBar";
import { SubReddits } from "./SubReddits";

export const SideMenu = ({ selected, setSelected, feed, setFeed }) => {
  return (
    <nav role="side menu" className="sideMenu">
      <div className="sideMenu__top">
        <Logo />
        <SearchBar setSelected={setSelected} />
        <Feed feed={feed} setFeed={setFeed} />
      </div>
      <div className="sideMenu__bottom">
        <SubReddits selected={selected} setSelected={setSelected} />
      </div>
    </nav>
  );
};
