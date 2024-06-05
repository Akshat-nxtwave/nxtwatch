import { createContext } from "react";
// import useLocalStorage from "../hooks/useLocalStore";
import { ThemeClassType } from "../store/Models/theme";
import { VideosListType } from "../store/Models/videosList";
export type StoreContextType =
  | {
      store: ThemeClassType;
      savedVideosStore: VideosListType;
    }
  | any;

export const StoreContext = createContext<StoreContextType>(null);

// const ContextWrapper = ({children})=>{
//     const [savedVideos, setSavedVideos] = useLocalStorage('savedVideos', []);
//     const [isDark, setIsDark] = useLocalStorage('isDarkTheme', false);

//     return(
//         <StoreContext.Provider value={{isDark, setIsDark, savedVideos, setSavedVideos}}>
//             {children}
//         </StoreContext.Provider>
//     )
// }

// export default ContextWrapper;
