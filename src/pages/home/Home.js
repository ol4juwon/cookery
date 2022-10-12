import './Home.css'
import React, { useEffect, useState } from 'react'
import { projectStore } from '../../Services/firebase'
// import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../components/RecipeList'
import { useRecipe } from '../../hooks/useRecipe'
const Home = () => {
  // const { data, isLoading, error } = useFetch('http://localhost:3000/recipes')
  // const {data, isLoading, error} =useRecipe();
const [data,setDate] = useState();
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    projectStore.collection('recipes').get()
    .then((snapshot) => {})
    .catch((err) => {});

    setIsLoading(false);
  },[])
  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isLoading && <div className='loading'>Loading...</div>}
      
      {!isLoading && !error &&  <RecipeList recipes={data} />}
    
    </div>
   
  )
}

export default Home