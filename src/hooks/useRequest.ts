import { useState } from "react";
import { GetJWT } from '../utils/GetJWT';
import StoreClasses from "../store/mobx";
import { fetchData } from "../utils/FetchUtils";
import { useContext } from "react";
import { StoreContext } from "../utils/ContextUtils";
import { getFormattedUrl } from "../utils/pathUrlUtils";
type useRequestProps = {
  url: string
  method: string
  isAuthRequired?: Boolean,
  save?: Boolean
  type?: string
}

const videosDataMain = new StoreClasses.VideosList();
const videosDataTrending = new StoreClasses.VideosList();
const videosDataGaming = new StoreClasses.VideosList();

const getVideosData = (type: string): any => {
    
    if(type === '/trending') return videosDataTrending.savedVideos;
    else if(type === '/gaming') return videosDataGaming.savedVideos;
    return videosDataMain.savedVideos;
}
const setVideosData = (type:string, data:any) => {
  
  if(type === '/trending') videosDataTrending.saveVideos(data);
  else if(type === '/gaming') return videosDataGaming.saveVideos(data);
  return videosDataMain.saveVideos(data);
}
const useRequest = ({ url, method, isAuthRequired = false, save = false, type = "" }: useRequestProps) => {
  const val = useContext(StoreContext);
  const urlParams = getFormattedUrl(url);
  console.log(val.store.apiStatus[urlParams] ,'insideuseparamgggggggg')
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  
  
  const fetchDataResponse = async (body : Object) => {
    try {
      const currentStatus = val.store.apiStatus[urlParams];
      val.store.setApiStatus(urlParams, currentStatus !== "SUCCESS" || "FAILURE" ? "PENDING": currentStatus);
      setError(null);
      setData(null);
      setLoading(true);

      const jwtToken = GetJWT();    
      
    const response = await fetchData(url,method, body, isAuthRequired, jwtToken)
    .then((res) => res.json())
    .then(d=>{
      if(!save){
        if(d?.error_msg) setError(d);
        else setData(d); 
      }
      else {
        setVideosData(type, d)
      }
    })
    setLoading(false);
    val.store.setApiStatus(urlParams, "SUCCESS")
    return response;
    } catch (err: any) {
      setError(err);
      val.store.setApiStatus(urlParams, "FAILED");
    }
  };
  if(!save) return { data, refetch: fetchDataResponse, loading, error };
  return { data: getVideosData(type), refetch: fetchDataResponse, loading, error, getVideosData }
};

export default useRequest;
