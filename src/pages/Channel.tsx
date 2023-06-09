import { useState, useEffect } from 'react';
import { Box, Stack, Card, CardMedia } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchChannelVideos, fetchChannelDetails } from '../utils/API';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl } from '../utils/constants';
import { channelVideos, ChannelDetail } from '../utils/Interfaces';

export default function Channel() {
  const [channelDetils, setChannelDetils] = useState<ChannelDetail>();
  const [videos, setVideos] = useState<channelVideos[]>([]);

  const { id } = useParams();

  useEffect(() => {
    try {
      fetchChannelDetails(`${id}`).then(data => setChannelDetils(data));

      fetchChannelVideos(`${id}`).then(data => setVideos(data));
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  if (!channelDetils || !videos)
    return (
      <div>
        <div className="w-full h-full bg-blue-500 text-black">test</div>;
      </div>
    );

  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Box>
        <div className="w-full h-[250px] gradent_Back"></div>
      </Box>
      <div className="h-[180px]   pb-5  text-stone-300 font-extrabold flex flex-col place-content-center mx-16 border border-black   ">
        <img
          src={channelDetils?.items[0]?.snippet?.thumbnails?.default.url}
          alt="LOGO"
          className="w-[200px] h-[200px] rounded-full object-contain mx-auto -translate-y-10 border-t-4 border-x-4 border-t-white "
        />
        <p className="m-4 text-center -translate-y-10 ">
          {channelDetils?.items[0]?.snippet?.title}
          <CheckCircle className="ml-3" />
        </p>
      </div>
      {
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          gap={5}>
          {videos.map(video => (
            <Box>
              <div className="">
                <div className="min-h-[300px] bg-slate-400/20 rounded-xl hover:scale-105 transition pb-5 hover:ring-2 ring-red-500">
                  <Card sx={{ borderRadius: 4 }}>
                    <Link
                      to={
                        video.id.videoId
                          ? `/video/${video.id.videoId}`
                          : demoVideoUrl
                      }>
                      <CardMedia
                        image={video.snippet.thumbnails.default.url}
                        sx={{ width: 358, height: 180, borderRadius: 4 }}
                      />
                    </Link>
                  </Card>
                  <div className="px-3 py-2 text-justify  max-w-[350px] text-white font-bold">
                    {video?.snippet?.title}
                  </div>
                  <p className="font-extrabold px-3 text-stone-400 ">
                    {video.snippet.channelTitle}
                    <CheckCircle className="ml-3" />
                  </p>
                </div>
              </div>
            </Box>
          ))}
        </Stack>
      }
    </Box>
  );
}
