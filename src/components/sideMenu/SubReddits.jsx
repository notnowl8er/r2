import React, { useState } from "react";
import { categories } from "../../helpers/lists";

export const SubReddits = ({ selected, setSelected }) => {
  const [categorie, setCategorie] = useState([categories]);
  const handleSelected = (subreddit) => {
    setSelected(subreddit);
  };
  return (
    <ul className="sideMenu__bottom-catagories">
      {categorie[0].map((item) => {
        return (
          <li onClick={() => handleSelected(item.topic)} key={item.id}>
            {item.topic}
          </li>
        );
      })}
    </ul>
  );
};
