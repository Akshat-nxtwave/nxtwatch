
import { useState, useContext, Suspense } from "react";

import { ThemeContext } from "../../utils/ContextUtils";
import { useLocation } from "react-router-dom";
import TitleBar from "../TitleBar";
import { OuterContainer, NavigationSection } from "./styles";
import TabsList from "../TabsList";
import ContactDetails from "../ContactDetails";
import Modal from '../Modal';
import { observer } from "mobx-react";
import HomeRoutes from "../../routes/HomeRoutes";



const App = observer(() => {
  const { isDark } = useContext(ThemeContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
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
     <Modal isOpen={isOpen} onClose={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>setIsOpen(false)} />
        <Suspense fallback={<div>Loading...</div>}>
            <HomeRoutes />
        </Suspense>
      </OuterContainer>
    </div>
  );
})

export default App;
