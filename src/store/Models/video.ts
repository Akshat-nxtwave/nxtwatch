export type VideoType = {
  id: string;
  title: string;
  video_url?: string;
  thumbnail_url: string;
  channel?: {
    name: string;
    profile_image_url?: string;
    subscriber_count?: string;
  };
  view_count: string;
  published_at?: string;
  description?: string;
};

export default class VideoClass {
  id: string;
  title: string;
  videoUrl: string | undefined;
  thumbnailUrl: string;
  channel:
    | {
        name: string | undefined;
        profileImageUrl: string | undefined;
        subscriberCount: string | undefined;
      }
    | undefined;
  viewCount: string;
  publishedAt: string | undefined;
  description: string | undefined;

  constructor(data: VideoType) {
    this.id = data.id;
    this.title = data.title;
    this.videoUrl = data?.video_url;
    this.thumbnailUrl = data.thumbnail_url;
    this.channel =
      {
        name: data?.channel?.name,
        profileImageUrl: data?.channel?.profile_image_url,
        subscriberCount: data?.channel?.subscriber_count,
      } || undefined;
    this.viewCount = data.view_count;
    this.publishedAt = data?.published_at;
    this.description = data?.description;
    // autorun(() => console.log(this.isDark, "ooxoooo"));
  }
}
