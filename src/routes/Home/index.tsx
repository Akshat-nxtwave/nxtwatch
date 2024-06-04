import React, {useContext} from "react";

import {
  ContentSection,

} from "./styles";
import CardContainer from "../../components/CardContainer";
import VideoSection from "../../components/VideoSection";
import { StoreContext } from "../../utils/ContextUtils";

const Home = () => {
  const val = useContext(StoreContext);
  return (
     
        <ContentSection isDark={val.store.isDark}>
          <CardContainer/>
          <VideoSection />
        </ContentSection>

  );
};

export default Home;
