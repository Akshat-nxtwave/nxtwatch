import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { ThemeContext } from "./Context/context";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CategoryVideos from "./components/CategoryVideos";
import TitleBar from "./components/TitleBar";
import { OuterContainer, NavigationSection } from "./App.styles.js";
import TabsList from "./components/TabsList";
import ContactDetails from "./components/ContactDetails";
import VideoPage from "./components/VideoPage/index.js";
import Modal from './components/Modal';
import NoRouteFound from './components/NoRouteFound';

function App() {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!document.cookie.includes("jwtToken")) {
      if (window.location.pathname !== "/login") {
        navigate("/login");
      }
    }
  }, []);

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trending" element={<CategoryVideos />} />
          <Route path="/gaming" element={<CategoryVideos />} />
          <Route path="/saved-videos" element={<CategoryVideos />} />
          <Route path="/videos/:id" element={<VideoPage />} />
          <Route path="*" element={<NoRouteFound />} />
        </Routes>
      </OuterContainer>
    </div>
  );
}

export default App;
