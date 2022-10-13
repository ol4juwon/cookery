import React from "react";
import { createContext, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";

export const RecipeContext = createContext();

const recipeReducer = (state, action) => {
    switch (action.type) {
    case "CHANGE_RECIPES":
        return { ...state, recipes: action.payload };
    default:
        return state;
    }
};

// eslint-disable-next-line react/prop-types
export const RecipeProvider = ({ children }) => {
    const { data, error, isLoading } = useFetch("http://localhost:3000/recipes");
    const [state, dispatch] = useReducer(recipeReducer, { recipes: [] });
    const changeRecipes = (recipes) => {
        dispatch({ type: "CHANGE_RECIPES", payload: recipes });
    };
    return (
        <RecipeContext.Provider value={{...state, changeRecipes, data, error, isLoading }}>
            {children}
        </RecipeContext.Provider>
    );
};
