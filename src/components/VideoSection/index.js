import React, { useState, useEffect, useContext } from "react";
import { OuterContainer, VideosBox } from "./styles";
import useRequest from "../../hooks/useRequest";
import Search from "../Search";
import VideoCard from "../VideoCard";
import Placeholder from "../Placeholder";
import ErrorContainer from "../ErrorContainer";
import { ThemeContext } from "../../Context/context";

const VideoSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, loading, refetch, error } = useRequest({
    url: `https://apis.ccbp.in/videos/all?search=${searchInput}`,
    method: "GET",
    isAuthRequired: true,
  });
  console.log(error, "iiii");
  const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    if (searchInput.length === 0) {
      refetch();
    }
  }, [searchInput]);

  

  return (
    <OuterContainer isDark={isDark}>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        loading={loading}
        refetch={refetch}
      />
      <VideosBox>
        {!loading && !!error ? <ErrorContainer
            mainImage={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${isDark ? 'dark' : 'light'}-theme-img.png`}
            mainHeading={"OOPS! Something Went Wrong"}
            descriptionText={"We are having some trouble to complete your request. Please Try Again."}
            buttonText={"Retry"}
          />: null}
        {loading
          ? [...Array(6)].map((_, index) => (
              <Placeholder height="250px" width="28%" key={index} />
            ))
          : null}

        {!loading && data?.total > 0
          ? data?.videos?.map((item) => <VideoCard key={item.id} item={item} />)
          : null}

          
        {!loading && data?.total === 0 ? (
          <ErrorContainer
            mainImage="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            mainHeading={"No Search result found"}
            descriptionText={"Try different key or remove search filter"}
            buttonText={"Retry"}
          />
        ) : null}
      </VideosBox>
    </OuterContainer>
  );
};

export default VideoSection;
