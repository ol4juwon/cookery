import './Create.css'

import React, {useEffect, useRef, useState} from 'react'
import {useFetch} from '../../hooks/useFetch'
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate  = useNavigate();
  const [title, setTitle] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [method, setMethod] = useState('')
  const [count, setCount] = useState(0)
  const ingredientInput = useRef();
  const {postData, data} = useFetch('http://localhost:3000/recipes','POST')

  const handleSubmit = (e) => {

    // e.preventDefault();
    // console.log(title, cookingTime, ingredients, method)
    postData({title, cookingTime: cookingTime + ' minutes', ingredients, method});
  }

  const addIng = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if(ing && !ingredients.includes(ing)) {
    setIngredients(prevIng => [...prevIng, ing])
  }
  setNewIngredient('')
  ingredientInput.current.focus();
  console.log(ingredientInput.current.value)
  }
useEffect(()=> {
  console.log(data)
  if(data){
    // navigate('/')
    setCount(prevCount => prevCount + 1) 
  }
},[data])
useEffect(() => {
  console.log(count)
}, [count])
  return (
    <div className='create'>
      <h1 className='page-title'>Add a new recipe</h1>
      <form onSubmit={handleSubmit}>
        <label><span>Recipe Title</span>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label><span>Cooking Time (minutes)</span>
        <input type='number' required value={cookingTime} onChange={(e) => setCookingTime(e.target.value)}/>
        </label>
        <label>
          <span>Ingredients</span>
          <div className='ingredients'>
            <input ref={ingredientInput} type='text' value={newIngredient} onChange={(e) => setNewIngredient(e.target.value) }/>
            <button onClick={addIng} className='btn'>+</button>
          </div>

        </label>
        <p>Current Ingredients: {ingredients.length > 0 && ingredients.map((ing, index) =><em key={index}>{ing}</em> )}
        <span className='close' onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          ingredients.length = 0;
          setIngredients([])
          
          }
        }>x</span></p>
        <label><span>Recipe Method</span>
        <textarea value={method} onChange={(e) => setMethod(e.target.value)}/>
        </label>
        <button type='submit'>submit</button>
      </form>
      </div>
  )
}

export default Create