import React, { useContext } from "react";
import {
  Container,
  ThumbNail,
  Details,
  Description,
  ChannelDescription,
  ChannelName,
  ChannelStats,
} from "./styles";
import Logo from "../Logo";
import { DimensionsCard } from "../../utils/DimensionsCard";
import { formatDistanceToNow } from "date-fns";
import { ThemeContext } from "../../utils/ContextUtils";
type VideoCardProps = {
  item: any, 
  displayEssentials?: boolean,
  doubleSection?:boolean

}
// key={item?.id} 
// item={item} 
// displayEssentials={CONFIGURATION?.displayEssentials} 
// doubleSection={CONFIGURATION?.doubleSection} 
const VideoCard = ({
  item,
  doubleSection = false,
  displayEssentials = false,
}:VideoCardProps) => {
  const { isDark } = useContext(ThemeContext);
  const cardDimension = DimensionsCard(displayEssentials, doubleSection);
  return (
    <Container to={`/videos/${item?.id}`} doubleSection={doubleSection} displayEssentials={displayEssentials}>
      <ThumbNail
        width={cardDimension.width}
        height={cardDimension.height}
        url={item?.thumbnail_url}
      />
      <Details>
        {!doubleSection && !displayEssentials ? (
          <Logo
            style={{ alignItems: "flex-start", paddingTop: "10px" }}
            width="50px"
            height="50px"
            url={item?.channel?.profile_image_url}
          />
        ) : null}
        <Description isDark={isDark}>
          <ChannelDescription isDark={isDark} doubleSection={doubleSection}>
            {item?.title}
          </ChannelDescription>
          {displayEssentials ? null : (
            <ChannelName>{item?.channel?.name}</ChannelName>
          )}
          {displayEssentials ? <ChannelStats>{item?.view_count} Watching Worldwide</ChannelStats> : <ChannelStats>
            {item?.view_count} views &nbsp; • &nbsp;{" "}
            {item?.published_at
              ? formatDistanceToNow(item?.published_at)
              : "NA"}{" "}
            ago
          </ChannelStats>}
          
        </Description>
      </Details>
    </Container>
  );
};

export default VideoCard;
