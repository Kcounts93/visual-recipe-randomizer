import React from "react";

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className='recipe-card'>
      <img src={recipe.image} alt={recipe.label} />
      <h2>{recipe.label}</h2>
      <p>Calories: {Math.round(recipe.calories)}</p>
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
