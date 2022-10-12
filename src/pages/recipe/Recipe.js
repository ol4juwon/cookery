import React from 'react'
import { useParams } from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import {ReactComponent as Cook} from './cook.svg'
import './Recipe.css'
const Recipe = () => {
  const params = useParams();
  console.log("params",params);
  const {data: recipe, isLoading, error} = useFetch(`http://localhost:3000/recipes/${params.id}`)
  return (
    <div className='recipe'>
     {/* <div>
      <Cook width="200px" height="100px" style={{padding: '20px', justifyContent: 'center'}}/>
      </div> */}
      {error && <p className='error'>{error}</p>}
    {isLoading && <div className='loading'>Loading...</div>}
    {
      !isLoading && !error && recipe && (
        <>
          <h2>{recipe.title}</h2>
          <p>Prep Time: {recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map(
              (ingredient, index) => <li key={index}>{ingredient}</li>
            )}
          </ul>
          <h3>Method</h3>
          <p className='method'>
            {recipe.method}</p>
          </>
      )
        
    }
    </div>
  )
}

export default Recipe