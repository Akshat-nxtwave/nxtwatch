import { createContext } from "react";
// import useLocalStorage from "../hooks/useLocalStore";
import ThemeClass from "../store/Models/theme";
import VideosListClass from "../store/Models/videosList";
export type StoreContextType = {
  store: ThemeClass;
  savedVideosStore: VideosListClass;
};

export const StoreContext = createContext<StoreContextType>({
  store: new ThemeClass(),
  savedVideosStore: new VideosListClass(),
});

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
