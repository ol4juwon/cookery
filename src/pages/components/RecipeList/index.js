/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { projectStore } from "../../../Services/firebase";
import "./style.css";
import {ReactComponent as Delete} from "../../../assets/delete.svg";
function RecipeList({ recipes }) {
    const del = async (e,id) => {
        e.preventDefault();
        console.log("delete",id );
        projectStore.collection("recipes").doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }
            ).catch((error) => {
                console.error("Error removing recipe: ", error);
            });
    };

    return (
        <div className='recipe-list'>
            {recipes && recipes.map((recipe) => (
                <div className='card' key={recipe.id}>
                    <h2>{recipe.title}</h2>
                    <p>Cooking Time: {recipe.cookingTime}</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
                    <Delete className="delete" onClick={(e) => del(e,recipe.id)} />
                </div>
            ))}
        </div>
    );
}
 
export default RecipeList;