import { useState } from "react";
import { GetJWT } from '../utils/GetJWT';

type useRequestProps = {
  url: string
  method: string
  isAuthRequired?: Boolean
}

const useRequest = ({ url, method, isAuthRequired = false }: useRequestProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async (body : Object) => {
    
    try {
      
      setError(null);
      setData(null);
      setLoading(true);
      const jwtToken = GetJWT();
      
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
    } catch (err: any) {
      setError(err);
    }
  };
  return { data, refetch: fetchData, loading, error };
};

export default useRequest;
