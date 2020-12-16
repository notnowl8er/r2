import React from "react";
import { feed } from "../../helpers/lists";

export const Feed = ({ setFeed }) => {
  const handleFeed = (feedItem) => {
    console.log(feedItem);
    setFeed(feedItem);
  };
  return (
    <div className="sideMenu__top-feed">
      <ul className="">
        {feed.map((item) => {
          return (
            <li onClick={() => handleFeed(item.sort)} key={item.id}>
              {item.sort}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
