import React, { useState, useEffect } from "react";
import ShuffleButton from "./components/shuffleButton";
import RecipeCard from "./components/recipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const EDAMAM_API_ID = import.meta.env.VITE_EDAMAM_API_ID;
  const EDAMAM_API_KEY = import.meta.env.VITE_EDAMAM_API_KEY;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Fetch random recipes from Edamam API
        const query = "healthy"; // You can change this to any category you want
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${EDAMAM_API_ID}&app_key=${EDAMAM_API_KEY}&to=10`
        );
        const data = await response.json();
        setRecipes(data.hits.map((hit) => hit.recipe));
        if (data.hits.length > 0) {
          setCurrentRecipe(data.hits[0].recipe);
        }
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };
    fetchRecipes();
  }, [EDAMAM_API_ID, EDAMAM_API_KEY]);

  const handleShuffle = () => {
    if (recipes.length > 0) {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      setCurrentRecipe(randomRecipe);
    }
  };

  return (
    <div className='App'>
      <RecipeCard recipe={currentRecipe} />
      <ShuffleButton onShuffle={handleShuffle} />
    </div>
  );
}

export default App;
