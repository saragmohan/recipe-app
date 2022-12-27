import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import RecipeCardWrapper from "./components/recipe cards/RecipeCardWrapper";

function App() {
  const [recipe, setRecipe] = useState(null);
  const onRecipeSelect = (recipe) => {
    setRecipe(recipe);
  };
  return (
    <>
      <Header onRecipeSelect={onRecipeSelect} />
      <RecipeCardWrapper selectedRecipe={recipe} />
    </>
  );
}

export default App;
