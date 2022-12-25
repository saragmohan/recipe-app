import React from "react";
import { Group, Time } from "../../assets";

const RecipeCard = () => {
  return (
    <div className="recipeCard">
      <img className="recipeImg" alt=""></img>
      <span className="recipeName">Title</span>
      <div className="recipeInfo">
        <Time />
        <span>10 mins</span>
        <Group />
        <span>4</span>
      </div>
    </div>
  );
};

export default RecipeCard;
