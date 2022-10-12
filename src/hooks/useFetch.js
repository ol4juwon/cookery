import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
export const useFetch = (url, method ='GET') => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [options, setOptions] = useState({});

  const postData = (postData) => {
    setOptions({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  }   


  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (fetchOptions) => {
      setIsLoading(true);
      try{

      const response = await fetch(url,{...fetchOptions, signal: controller.signal});
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const jsonData = await response.json();
      setData(jsonData);
      // setTimeout(() => {
        setError(null);
        setIsLoading(false);
      // }, 2000);
    }catch(err){
      console.log(err);
      if(err.name === 'AbortError'){
        console.log('fetch aborted');
      }else{
        setError(err.message);
        setIsLoading(false);
      }
    }
    };
    if(method === 'GET'){
      console.log('getting')
    fetchData();}

    if(method === 'POST' && options){
      console.log(method, "firing") 
      
      fetchData(options);
  }

    return () => controller.abort();

  }, [url, options, method]);

  return { data, isLoading, error, postData };
};
