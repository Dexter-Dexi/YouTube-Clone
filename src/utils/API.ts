import axios from 'axios';

const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': '2ecfb08f0amsh815e4159e117c2bp11bedejsn2b955a0250fa',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
  },
};

export const fetchURL = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

//TODO   😷
export const fetchChannelVideos = async (channelId: string) => {
  console.log(channelId);

  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/search`,
    {
      params: {
        channelId: channelId,
        part: 'snippet,id',
        maxResults: '50',
      },
      headers: {
        'X-RapidAPI-Key': '2ecfb08f0amsh815e4159e117c2bp11bedejsn2b955a0250fa',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    }
  );
  return data.items;
};

export const fetchChannelDetails = async (channelId: string) => {
  console.log(channelId);

  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/channels`,
    {
      params: { id: channelId, part: 'snippet,statistics' },
      headers: {
        'X-RapidAPI-Key': '2ecfb08f0amsh815e4159e117c2bp11bedejsn2b955a0250fa',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    }
  );
  return data;
};
