import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function RecipeList({recipes}) {
  return (
    <div className='recipe-list'>
        {recipes && recipes.map((recipe) => (
            <div className='card' key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>Cooking Time: {recipe.cookingTime}</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
            </div>
        ))}
    </div>
  )
}

export default RecipeList