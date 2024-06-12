import React, { useContext } from "react";
import { TABS_CONSTANTS } from "../../constants/constants";
import { Container, InnerContainer, Text } from "./styles";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import { StoreContext } from "../../utils/ContextUtils";

const TabsList = () => {
  const location = useLocation();
  const val = useContext(StoreContext);
  return (
    <Container>
      {TABS_CONSTANTS.map((tab) => (
        <InnerContainer
          isDark={val.store.isDark}
          to={tab.path}
          className={tab.path === location.pathname ? "active" : ""}
          key={tab.displayName}
        >
          <Logo
            style={{
              color:
                tab.path === location.pathname ? "red" : "var(--smoky-gray",
            }}
            size="30px"
            component={tab.logo({ size: "22px" })}
          />
          <Text className="tabs-list">{tab.displayName}</Text>
        </InnerContainer>
      ))}
    </Container>
  );
};

export default TabsList;
