import { useState } from "react";
import { GetJWT } from '../utils/GetJWT';
import StoreClasses from "../store/mobx";

type useRequestProps = {
  url: string
  method: string
  isAuthRequired?: Boolean,
  save?: Boolean
}

const videosData = new StoreClasses.VideosList();

const useRequest = ({ url, method, isAuthRequired = false, save = false }: useRequestProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
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
      if(!save){
        if(d?.error_msg) setError(d);
        else setData(d);
      }
      else {
        videosData.saveVideos(d);
      }
    });
    setLoading(false);

    return response;
    } catch (err: any) {
      setError(err);
    }
  };
  if(!save)
  return { data, refetch: fetchData, loading, error };
  return {data: videosData.savedVideos, refetch:fetchData, loading, error}
};

export default useRequest;
