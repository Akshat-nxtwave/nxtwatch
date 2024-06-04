import React, {useContext} from "react";

import {
  ContentSection,

} from "./styles";
import CardContainer from "../CardContainer";
import VideoSection from "../VideoSection";
import { ThemeContext } from "../../utils/ContextUtils";

const Home = () => {
  const val = useContext(ThemeContext);
  return (
     
        <ContentSection isDark={val.store.isDark}>
          <CardContainer/>
          <VideoSection />
        </ContentSection>

  );
};

export default Home;
