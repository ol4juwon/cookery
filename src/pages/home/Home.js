import "./Home.css";
import React, { useEffect, useState } from "react";
import { projectStore } from "../../Services/firebase";
import RecipeList from "../components/RecipeList";
const Home = () => {
    const [data,setDate] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        projectStore.collection("recipes").get()
            .then((snapshot) => {
                console.log(snapshot);
                if(snapshot.empty){
                    setError("No Recipes  found");
                }else{
                    const data = snapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        };
                    });
                    setDate(data);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });

        setIsLoading(false);
    },[]);
    return (
        <div className='home'>
            {error && <div className='error'>{error}</div>}
            {isLoading && <div className='loading'>Loading...</div>}
      
            {!isLoading && !error &&  <RecipeList recipes={data} />}
    
        </div>
   
    );
};

export default Home;