import { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import ErrorContainer from "../../components/ErrorContainer";
import { StoreContext } from "../../utils/ContextUtils";
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
import Logo from "../../components/Logo";
import { observer } from "mobx-react";

const VideoPage = observer(() => {
  const [likedInfo, setLikedInfo] = useState(0);
  const val = useContext(StoreContext);
  console.log([...val.savedVideosStore.savedVideos.videos], "yyyyy");
  const handleLikeStatus = (type: string) => {
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
    save: true,
  });
  const isSaved = val.savedVideosStore.savedVideos.videos.find(
    (video: any) => video?.id === data?.video_details?.id
  );

  useEffect(() => {
    refetch({});
  }, [id]);

  if (!loading && !!error) {
    return (
      <Container isDark={val.store.isDark}>
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
      </Container>
    );
  }

  return (
    <Container data-testid="video-page" isDark={val.store.isDark}>
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
      <Title isDark={val.store.isDark}>{data?.video_details?.title}</Title>
      <Features isDark={val.store.isDark}>
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
            onClick={() =>
              val.savedVideosStore.setSavedVideos(data.video_details)
            }
            component={
              <BiListPlus
                size="24"
                color={isSaved ? "var(--bright-red)" : ""}
              />
            }
          />
          <Stats
            id="video-page-save"
            style={{ color: isSaved ? "var(--bright-red)" : "" }}
          >
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
          <Text isDark={val.store.isDark}>
            {data?.video_details?.channel?.name}
          </Text>
          <Text className="light" isDark={val.store.isDark}>
            {data?.video_details?.channel?.subscriber_count} Subscribers
          </Text>
        </DescriptionText>
      </Channel>
      <Title
        isDark={val.store.isDark}
        style={{ marginLeft: "80px", width: "60%" }}
      >
        {data?.video_details?.description}
      </Title>
    </Container>
  );
});

export default VideoPage;
