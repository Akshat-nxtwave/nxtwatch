import React, { useEffect, useContext, useState } from "react";
import { Container, Title, LogoContainer, VideosContainer } from "./styles";
import Logo from "../Logo";
import VideoCard from "../VideoCard";
import useRequest from "../../hooks/useRequest";
import { ThreeDots } from "react-loader-spinner";
import ErrorContainer from "../ErrorContainer";
import { CATEGORY_CONFIG } from "../../utils/constants";
import { useLocation } from "react-router-dom";
import  { ThemeContext } from "../../Context/context";

const CategoryVideoes = () => {
  const { savedVideos, isDark } = useContext(ThemeContext);
  const location = useLocation();
  const [list, setList] = useState([]);
  const CONFIGURATION = CATEGORY_CONFIG?.[location?.pathname];
  
  const { data, loading, refetch, error } = useRequest({
    url: CONFIGURATION?.apiUrl,
    method: "GET",
    isAuthRequired: true,
  });
 
  useEffect(() => {
    if(CONFIGURATION?.saved) { 
        setList(savedVideos);
    }
    else {
      refetch();
      setList(data?.videos);
    }
  }, [JSON.stringify(CONFIGURATION)]);

  useEffect(()=>{
    if(!CONFIGURATION?.saved) { 
      setList(data?.videos);
    }
  },[data]);





  return (
    <Container isDark={isDark}>
      {loading ? (
        <ThreeDots
          visible={true}
          height="120"
          width="120"
          color="var(--bright-red)"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : null}
      {!loading && !!error ? <ErrorContainer
            mainImage={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${isDark ? 'dark' : 'light'}-theme-img.png`}
            mainHeading={"OOPS! Something Went Wrong"}
            descriptionText={"We are having some trouble to complete your request. Please Try Again."}
            buttonText={"Retry"}
          />: null}
      {!loading && CONFIGURATION.saved && list.length === 0 ?  <VideosContainer isDark={isDark} style={{height:'85vh'}}>
        <ErrorContainer
          mainImage="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          mainHeading="No saved videos found"
          descriptionText="You can save your videos while watching them"
          /> 
          </VideosContainer>
          : null}  

      {!loading && list?.length > 0 ? (
        <>
          <LogoContainer isDark={isDark}>
            <Logo
              style={{
                padding: "24px",
                margin: "0 20px",
                borderRadius: "50%",
                backgroundColor: isDark ?"var(--dark-charcoal)":"var(--light-blue-gray)",
              }}
              component={CONFIGURATION?.logoComponent({ size: "26px", color: "red" })}
            />
            <Title>{CONFIGURATION?.title}</Title>
          </LogoContainer>
          <VideosContainer isDark={isDark} doubleSection={CONFIGURATION?.doubleSection}>
            {}
            {list?.map((item) => {
              return (
                <VideoCard key={item.id} item={item} displayEssentials={CONFIGURATION?.displayEssentials} doubleSection={CONFIGURATION?.doubleSection} />
              );
            })}
          </VideosContainer>
        </>
      ) : null}
      {!loading && !CONFIGURATION?.saved && list?.length === 0 ? (
        <ErrorContainer
          mainImage="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          mainHeading={"No Search result found"}
          descriptionText={"Try different key or remove search filter"}
          buttonText={"Retry"}
          />
      ) : null}
      
    </Container>
  );
};

export default CategoryVideoes;