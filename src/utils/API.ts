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
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/channels/${channelId}`,
    {
      headers: {
        'X-RapidAPI-Key': '2ecfb08f0amsh815e4159e117c2bp11bedejsn2b955a0250fa',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    }
  );
  console.log(data);
  return data;
};

export const fetchChannelDetails = async (channelId: string) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/search/${channelId}`,
    {
      headers: {
        'X-RapidAPI-Key': '2ecfb08f0amsh815e4159e117c2bp11bedejsn2b955a0250fa',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    }
  );
  console.log(data);
  return data;
};

/* 

import axios from "axios";
code to fetch cahnnel videos  
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {channelId: 'UCmXmlB4-HJytD7wek0Uo97A', part: 'snippet,id'},
  headers: {
    'X-RapidAPI-Key': '2ecfb08f0amsh815e4159e117c2bp11bedejsn2b955a0250fa',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

*/

/* 

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/channels',
  params: {id: 'UCmXmlB4-HJytD7wek0Uo97A', part: 'statistics'},
  headers: {
    'X-RapidAPI-Key': '2ecfb08f0amsh815e4159e117c2bp11bedejsn2b955a0250fa',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

*/

/*

const options = {
url: 'https://youtube-v3-alternative.p.rapidapi.com',
params: { query: 'gaming' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'https://youtube-v3-alternative.p.rapidapi.com',
  },
};

*/

/* 

import axios from "axios";
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

*/
