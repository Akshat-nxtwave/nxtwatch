import { createContext } from "react";
// import useLocalStorage from "../hooks/useLocalStore";

export const ThemeContext = createContext();


// const ContextWrapper = ({children})=>{
//     const [savedVideos, setSavedVideos] = useLocalStorage('savedVideos', []);
//     const [isDark, setIsDark] = useLocalStorage('isDarkTheme', false);

//     return(
//         <ThemeContext.Provider value={{isDark, setIsDark, savedVideos, setSavedVideos}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export default ContextWrapper;




