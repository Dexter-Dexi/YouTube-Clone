import { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { fetchURL } from '../utils/API';
import { VideoInterface } from '../utils/Interfaces';
import { VideoCard } from '../components/VideoCard';
import { ChannelCard } from '../components/ChannelCard';

export default function Search() {
  const { query } = useParams();

  const [videos, setVideos] = useState<VideoInterface[]>([]);

  useEffect(() => {
    fetchURL(`search?query=${query}`).then(data => setVideos(data.data));
  }, [query]);

  console.log(videos);

  return (
    <Stack sx={{ flexDirection: { md: 'row' }, background: '#000' }}>
      <Box p={2} sx={{ overflowY: 'auto', height: '100vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={'bold'}
          mb={2}
          sx={{ color: 'white' }}>
          {query} <span className="text-red-600"> Videos</span>
        </Typography>

        {/* VIDEO COMPONENT  */}
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'start'}
          gap={2}>
          {videos.map(video => (
            <Box key={video.title}>
              {video.type === 'channel' ? (
                <ChannelCard {...video} />
              ) : (
                <VideoCard {...video} />
              )}
            </Box>
          ))}
        </Stack>
        {/* VIDEO COMPONENT  */}
      </Box>
    </Stack>
  );
}
