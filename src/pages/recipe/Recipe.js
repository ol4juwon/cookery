import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { projectStore } from "../../Services/firebase";
import EDIT from "../../assets/edit.svg";
// import {useFetch} from "../../hooks/useFetch";
import {ReactComponent as Cook} from "../../assets/cook.svg";
import "./Recipe.css";
const Recipe = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const {id} = useParams();

    useEffect(() => {
        setIsLoading(true);
        projectStore.collection("recipes").doc(id).onSnapshot((snapshot) => {
            if(!snapshot.exists){
                setError("Recipe not found");
            }else{
                setData(snapshot.data());
            }
        }
        );
        setIsLoading(false);

    }, [id]);

    // const {data: recipe, isLoading, error} = useFetch(`http://localhost:3000/recipes/${params.id}`);
    return (
        <div className='recipe'>
            <div>
                <Cook width="200px" height="100px" style={{padding: "20px", justifyContent: "center"}}/>
            </div>
            {error && <p className='error'>{error}</p>}
            {isLoading && <div className='loading'>Loading...</div>}
            {
                !isLoading && !error && data && (
                    <>
                        <h2>{data.title}<img className="edit" src={EDIT} alt="edit" /></h2>
                        <p>Prep Time: {data.cookingTime}</p>
                        <ul>
                            {data.ingredients.map(
                                (ingredient, index) => <li key={index}>{ingredient}</li>
                            )}
                        </ul>
                        <h3>Method</h3>
                        <p className='method'>
                            {data.method}</p>
                    </>
                )
        
            }
        </div>
    );
};

export default Recipe;