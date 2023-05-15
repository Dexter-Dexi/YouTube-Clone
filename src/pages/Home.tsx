import { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { SideBar } from '../components/SideBar';
import { fetchURL } from '../utils/API';
import { VideoInterface } from '../utils/Interfaces';
import { VideoCard } from '../components/VideoCard';
import { ChannelCard } from '../components/ChannelCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState<VideoInterface[]>([]);

  const set = (name: string) => setSelectedCategory(name);

  useEffect(() => {
    fetchURL(`search?query=${selectedCategory}`).then(data =>
      setVideos(data.data)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' }, background: '#000' }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}>
        <SideBar catagory={selectedCategory} set={set} />
        <Typography color={'white'}>Copyright 2023 YouTube</Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '100vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={'bold'}
          mb={2}
          sx={{ color: 'white' }}>
          {selectedCategory} <span className="text-red-600"> Videos</span>
        </Typography>
        {/* @ts-ignre */}
        {/* <Videos {...videos} /> */}

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
