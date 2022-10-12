import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../components/RecipeList';
export const Search = () => {
 const querySring= useLocation();
 const param  = new URLSearchParams(querySring.search);
 const query = param.get('q');
//  console.log(querySring ,query)

 const url = `http://localhost:3000/recipes?q=${query}`
 const {data, error, isLoading} = useFetch(url)
  return (
    <>
    <div>{error}</div>
    <div>{data && <RecipeList recipes={data} />}</div>
    
    </>
  )
}
