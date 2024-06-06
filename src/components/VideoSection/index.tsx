import React, { useState, useEffect, useContext } from "react";
import { OuterContainer, VideosBox } from "./styles";
import useRequest from "../../hooks/useRequest";
import Search from "../Search";
import VideoCard from "../VideoCard";
import Placeholder from "../Placeholder";
import ErrorContainer from "../ErrorContainer";
import { StoreContext } from "../../utils/ContextUtils";

const VideoSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const {
    data,
    loading,
    refetch,
    error,
    getVideosData = () => {},
  } = useRequest({
    url: `https://apis.ccbp.in/videos/all?search=${searchInput}`,
    method: "GET",
    isAuthRequired: true,
    save: true,
    type: "/",
  });
  const val = useContext(StoreContext);

  const onChange = (value: string) => {
    setSearchInput(value);
    if (value?.length === 0) {
      refetch({});
    }
  };
  useEffect(() => {
    const l = getVideosData("/");
    if (!l?.total) refetch({});
  }, []);

  return (
    <OuterContainer isDark={val.store.isDark}>
      <Search
        searchInput={searchInput}
        setSearchInput={onChange}
        loading={loading}
        refetch={refetch}
      />
      <VideosBox>
        {!loading && !!error ? (
          <ErrorContainer
            mainImage={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${
              val.store.isDark ? "dark" : "light"
            }-theme-img.png`}
            mainHeading={"OOPS! Something Went Wrong"}
            descriptionText={
              "We are having some trouble to complete your request. Please Try Again."
            }
            buttonText={"Retry"}
          />
        ) : null}
        {loading
          ? [...Array(6)].map((_, index) => (
              <Placeholder height="250px" width="28%" key={index} />
            ))
          : null}

        {!loading && data?.total > 0
          ? data.videos.map((item: any) => (
              <VideoCard key={item.id} item={item} />
            ))
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
