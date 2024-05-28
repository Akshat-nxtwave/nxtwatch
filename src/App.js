import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useContext, lazy, Suspense } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { ThemeContext } from "./Context/context";
import { useLocation } from "react-router-dom";
import TitleBar from "./components/TitleBar";
import { OuterContainer, NavigationSection } from "./App.styles.js";
import TabsList from "./components/TabsList";
import ContactDetails from "./components/ContactDetails";
import AuthHandler from "./components/AuthHandler";
import Modal from './components/Modal';
import TrafficLight from './components/TrafficLight';
import { observer } from "mobx-react";

const CategoryVideos = lazy(() => import('./components/CategoryVideos'));
const VideoPage = lazy(() => import('./components/VideoPage'));
const NoRouteFound = lazy(()=>import('./components/NoRouteFound'));

const App = observer(() => {
  const { isDark } = useContext(ThemeContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`App ${isDark ? "Dark" : ""}`}>
      <TitleBar show={location.pathname !== "/login"} setIsOpen={setIsOpen}/>
      <OuterContainer style={{alignItems: location.pathname === "/login" ? "center" : "flex-start"}}>
        {location.pathname === "/login" ? null : (
          <NavigationSection>
            <TabsList />
            <ContactDetails />
          </NavigationSection>
        )}
     <Modal isOpen= {isOpen} onClose={()=>setIsOpen(false)} />
        <Suspense fallback={<div>Loading...</div>}>

        <Routes>
          <Route element={<AuthHandler />}>
            <Route path="/" element={<Home />} />
            <Route path="/nxtwatch" index element={<Home />} />
            <Route path="/trending" element={<CategoryVideos />} />
            <Route path="/gaming" element={<CategoryVideos />} />
            <Route path="/saved-videos" element={<CategoryVideos />} />
            <Route path="/videos/:id" element={<VideoPage />} />
          </Route>
          <Route path="/login" element={<Login path={location?.pathname || '/'}/>} />
          <Route path="/traffic-light" element={<TrafficLight />} />
          <Route path="*" element={<NoRouteFound />} />
        </Routes>
        </Suspense>
      </OuterContainer>
    </div>
  );
})

export default App;
