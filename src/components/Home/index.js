import React, {useContext} from "react";

import {
  ContentSection,

} from "./styles";
import CardContainer from "../CardContainer";
import VideoSection from "../VideoSection";
import { ThemeContext } from "../../Context/context";

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  return (
     
        <ContentSection isDark={isDark}>
          <CardContainer/>
          <VideoSection />
        </ContentSection>

  );
};

export default Home;
