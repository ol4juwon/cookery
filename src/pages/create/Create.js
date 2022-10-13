import "./Create.css";

import React, {useEffect, useRef, useState} from "react";
// import {useFetch} from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { projectStore } from "../../Services/firebase";

const Create = () => {
    const navigate  = useNavigate();
    const [title, setTitle] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [method, setMethod] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const ingredientInput = useRef();
    // const {postData, data} = useFetch("http://localhost:3000/recipes","POST");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setDisabled(true);
        // console.log(title, cookingTime, ingredients, method)
        // postData({title, cookingTime: cookingTime + " minutes", ingredients, method});
        projectStore.collection("recipes").add({title, cookingTime: cookingTime + " minutes", ingredients, method})
            .then((docRef) => {
                console.log(docRef);
                setData(docRef);
            }
            )
            .catch((err) =>{ console.log(err);
                setError(err);
            }

            );
        setLoading(false);
        setDisabled(false);

    };

    const addIng = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();
        if(ing && !ingredients.includes(ing)) {
            setIngredients(prevIng => [...prevIng, ing]);
        }
        setNewIngredient("");
        ingredientInput.current.focus();
        console.log(ingredientInput.current.value);
    };
    useEffect(()=> {
        console.log(data);
        if(data){
            navigate("/");
        }
    },[data]);
    return (
        <div className='create'>
            <h1 className='page-title'>Add a new recipe</h1>
            {error && <p className='error'>{error}</p>}
            {loading && <p className='loading'>Loading...</p>}
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
                        setIngredients([]);
          
                    }
                    }>x</span></p>
                <label><span>Recipe Method</span>
                    <textarea value={method} onChange={(e) => setMethod(e.target.value)}/>
                </label>
                <button type='submit' disabled={disabled}>submit</button>
            </form>
        </div>
    );
};

export default Create;