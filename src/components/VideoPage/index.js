import React, { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import ErrorContainer from "../ErrorContainer";
import { ThemeContext } from "../../Context/context";
import { BiLike, BiListPlus } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import {
  Container,
  Title,
  Features,
  Stats,
  Channel,
  Text,
  DescriptionText,
} from "./styles";
import Logo from "../Logo";

const VideoPage = () => {
  const [likedInfo, setLikedInfo] = useState(0);
  const { savedVideos, setSavedVideos, isDark } = useContext(ThemeContext);
  const handleLikeStatus = (type) => {
    if (type === "like") {
      setLikedInfo((prev) => (prev === 1 ? 0 : 1));
    } else {
      setLikedInfo((prev) => (prev === -1 ? 0 : -1));
    }
  };
  const { id } = useParams();
  const { data, refetch, loading, error } = useRequest({
    url: `https://apis.ccbp.in/videos/${id}`,
    method: "GET",
    isAuthRequired: true,
  });

  const isSaved = savedVideos.find(
    (video) => video.id === data?.video_details?.id
  );
  const handleSave = () => {
    if (!isSaved) {
      setSavedVideos([...savedVideos, data?.video_details]);
    } else {
      const newSavedVideos = savedVideos.filter(
        (video) => video?.id !== data?.video_details?.id
      );
      setSavedVideos(newSavedVideos);
    }
  };
  useEffect(() => {
    refetch();
  }, [id]);

  if (!loading && !!error) {
    return (
      <Container isDark={isDark}>
        <ErrorContainer
          mainImage={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${
            isDark ? "dark" : "light"
          }-theme-img.png`}
          mainHeading={"OOPS! Something Went Wrong"}
          descriptionText={
            "We are having some trouble to complete your request. Please Try Again."
          }
          buttonText={"Retry"}
        /> 
      </Container>
    );
  }

  return (
    <Container isDark={isDark}>
      <ReactPlayer
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
        width="60vw"
        height="600px"
        url={data?.video_details?.video_url}
      />
      <Title isDark={isDark}>{data?.video_details?.title}</Title>
      <Features isDark={isDark}>
        <Stats>
          {" "}
          {data?.video_details?.view_count} views &nbsp; • &nbsp;{" "}
          {data?.video_details?.published_at
            ? formatDistanceToNow(data?.video_details?.published_at)
            : "NA"}{" "}
          ago
        </Stats>
        <Stats>
          <Logo
            onClick={() => handleLikeStatus("like")}
            component={BiLike({
              size: "24",
              color: likedInfo === 1 ? "var(--bright-red)" : "",
            })}
          />
          <Stats style={{ color: likedInfo === 1 ? "var(--bright-red)" : "" }}>
            {likedInfo === 1 ? "Liked" : "Like"}
          </Stats>
          <Logo
            onClick={() => handleLikeStatus("dislike")}
            component={
              <AiOutlineDislike
                size="24"
                color={likedInfo === -1 ? "var(--bright-red)" : ""}
              />
            }
          />
          <Stats style={{ color: likedInfo === -1 ? "var(--bright-red)" : "" }}>
            {likedInfo === -1 ? "Disliked" : "Dislike"}
          </Stats>

          <Logo
            onClick={() => handleSave(data)}
            component={
              <BiListPlus
                size="24"
                color={isSaved ? "var(--bright-red)" : ""}
              />
            }
          />
          <Stats style={{ color: isSaved ? "var(--bright-red)" : "" }}>
            Save{isSaved ? "d" : ""}
          </Stats>
        </Stats>
      </Features>
      <Channel>
        <Logo
          width="60px"
          height="60px"
          url={data?.video_details?.channel?.profile_image_url}
        />
        <DescriptionText>
          <Text isDark={isDark}>{data?.video_details?.channel?.name}</Text>
          <Text className="light" isDark={isDark}>
            {data?.video_details?.channel?.subscriber_count} Subscribers
          </Text>
        </DescriptionText>
      </Channel>
      <Title isDark={isDark} style={{ marginLeft: "80px", width: "60%" }}>
        {data?.video_details?.description}
      </Title>
    </Container>
  );
};

export default VideoPage;
