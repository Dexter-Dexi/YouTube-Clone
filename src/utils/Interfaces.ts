export interface channelI {
  channelId: string;
  channelTitle: string;
  description: string;
  subscriberCount: string;
  thumbnail: { url: string }[];
  title: string;
  type: string;
  videoCount: null;
}

export interface channelVideos {
  kind: string;
  id: { kind: string; videoId: string };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
  // [];
}

export interface ChannelDetail {
  kind: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
  items: [
    {
      kind: string;
      id: string;
      snippet: {
        title: string;
        description: string;
        customUrl: string;
        publishedAt: string;
        thumbnails: {
          default: {
            url: string;
            width: number;
            height: number;
          };
          medium: {
            url: string;
            width: number;
            height: number;
          };
          high: {
            url: string;
            width: number;
            height: number;
          };
        };
        localized: {
          title: string;
          description: string;
        };
        country: string;
      };
      contentDetails: { relatedPlaylists: { likes: string; uploads: string } };
      statistics: {
        viewCount: string;
        subscriberCount: string;
        hiddenSubscriberCount: boolean;
        videoCount: '99';
      };
      brandingSettings: {
        channel: {
          title: string;
          description: string;

          keywords: string;
          unsubscribedTrailer: string;
          country: string;
        };
        image: {
          bannerExternalUrl: string;
        };
      };
    }
  ];
}

export interface VideoUI {
  id: string;
  title: string;
  lengthSeconds: string;
  keywords: [string];
  channelTitle: string;
  channelId: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
  allowRatings: true;
  viewCount: string;
  isPrivate: false;
  isUnpluggedCorpus: false;
  isLiveContent: false;
  isCrawlable: true;
  isFamilySafe: true;
  availableCountries: string[];
  isUnlisted: boolean;
  category: string;
  publishDate: string;
  uploadDate: string;
  storyboards: string;
}

export interface relatedVideos {
  type: string;
  videoId: string;
  title: string;
  lengthText: string;
  viewCount: string;
  publishedTimeText: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
  channelTitle: string;
  channelId: string;
  authorThumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
}
export interface VideoInterface {
  type: string;
  videoId: string;
  title: string;
  channelId: string;
  channelThumbnail: any[];
  channelTitle: string;
  description: string;
  lengthText: string;
  publishedText: string;
  richThumbnail: any[];
  thumbnail: { url: string }[];
  viewCount: string;
}
