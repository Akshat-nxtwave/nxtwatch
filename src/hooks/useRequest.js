import { useState } from "react";
import { getJWT } from '../utils/helperFunctions';
const useRequest = ({ url, method, isAuthRequired = false }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async (body) => {
    
    try {
     
      setError(null);
      setData(null);
      setLoading(true);
      const jwtToken = getJWT();
      
      const response = await fetch(url, { 
        method, 
        body: method === 'GET' ? undefined : JSON.stringify(body),
        headers: isAuthRequired ? {
          'Authorization': `Bearer ${jwtToken}`
        } : undefined
    })
    .then((res) => res.json())
    .then(d=>{
      if(d?.error_msg) setError(d);
      else setData(d);
    });
    setLoading(false);
    return response;
    } catch (err) {
      setError(err);
    }
  };
  return { data, refetch: fetchData, loading, error };
};

export default useRequest;
