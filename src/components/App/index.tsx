
import { useState, useContext, Suspense } from "react";
import { StoreContext } from "../../utils/ContextUtils";
import { useLocation } from "react-router-dom";
import ApiStatus from '../ApiStatus/index'
import TitleBar from "../TitleBar";
import { OuterContainer, NavigationSection } from "./styles";
import TabsList from "../TabsList";
import ContactDetails from "../ContactDetails";
import Modal from '../Modal';
import { observer } from "mobx-react";
import HomeRoutes from "../../routes/HomeRoutes";
import { getUrlFromPath } from "../../utils/pathUrlUtils";

const App = observer(() => {
  const val = useContext(StoreContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={`App ${val.store.isDark ? "Dark" : ""}`}>
      <TitleBar show={location.pathname !== "/login"} setIsOpen={setIsOpen}/>
      <OuterContainer style={{alignItems: location.pathname === "/login" ? "center" : "flex-start"}}>
        {location.pathname === "/login" ? null : (
          <NavigationSection>
            <TabsList />
            <ApiStatus path={getUrlFromPath(location.pathname)}/>
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
